import React from 'react';
import { render } from '@testing-library/react';
import { Step } from './Step';

describe('Step', () => {
  it('has aria label incomplete by default', () => {
    const { getByRole } = render(<Step />);

    expect(getByRole('listitem', { name: 'incomplete' })).toBeInTheDocument();
  });

  it('has aria label complete when complete', () => {
    const { getByRole } = render(<Step variant="complete" />);

    expect(getByRole('listitem', { name: 'complete' })).toBeInTheDocument();
  });

  it('has aria role current when active', () => {
    const { getByRole } = render(<Step variant="current" />);

    expect(getByRole('listitem', { name: 'current' })).toBeInTheDocument();
  });
});
