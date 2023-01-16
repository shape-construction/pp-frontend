import React from 'react';
import InputEmail from '../InputEmail';
import InputPassword from '../InputPassword';
import Button from '../Button';

export type LoginFields = {
  email?: string;
  password?: string;
};

export interface LogInProps {
  /**
   * Link component for the create account page
   */
  createAccountLink: React.ReactNode;
  /**
   * Stores all the error messages for each input
   */
  fieldsErrors?: LoginFields;
  /**
   * Stores the values for each input
   */
  fieldsValues?: LoginFields;
  /**
   * Link component for the forgot password page
   */
  forgotPasswordLink: React.ReactNode;
  /**
   * Logo to be displayed on the top section
   */
  logo?: React.ReactNode;
  /**
   * Callback fired when the input is blurred.
   */
  onFieldBlur?: React.FocusEventHandler;
  /**
   * Callback fired when the value is changed.
   */
  onFieldChange?: React.ChangeEventHandler;
  /**
   * function to be called on the submit of form
   */
  onSubmit?: () => void;
  /**
   * Renders the feedback/response after the submission of form
   */
  submitFeedback?: React.ReactNode;
}

export const LogIn: React.FC<LogInProps> = ({
  createAccountLink,
  fieldsErrors,
  fieldsValues,
  forgotPasswordLink,
  logo,
  onFieldBlur,
  onFieldChange,
  onSubmit,
  submitFeedback,
}) => {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {logo && <div className="flex h-12 justify-center">{logo}</div>}

        <h2 className="mt-6 text-center text-2xl font-semibold leading-9 text-gray-900">
          Log in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">Enter your credentials to log in.</p>
      </div>

      {submitFeedback && <div className="mt-8">{submitFeedback}</div>}

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8">
          <form className="space-y-6" onSubmit={handleFormSubmit} noValidate>
            <InputEmail
              name="email"
              label="Email"
              value={fieldsValues?.email}
              onChange={onFieldChange}
              error={fieldsErrors?.email}
              onBlur={onFieldBlur}
            />
            <InputPassword
              name="password"
              label="Password"
              value={fieldsValues?.password}
              onChange={onFieldChange}
              error={fieldsErrors?.password}
              onBlur={onFieldBlur}
            />

            <div className="flex items-center justify-center text-sm">{forgotPasswordLink}</div>

            <Button color="primary" variant="contained" size="md" type="submit" fullWidth>
              Log in
            </Button>
          </form>
        </div>
        <div className="text-center text-sm">{createAccountLink}</div>
      </div>
    </div>
  );
};
