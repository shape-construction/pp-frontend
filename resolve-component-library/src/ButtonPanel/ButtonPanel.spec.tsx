import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ButtonPanel } from './ButtonPanel';

describe('ButtonPanel', () => {
  it('renders as a button with an onClick', () => {
    const { getByText, getByRole } = render(<ButtonPanel onClick={() => {}}>content</ButtonPanel>);

    expect(getByText('content')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('triggers the onClick', () => {
    const onClick = jest.fn();

    const { getByText } = render(<ButtonPanel onClick={onClick}>content</ButtonPanel>);

    fireEvent.click(getByText('content'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
