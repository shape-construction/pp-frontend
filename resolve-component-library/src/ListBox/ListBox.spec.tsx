import React from 'react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';

import { DefaultParams, ListBox, ListBoxProps } from './ListBox';
import * as stories from './ListBox.stories';
import { eachDeviceSize } from '../tests/test-utils';

const { Standard: Template } = composeStories(stories);

type Option = { name: string; group?: boolean; disabled?: boolean; description?: string };
const defaultOptions: Option[] = [
  { name: 'Option 1' },
  { name: 'Option 2' },
  { name: 'Option 3' },
  { name: 'Option 4' },
  { name: 'Option 5', disabled: true },
  { name: 'Option 6', description: 'Description example' },
];

const renderListBox = async (
  props?: Partial<ListBoxProps<DefaultParams>>,
  options = defaultOptions
) => {
  const getPopOverButton = () => screen.getByRole('button', { name: 'listbox-button' });
  const getInnerButton = () => within(getPopOverButton());
  const getLabelText = (label: string | RegExp) => getInnerButton().getByText(label);
  const getPopOverOptionsPanel = async (size: 'sm' | 'lg') =>
    screen.findByRole('presentation', { name: `popover-panel-${size}` });
  const getPopOverOptions = async (size: 'sm' | 'lg') =>
    within(
      await screen.findByRole('presentation', { name: `popover-panel-${size}` })
    ).findAllByRole('option');
  const getPopOverGroups = async (size: 'sm' | 'lg') =>
    within(
      await screen.findByRole('presentation', { name: `popover-panel-${size}` })
    ).findAllByRole('group');

  const renderComponent = render(
    <Template selected={options[0]} {...props}>
      {options.map(({ disabled, ...option }) =>
        option.group ? (
          <ListBox.Group key={option.name} label={option.name} />
        ) : (
          <ListBox.Option key={option.name} disabled={disabled} option={option} />
        )
      )}
    </Template>
  );

  return {
    ...renderComponent,
    getInnerButton,
    getLabelText,
    getPopOverOptions,
    getPopOverGroups,
    getPopOverOptionsPanel,
    getPopOverButton,
  };
};

describe('ListBox', () => {
  eachDeviceSize((_, size) => {
    it('renders the Listbox without selected option', async () => {
      const { getLabelText } = await renderListBox({ selected: { name: '' } });

      expect(getLabelText('None')).toBeInTheDocument();
    });

    it('renders the Listbox with the first option as default selected', async () => {
      const { getLabelText } = await renderListBox();

      expect(getLabelText(/Group/i)).toBeInTheDocument();
      expect(getLabelText('Option 1')).toBeInTheDocument();
    });

    it('renders one option as disabled', async () => {
      const { getPopOverButton, getPopOverOptionsPanel } = await renderListBox();

      userEvent.click(getPopOverButton());

      const popOverOptionsPanel = await getPopOverOptionsPanel('lg');
      expect(
        await within(popOverOptionsPanel).findByRole('option', { name: /Option 5/i })
      ).toHaveAttribute('aria-disabled', 'true');
    });

    it('renders the Listbox with the second option as default selected', async () => {
      const { getLabelText } = await renderListBox({
        selected: defaultOptions[1],
      });

      expect(getLabelText(/Group/i)).toBeInTheDocument();
      expect(getLabelText('Option 2')).toBeInTheDocument();
    });

    it('renders a custom Label based on inner DefaultButton', async () => {
      const { getLabelText } = await renderListBox({
        renderButton: (props) => <ListBox.Button {...props} label="Sort" />,
      });

      expect(getLabelText(/Sort/i)).toBeInTheDocument();
      expect(getLabelText('Option 1')).toBeInTheDocument();
    });

    it('should show options when user clicks listbox', async () => {
      const { getPopOverButton, getPopOverOptions } = await renderListBox();

      userEvent.click(getPopOverButton());

      const optionsWithin = await getPopOverOptions(size as 'sm' | 'lg');

      expect(optionsWithin.length).toEqual(6);
    });

    it('renders a group option', async () => {
      const { getPopOverButton, getPopOverGroups } = await renderListBox(undefined, [
        { name: 'Category', group: true },
        ...defaultOptions,
      ]);

      userEvent.click(getPopOverButton());

      const groups = await getPopOverGroups(size as 'sm' | 'lg');

      expect(groups.length).toEqual(1);
      expect(groups[0]).toHaveTextContent('Category');
    });

    it('should select another list option', async () => {
      const { getPopOverButton, getPopOverOptions } = await renderListBox();

      userEvent.click(getPopOverButton());

      const optionsWithin = await getPopOverOptions(size as 'sm' | 'lg');

      // click on third option
      userEvent.click(optionsWithin[2]);

      const innerButtonAfterUpdate = within(
        await screen.findByRole('button', {
          name: 'listbox-button',
        })
      );

      expect(await innerButtonAfterUpdate.findByText('Option 3')).toBeInTheDocument();
    });
  });
});
