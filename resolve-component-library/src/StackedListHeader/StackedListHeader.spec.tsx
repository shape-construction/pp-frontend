import React from 'react';
import { render, screen } from '@testing-library/react';
import { StackedListHeader } from './StackedListHeader';

const title: string = 'Header Title';

const renderComponent = () => render(<StackedListHeader title={title} />);

describe('StackedListHeader', () => {
  it('renders the title', () => {
    renderComponent();

    expect(screen.getByText(title)).toBeTruthy();
  });
});
