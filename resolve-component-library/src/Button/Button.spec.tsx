import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { PlusCircleIcon } from '../Icons/solid';

describe('Button', () => {
  it('renders correctly', () => {
    render(
      <Button color="primary" variant="contained" size="md">
        Button
      </Button>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  describe('when fullWidth is true', () => {
    it('renders with full width', () => {
      render(
        <Button color="primary" variant="contained" size="md" fullWidth>
          Button
        </Button>
      );

      expect(screen.getByRole('button')).toHaveClass('w-full', 'justify-center');
    });
  });

  describe('when fullWidth is false', () => {
    it('renders without full width', () => {
      render(
        <Button color="primary" variant="contained" size="md">
          Button
        </Button>
      );

      expect(screen.getByRole('button')).not.toHaveClass('w-full', 'justify-center');
    });
  });

  describe('when disabled is true', () => {
    it('renders a disabled button', () => {
      render(
        <Button color="primary" variant="contained" size="md" disabled>
          Button
        </Button>
      );

      expect(screen.getByRole('button')).toHaveAttribute('disabled');
      expect(screen.getByRole('button')).toHaveClass('cursor-not-allowed', 'opacity-50');
    });
  });

  describe('when leading icon is defined', () => {
    it('renders leading icon', () => {
      render(
        <Button color="primary" variant="contained" size="md" leadingIcon={PlusCircleIcon}>
          Button
        </Button>
      );

      expect(screen.getByTestId('leading-icon')).toBeInTheDocument();
    });
  });

  describe('when trailing icon is defined', () => {
    it('renders trailing icon', () => {
      render(
        <Button color="primary" variant="contained" size="md" trailingIcon={PlusCircleIcon}>
          Button
        </Button>
      );

      expect(screen.getByTestId('trailing-icon')).toBeInTheDocument();
    });
  });

  describe('when both leading and trailing icons are defined', () => {
    it('renders both leading and trailing icons', () => {
      render(
        <Button
          color="primary"
          variant="contained"
          size="md"
          leadingIcon={PlusCircleIcon}
          trailingIcon={PlusCircleIcon}
        >
          Button
        </Button>
      );

      expect(screen.getByTestId('leading-icon')).toBeInTheDocument();
      expect(screen.getByTestId('trailing-icon')).toBeInTheDocument();
    });
  });
});
