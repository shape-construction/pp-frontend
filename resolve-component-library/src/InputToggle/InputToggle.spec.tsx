import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputToggle } from './InputToggle';

describe('InputToggle', () => {
  it('should render an unchecked InputToggle', () => {
    render(<InputToggle checked={false} onChange={() => {}} aria-label="input-toggle" />);

    expect(screen.getByLabelText('input-toggle')).not.toBeChecked();
  });
  it('should render a checked InputToggle', () => {
    render(<InputToggle checked={true} onChange={() => {}} aria-label="input-toggle" />);

    expect(screen.getByLabelText('input-toggle')).toBeChecked();
  });
  it('should render a disable InputToggle', () => {
    render(
      <InputToggle disabled={true} checked={false} onChange={() => {}} aria-label="input-toggle" />
    );

    expect(screen.getByLabelText('input-toggle')).toBeDisabled();
  });
  it('should render an unchecked and disable InputToggle when it is disabled but with a checked value', () => {
    render(
      <InputToggle disabled={true} checked={true} onChange={() => {}} aria-label="input-toggle" />
    );

    expect(screen.getByLabelText('input-toggle')).toBeDisabled();
    expect(screen.getByLabelText('input-toggle')).not.toBeChecked();
  });
});
