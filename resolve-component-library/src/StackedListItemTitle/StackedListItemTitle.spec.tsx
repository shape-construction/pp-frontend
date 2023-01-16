import React from 'react';
import { render, screen } from '@testing-library/react';
import { StackedListItemTitle } from './StackedListItemTitle';

const title: string = 'Item Title';
const description: string = 'Item Description';

const renderComponent = () =>
  render(<StackedListItemTitle title={title} description={description} />);

describe('StackedListItemTitle', () => {
  it('renders the title and description', () => {
    renderComponent();

    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByText(description)).toBeTruthy();
  });
});
