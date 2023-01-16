import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { PencilIcon } from '../../Icons/outline';
import { Tool } from './Tool';

describe('Tool', () => {
  it('add focus class to button with passed color (red)', () => {
    render(<Tool icon={<PencilIcon />} color="red" />);

    expect(screen.getByRole('button')).toHaveClass('focus:ring-red-500');
  });

  it('handles onclick event', () => {
    const spyOnClick = jest.fn();
    render(<Tool icon={<PencilIcon />} color="red" onClick={spyOnClick} />);

    userEvent.click(screen.getByRole('button'));

    expect(spyOnClick).toHaveBeenCalledTimes(1);
  });
});
