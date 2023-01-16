import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Alert } from './Alert';
import { DiamondIcon } from '../Icons/solid';

describe('Alert', () => {
  it('renders alert content', () => {
    render(<Alert type="info">alert component</Alert>);

    expect(screen.getByText(/alert component/i)).toBeInTheDocument();
  });

  it('renders alert actions', () => {
    render(
      <Alert type="info" Actions={<button type="button">button example</button>}>
        alert component
      </Alert>
    );

    expect(screen.getByRole('button', { name: /button example/i })).toBeInTheDocument();
  });

  it('renders alert on centered mode', () => {
    render(
      <Alert type="info" Actions={<button type="button">button example</button>} centered>
        alert component
      </Alert>
    );

    expect(screen.getByTestId('alert-info')).not.toHaveClass('w-full');
  });

  it('renders alert with provided icon', () => {
    render(
      <Alert type="success" icon={<DiamondIcon data-testid="diamond-icon" />}>
        alert component
      </Alert>
    );

    expect(screen.queryByTestId('diamond-icon')).toBeInTheDocument();
  });

  it('renders alert with inline variant by default', () => {
    render(<Alert type="success">alert component</Alert>);

    expect(screen.getByTestId('alert-success')).toHaveClass('rounded-md');
  });

  it('renders alert with banner variant', () => {
    render(
      <Alert type="success" variant="banner">
        alert component
      </Alert>
    );

    expect(screen.getByTestId('alert-success')).not.toHaveClass('rounded-md');
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Alert type="success">alert component</Alert>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
