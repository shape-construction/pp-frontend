import React from 'react';
import InputPassword from '../InputPassword';
import Button from '../Button';

export type ResetPasswordFields = {
  password?: string;
  passwordConfirmation?: string;
};

export interface ResetPasswordProps {
  /**
   * Stores all the error messages for each input
   */
  fieldsErrors?: ResetPasswordFields;
  /**
   * Stores the values for each input
   */
  fieldsValues?: ResetPasswordFields;
  /**
   * Link component for the log in page
   */
  logInLink: React.ReactNode;
  /**
   * Logo to be displayed on the top section
   */
  logo?: React.ReactNode;
  /**
   * Callback fired when an input field loses focus.
   */
  onFieldBlur?: React.FocusEventHandler;
  /**
   * Callback fired when and input value is changed.
   */
  onFieldChange?: React.ChangeEventHandler;
  /**
   * function to be called on the form submission
   */
  onSubmit?: () => void;
  /**
   * Alert with form feedback/response. Usually for showing a for error response.
   */
  submitFeedback?: React.ReactNode;
}

export const ResetPassword: React.FC<ResetPasswordProps> = ({
  fieldsErrors,
  fieldsValues,
  logInLink,
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
    <div className="flex flex-col justify-center bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {logo && <div className="flex h-12 justify-center">{logo}</div>}

        <h2 className="mt-6 text-center text-2xl font-semibold leading-9 text-gray-900">
          Change password
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please enter your new password below.
        </p>
      </div>

      {submitFeedback && <div className="mt-8">{submitFeedback}</div>}

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8">
          <form className="space-y-6" onSubmit={handleFormSubmit} noValidate>
            <InputPassword
              name="password"
              label="Password"
              value={fieldsValues?.password}
              onChange={onFieldChange}
              error={fieldsErrors?.password}
              onBlur={onFieldBlur}
            />
            <InputPassword
              name="passwordConfirmation"
              label="Confirm password"
              value={fieldsValues?.passwordConfirmation}
              onChange={onFieldChange}
              error={fieldsErrors?.passwordConfirmation}
              onBlur={onFieldBlur}
            />
            <div>
              <Button color="primary" variant="contained" size="md" type="submit" fullWidth>
                Change password
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center text-sm">Back to {logInLink}</div>
    </div>
  );
};
