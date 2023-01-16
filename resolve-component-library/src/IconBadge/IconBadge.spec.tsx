import React from 'react';
import { render, screen } from '@testing-library/react';
import { IconBadge } from './IconBadge';
import { InboxInIcon } from '../Icons/solid';

describe('IconBadge', () => {
  it('renders container with default color', () => {
    render(
      <IconBadge>
        <InboxInIcon />
      </IconBadge>
    );

    expect(screen.getByRole('figure')).toBeInTheDocument();
    expect(screen.getByRole('figure')).toHaveClass('bg-gray-100');
  });

  it('renders icon with default color', () => {
    render(
      <IconBadge>
        <InboxInIcon />
      </IconBadge>
    );

    expect(screen.getByTestId('icon-badge')).toBeInTheDocument();
    expect(screen.getByTestId('icon-badge')).toHaveClass('text-gray-600');
  });

  it('overrides container with custom color', () => {
    render(
      <IconBadge className="bg-red-100">
        <InboxInIcon />
      </IconBadge>
    );

    expect(screen.getByRole('figure')).toHaveClass('bg-red-100');
  });

  it('overrides icon with custom color', () => {
    render(
      <IconBadge>
        <InboxInIcon className="text-red-600" />
      </IconBadge>
    );

    expect(screen.getByTestId('icon-badge')).toHaveClass('text-red-600');
  });
});
