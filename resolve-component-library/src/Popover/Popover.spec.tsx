import React, { Fragment } from 'react';
import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover, PopoverProps } from './Popover';

// NOTE:
// Dont like my approach of associating lg and sm names for each aria-label of popover-panel,
// but it was the only way of isolating each test for each device viewport because, somehow,
// the components even being hidden with classes, testing library assume it is visible
const renderPopOver = (props?: Partial<PopoverProps>) => {
  const getButton = () => screen.getByRole('button');
  const getPopoverPanel = (size: 'sm' | 'lg') =>
    screen.findByRole('presentation', {
      name: `popover-panel-${size}`,
    });

  const renderComponent = render(
    <Popover {...(props as PopoverProps)}>
      <>open popover</>
    </Popover>
  );

  return {
    ...renderComponent,
    getButton,
    getPopoverPanel,
  };
};
describe('Popover', () => {
  describe.each([
    ['Larger', 'lg', 'larger screen', 1024],
    ['Smaller', 'sm', 'smaller screen', 620],
  ])('%s screens', (_, size, content, innerWidth) => {
    beforeEach(() => {
      global.window = Object.assign(window, { innerWidth });
    });

    it('should show options when user clicks listbox', async () => {
      const { getButton, getPopoverPanel } = renderPopOver({ content: <>{content}</> });

      userEvent.click(getButton());

      const popoverPanel = await getPopoverPanel(size as 'lg' | 'sm');
      const panelContent = await within(popoverPanel).findByText(content);

      expect(panelContent).toBeInTheDocument();
    });
  });

  it('should wrap children with desired element type', () => {
    render(
      <Popover as={Fragment} content={<h1>content</h1>}>
        <button>click me</button>
      </Popover>
    );

    expect(screen.getAllByRole('button').length).toBe(1);
  });

  it('triggers onClickButton function on clicking popover.button', () => {
    const onClickButton = jest.fn();
    render(
      <Popover content={<h1>content</h1>} onClickButton={onClickButton}>
        <button>click me</button>
      </Popover>
    );

    userEvent.click(screen.getByRole('button', { name: 'click me' }));

    expect(onClickButton).toBeCalled();
  });

  it('relies on open prop when static is true', () => {
    render(
      <Popover content={<h1>static content!</h1>} isStatic open>
        <button>click me</button>
      </Popover>
    );

    expect(screen.getAllByText('static content!').length).toBe(2);
  });

  it('ignores open prop when static is false', () => {
    render(
      <Popover content={<h1>static content!</h1>} open>
        <button>click me</button>
      </Popover>
    );

    expect(screen.queryAllByText('static content!').length).toBe(0);
  });
});
