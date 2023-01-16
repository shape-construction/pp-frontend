import React from 'react';
import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

describe('IconButton', () => {
  it('renders correctly', () => {
    render(<IconButton color="primary" variant="contained" size="md" icon={PlusCircleIcon} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('rounded-full');
  });
});
