import React from 'react';
import InputPassword from '../InputPassword';
import InputText from '../InputText';
import InputEmail from '../InputEmail';
import InputCheckbox from '../InputCheckbox';
import Button from '../Button';

export type CreateAccountFields = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  acceptedEua?: string;
};

export interface CreateAccountProps {
  /**
   * Renders the content of the checkbox
   */
  euaLabel?: React.ReactNode;
  /**
   * Stores all the error messages for each input
   */
  fieldsErrors?: CreateAccountFields;
  /**
   * Stores the values for each input
   */
  fieldsValues?: CreateAccountFields;
  /**
   * Link component for the log in page
   */
  logInLink: React.ReactNode;
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
   * Define the layout when email is predefined for the create accounts
   */
  preFillEmail?: string;
  /**
   * Renders the feedback/response after the submission of form
   */
  submitFeedback?: React.ReactNode;
}

export const CreateAccount: React.FC<CreateAccountProps> = ({
  euaLabel,
  fieldsErrors,
  fieldsValues,
  logInLink,
  logo,
  onFieldBlur,
  onFieldChange,
  onSubmit,
  preFillEmail,
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
          Create an account
        </h2>
      </div>

      {submitFeedback && <div className="mt-8">{submitFeedback}</div>}

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8">
          <form className="space-y-6" onSubmit={handleFormSubmit} noValidate>
            <InputText
              name="firstName"
              label="First name"
              value={fieldsValues?.firstName}
              onChange={onFieldChange}
              error={fieldsErrors?.firstName}
              onBlur={onFieldBlur}
            />
            <InputText
              name="lastName"
              label="Last name"
              value={fieldsValues?.lastName}
              onChange={onFieldChange}
              error={fieldsErrors?.lastName}
              onBlur={onFieldBlur}
            />
            <InputEmail
              name="email"
              label="Email"
              value={fieldsValues?.email}
              onChange={onFieldChange}
              error={fieldsErrors?.email}
              onBlur={onFieldBlur}
              disabled={!!preFillEmail}
              cornerAdornment={preFillEmail}
            />
            <InputPassword
              name="password"
              label="Password"
              value={fieldsValues?.password}
              onChange={onFieldChange}
              error={fieldsErrors?.password}
              onBlur={onFieldBlur}
            />
            <InputPassword
              name="confirmPassword"
              label="Confirm password"
              value={fieldsValues?.confirmPassword}
              onChange={onFieldChange}
              error={fieldsErrors?.confirmPassword}
              onBlur={onFieldBlur}
            />
            <InputCheckbox
              name="acceptedEua"
              label={euaLabel}
              value={fieldsValues?.acceptedEua}
              onChange={onFieldChange}
              error={fieldsErrors?.acceptedEua}
              onBlur={onFieldBlur}
            />

            <Button color="primary" variant="contained" size="md" type="submit" fullWidth>
              Create account
            </Button>
          </form>
        </div>
        <div className="text-center text-sm">{logInLink}</div>
      </div>
    </div>
  );
};
