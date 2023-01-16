import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link } from './Link';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

describe('Link', () => {
  it('renders correctly', () => {
    render(
      <Link color="primary" href="/link">
        This is a link
      </Link>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
    expect(screen.getByRole('link')).toHaveClass('underline');
  });

  it('renders correctly as button', () => {
    render(
      <Link as="button" color="primary" onClick={() => {}}>
        This is a link
      </Link>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  describe('when underline is none', () => {
    it('does not render an underline', () => {
      render(
        <Link color="primary" href="/link" underline="none">
          This is a link
        </Link>
      );

      expect(screen.getByRole('link')).not.toHaveClass('underline');
    });
  });

  describe('when disabled is true', () => {
    it('renders a disabled link', () => {
      render(
        <Link color="primary" href="/link" disabled>
          This is a link
        </Link>
      );

      expect(screen.getByRole('link')).toHaveClass('pointer-events-none');
    });
  });

  describe('when leading icon is defined', () => {
    it('renders leading icon', () => {
      render(
        <Link color="primary" href="/link" leadingIcon={PlusCircleIcon}>
          This is a link
        </Link>
      );

      expect(screen.getByTestId('leading-icon')).toBeInTheDocument();
    });
  });

  describe('when trailing icon is defined', () => {
    it('renders trailing icon', () => {
      render(
        <Link color="primary" href="/link" trailingIcon={PlusCircleIcon}>
          This is a link
        </Link>
      );

      expect(screen.getByTestId('trailing-icon')).toBeInTheDocument();
    });
  });

  describe('when both leading and trailing icons are defined', () => {
    it('renders both leading and trailing icons', () => {
      render(
        <Link
          color="primary"
          href="/link"
          leadingIcon={PlusCircleIcon}
          trailingIcon={PlusCircleIcon}
        >
          This is a link
        </Link>
      );

      expect(screen.getByTestId('leading-icon')).toBeInTheDocument();
      expect(screen.getByTestId('trailing-icon')).toBeInTheDocument();
    });
  });
});
