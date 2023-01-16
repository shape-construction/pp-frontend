import React from 'react';
import { render } from '@testing-library/react';
import { Stepper } from './Stepper';

const renderComponent = () => render(<Stepper steps={3} currentStep={2} />);

describe('Stepper', () => {
  it('renders to correct number of steps', () => {
    const { getAllByRole } = renderComponent();

    expect(getAllByRole('listitem').length).toEqual(3);
  });

  it('renders steps before current step with complete variant', () => {
    const { getAllByRole } = renderComponent();
    const step = getAllByRole('listitem')[0];

    expect(step).toHaveAttribute('aria-label', 'complete');
  });

  it('renders current step with the active variant', () => {
    const { getAllByRole } = renderComponent();
    const step = getAllByRole('listitem')[1];

    expect(step).toHaveAttribute('aria-label', 'current');
  });

  it('renders future steps with default variant', () => {
    const { getAllByRole } = renderComponent();
    const step = getAllByRole('listitem')[2];

    expect(step).toHaveAttribute('aria-label', 'incomplete');
  });
});
