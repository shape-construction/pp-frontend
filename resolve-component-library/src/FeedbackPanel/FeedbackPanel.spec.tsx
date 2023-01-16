import React from 'react';
import { render, screen } from '@testing-library/react';

import { FeedbackPanel } from './FeedbackPanel';

const logo = (
  <svg
    data-testid="logo"
    fill="none"
    width="100%"
    height="100%"
    viewBox="0 0 28 26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Logo</title>
    <path
      d="m10.075 1.0179c-1.7048 0.99642-3.098 3.4097-5.8847 8.2362-2.7866 4.8266-4.1799 7.2398-4.1904 9.2144-0.014334 2.6896 1.4223 5.178 3.7587 6.5103 1.7153 0.9782 4.5019 0.9782 10.075 0.9782 5.5732 0 8.3598 0 10.075-0.9782 2.3364-1.3323 3.7731-3.8207 3.7587-6.5103-0.0105-1.9746-1.4038-4.3878-4.1904-9.2144-2.7866-4.8265-4.1799-7.2398-5.8847-8.2362-2.3221-1.3572-5.1954-1.3572-7.5175 0zm3.8149 5.9884c-1.4147 0-2.3578 1.6335-4.244 4.9006l-0.35389 0.6129c-1.8862 3.267-2.8293 4.9005-2.122 6.1257 0.70733 1.2251 2.5935 1.2251 6.366 1.2251h0.7077c3.7725 0 5.6587 0 6.366-1.2251 0.7073-1.2252-0.2358-2.8587-2.122-6.1257l-0.3539-0.6129c-1.8862-3.267-2.8293-4.9006-4.2439-4.9006z"
      clipRule="evenodd"
      fill="#6366F1"
      fillRule="evenodd"
    />
  </svg>
);

describe('feedback panel', () => {
  it('renders the required attributes', () => {
    render(
      <FeedbackPanel
        title="Instructions sent"
        logo={logo}
        subtitle={
          <>
            An email with password reset instructions was sent.
            <br />
            Please check your email for the next steps.
          </>
        }
        footer={
          <>
            Back to <a href="/log-in">Log in</a>
          </>
        }
      />
    );

    expect(screen.getByText('Instructions sent')).toBeInTheDocument();
    expect(
      screen.getByText(/An email with password reset instructions was sent\./)
    ).toBeInTheDocument();
    expect(screen.getByText(/Please check your email for the next steps\./)).toBeInTheDocument();
    expect(screen.getByText('Back to')).toBeInTheDocument();
    const logInLink = screen.getByRole('link', { name: 'Log in' });
    expect(logInLink).toHaveAttribute('href', '/log-in');
    expect(screen.getByTitle(/logo/i)).toBeInTheDocument();
  });
});
