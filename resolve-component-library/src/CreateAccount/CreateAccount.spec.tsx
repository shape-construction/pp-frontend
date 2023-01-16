import React from 'react';
import { render, screen } from '@testing-library/react';
import { CreateAccount } from './CreateAccount';

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

const defaultProps = { logInLink: <>Login link</>, logo };

describe('Create Account panel', () => {
  it('renders the form', () => {
    const { container } = render(<CreateAccount logInLink={<>Login link</>} />);

    const firstName = container.querySelector('input[name="firstName"]');
    expect(firstName).toBeInTheDocument();
    const lastName = container.querySelector('input[name="lastName"]');
    expect(lastName).toBeInTheDocument();
    const email = container.querySelector('input[name="email"]');
    expect(email).toBeInTheDocument();
    const password = container.querySelector('input[name="password"]');
    expect(password).toBeInTheDocument();
    const confirmPassword = container.querySelector('input[name="confirmPassword"]');
    expect(confirmPassword).toBeInTheDocument();
    const acceptedEua = container.querySelector('input[name="acceptedEua"]');
    expect(acceptedEua).toBeInTheDocument();
  });

  it('renders the logo on top section', () => {
    render(<CreateAccount {...defaultProps} />);

    expect(screen.getByTitle(/logo/i)).toBeInTheDocument();
  });

  it('renders the login link element', () => {
    render(<CreateAccount {...defaultProps} />);

    expect(screen.getByText('Login link')).toBeInTheDocument();
  });

  it('renders the form input fields with given value', () => {
    const { container } = render(
      <CreateAccount
        fieldsValues={{
          firstName: 'Teste',
          lastName: 'Teste',
          email: 'email@email.pt',
          password: 'password',
          confirmPassword: 'password',
        }}
        euaLabel="I Agree!"
        onFieldChange={() => {}}
        {...defaultProps}
      />
    );

    const firstName = container.querySelector('input[name="firstName"]');
    expect(firstName).toHaveAttribute('value', 'Teste');
    const lastName = container.querySelector('input[name="lastName"]');
    expect(lastName).toHaveAttribute('value', 'Teste');
    const email = container.querySelector('input[name="email"]');
    expect(email).toHaveAttribute('value', 'email@email.pt');
    const password = container.querySelector('input[name="password"]');
    expect(password).toHaveAttribute('value', 'password');
    const confirmPassword = container.querySelector('input[name="confirmPassword"]');
    expect(confirmPassword).toHaveAttribute('value', 'password');
    expect(screen.getByLabelText('I Agree!')).toBeInTheDocument();
  });

  it('renders the form fields with given error', () => {
    render(
      <CreateAccount
        fieldsErrors={{
          firstName: 'This is an invalid first name',
          lastName: 'This is an invalid last name',
          email: 'This is an invalid email',
          password: 'This password is too short',
          confirmPassword: 'This password needs to match the previous one',
          acceptedEua: 'This is mandatory!',
        }}
        {...defaultProps}
      />
    );

    expect(screen.getByText('This is an invalid first name')).toBeTruthy();
    expect(screen.getByText('This is an invalid last name')).toBeTruthy();
    expect(screen.getByText('This is an invalid email')).toBeTruthy();
    expect(screen.getByText('This password is too short')).toBeTruthy();
    expect(screen.getByText('This password needs to match the previous one')).toBeTruthy();
    expect(screen.getByText('This is mandatory!')).toBeTruthy();
  });

  it('renders the submit feedback message', () => {
    render(<CreateAccount submitFeedback="Account created!" {...defaultProps} />);

    expect(screen.getByText('Account created!')).toBeTruthy();
  });

  it('renders an element with the preFillEmail value and disables email field', () => {
    render(<CreateAccount preFillEmail="This is the prefill email" {...defaultProps} />);

    expect(screen.getByText('This is the prefill email')).toBeTruthy();
    expect(screen.getByLabelText(/Email/)).toBeDisabled();
  });
});
