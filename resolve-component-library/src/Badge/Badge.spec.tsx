import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Badge } from './Badge';

describe('label', () => {
  it('renders a badge with the given label', () => {
    const { getByText } = render(<Badge label="This is my badge" />);

    expect(getByText('This is my badge')).toBeInTheDocument();
  });
});

describe('dot', () => {
  it('renders badge with a dot', () => {
    const { getByTitle } = render(<Badge label="Badge" withDot />);

    expect(getByTitle('Dot')).toBeInTheDocument();
  });
});

describe('removeButton', () => {
  it('renders an actionable remove button', () => {
    const removeHandler = jest.fn();

    const { getByRole, getByTitle } = render(
      <Badge label="Badge" withRemoveButton onRemove={removeHandler} />
    );

    expect(getByTitle('Remove')).toBeInTheDocument();

    fireEvent.click(getByRole('button'));
    expect(removeHandler).toHaveBeenCalledTimes(1);
  });
});
