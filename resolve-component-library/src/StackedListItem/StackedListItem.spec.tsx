import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { StackedListItem } from './StackedListItem';

const children: string = 'Item Child';

const renderComponent = () =>
  render(
    <StackedListItem>
      <>{children}</>
    </StackedListItem>
  );

describe('StackedListItem', () => {
  it('renders the children', () => {
    renderComponent();

    expect(screen.getByText(children)).toBeTruthy();
  });

  it('renders the children when clickable', () => {
    const onClick = jest.fn();

    render(
      <StackedListItem onClick={onClick}>
        <>{children}</>
      </StackedListItem>
    );

    expect(screen.getByText(children)).toBeTruthy();
  });

  it('triggers the click when clickable', () => {
    const onClick = jest.fn();

    render(
      <StackedListItem onClick={onClick}>
        <>{children}</>
      </StackedListItem>
    );

    const button = screen.getByRole('link');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
