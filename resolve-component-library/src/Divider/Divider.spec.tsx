import React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders', () => {
    render(<Divider direction="column" />);

    expect(screen.getByRole('separator', { name: 'divider' })).toBeInTheDocument();
  });
});
