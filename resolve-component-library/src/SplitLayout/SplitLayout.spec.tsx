import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from './SplitLayout.stories';

const { Row, ThreePanels, ExpandPanelOnClick, WithFirstActivePanel } = composeStories(stories);

const getLayout = () => screen.getByTestId('layout');

describe('SplitLayout', () => {
  it('renders two panels', async () => {
    render(<Row />);

    const Layout = getLayout();

    expect(Layout.children.length).toEqual(2);
    expect(within(Layout).getByText('first panel (flex)')).toBeInTheDocument();
    expect(within(Layout).getByText('second panel (flex)')).toBeInTheDocument();
  });

  it('renders three panels', async () => {
    render(<ThreePanels />);

    const Layout = getLayout();

    expect(Layout.children.length).toEqual(3);
    expect(within(Layout).getByText('first panel (flex)')).toBeInTheDocument();
    expect(within(Layout).getByText('second panel (flex)')).toBeInTheDocument();
    expect(within(Layout).getByText('third panel (5/12)')).toBeInTheDocument();
  });

  it('renders layout with first panel expanded', () => {
    render(<WithFirstActivePanel />);

    const Layout = getLayout();
    const [FirstPanel, SecondPanel] = Layout.children as unknown as Element[];

    expect(FirstPanel).toHaveAttribute('aria-hidden', 'false');
    expect(FirstPanel).toHaveAttribute('aria-expanded', 'true');

    expect(SecondPanel).toHaveAttribute('aria-hidden', 'true');
    expect(SecondPanel).toHaveAttribute('aria-expanded', 'false');
  });

  it('should expand first panel on click', () => {
    render(<ExpandPanelOnClick />);

    const Layout = getLayout();
    const [FirstPanel, SecondPanel] = Layout.children as unknown as Element[];

    userEvent.click(screen.getByRole('button', { name: 'panel-action' }));

    expect(FirstPanel).toHaveAttribute('aria-hidden', 'false');
    expect(FirstPanel).toHaveAttribute('aria-expanded', 'true');

    expect(SecondPanel).toHaveAttribute('aria-hidden', 'true');
    expect(SecondPanel).toHaveAttribute('aria-expanded', 'false');
  });
});
