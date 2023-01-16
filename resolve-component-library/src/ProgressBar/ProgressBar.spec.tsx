import { render, screen } from '@testing-library/react';
import React from 'react';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('renders correctly', () => {
    render(<ProgressBar percentage={50} />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
  });

  describe('when the label is defined', () => {
    it('renders with the label', () => {
      render(<ProgressBar percentage={40} label="Progress" />);

      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '40');
      expect(screen.getByText('Progress')).toBeInTheDocument();
      expect(screen.getByText('40%')).toBeInTheDocument();
    });
  });
});
