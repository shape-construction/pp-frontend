import React from 'react';
import { render, screen } from '@testing-library/react';
import { StackedList } from './StackedList';

const content: string = 'example of content';

const renderComponent = () =>
  render(
    <StackedList>
      <>{content}</>
    </StackedList>
  );

describe('StackedList Template', () => {
  it('renders the children', () => {
    renderComponent();

    expect(screen.getByText(content)).toBeTruthy();
  });
});
