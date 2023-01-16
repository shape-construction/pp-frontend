import React from 'react';
import { Meta, Story } from '@storybook/react';
import Alert from '../Alert';
import { LogIn, LogInProps } from './LogIn';

const logo = (
  <svg
    fill="none"
    width="100%"
    height="100%"
    viewBox="0 0 28 26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m10.075 1.0179c-1.7048 0.99642-3.098 3.4097-5.8847 8.2362-2.7866 4.8266-4.1799 7.2398-4.1904 9.2144-0.014334 2.6896 1.4223 5.178 3.7587 6.5103 1.7153 0.9782 4.5019 0.9782 10.075 0.9782 5.5732 0 8.3598 0 10.075-0.9782 2.3364-1.3323 3.7731-3.8207 3.7587-6.5103-0.0105-1.9746-1.4038-4.3878-4.1904-9.2144-2.7866-4.8265-4.1799-7.2398-5.8847-8.2362-2.3221-1.3572-5.1954-1.3572-7.5175 0zm3.8149 5.9884c-1.4147 0-2.3578 1.6335-4.244 4.9006l-0.35389 0.6129c-1.8862 3.267-2.8293 4.9005-2.122 6.1257 0.70733 1.2251 2.5935 1.2251 6.366 1.2251h0.7077c3.7725 0 5.6587 0 6.366-1.2251 0.7073-1.2252-0.2358-2.8587-2.122-6.1257l-0.3539-0.6129c-1.8862-3.267-2.8293-4.9006-4.2439-4.9006z"
      clipRule="evenodd"
      fill="#6366F1"
      fillRule="evenodd"
    />
  </svg>
);

export default {
  title: 'Panels/LogIn',
  component: LogIn,
} as Meta<LogInProps>;

const TemplateLogIn: Story<LogInProps> = (args: LogInProps) => <LogIn {...args} />;

export const Default = TemplateLogIn.bind({});
Default.args = {
  createAccountLink: <a href="/signup">Create account!</a>,
  forgotPasswordLink: <a href="/forgot-password">Forgot password</a>,
  logo,
};

export const WithFields = TemplateLogIn.bind({});
WithFields.args = {
  ...Default.args,
  fieldsValues: {
    email: 'email@email.pt',
    password: 'password',
  },
};

export const WithFieldErrors = TemplateLogIn.bind({});
WithFieldErrors.args = {
  ...Default.args,
  fieldsValues: {
    email: 'email@email.pt',
    password: 'password',
  },
  fieldsErrors: {
    email: 'email error',
    password: 'password error',
  },
};

export const WithFeedback = TemplateLogIn.bind({});
WithFeedback.args = {
  submitFeedback: <Alert type="warning">the form was submitted successfully!</Alert>,
  logo,
};
