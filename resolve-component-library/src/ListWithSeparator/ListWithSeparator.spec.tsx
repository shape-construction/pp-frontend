import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListWithSeparator } from './ListWithSeparator';

describe('ListWithSeparator', () => {
  it('renders a singular child without any icons', () => {
    const { container } = render(
      <ListWithSeparator>
        <div>abc</div>
      </ListWithSeparator>
    );

    expect(screen.getByText('abc')).toBeInTheDocument();

    expect(container.querySelectorAll('svg')).toHaveLength(0);
  });

  it('renders a list of children separated by chevrons', () => {
    const { container } = render(
      <ListWithSeparator>
        <div>abc</div>
        <div>def</div>
        <div>ghi</div>
      </ListWithSeparator>
    );

    expect(screen.getByText('abc')).toBeInTheDocument();
    expect(screen.getByText('def')).toBeInTheDocument();
    expect(screen.getByText('ghi')).toBeInTheDocument();

    expect(container.querySelectorAll('svg')).toHaveLength(2);
  });

  it('does not break with invalid children', () => {
    const { container } = render(
      <ListWithSeparator>
        start
        {true}
        {false}
        {undefined}
        {() => <div>123</div>}
        end
      </ListWithSeparator>
    );

    expect(container.querySelectorAll('svg')).toHaveLength(1);
  });
});
