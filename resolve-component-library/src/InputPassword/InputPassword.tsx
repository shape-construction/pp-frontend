import React from 'react';
import { ExclamationCircleIcon } from '../Icons/solid';
import classNames from 'classnames';
import { InputBaseProps } from 'types/InputBase';

export const InputPassword = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      cornerAdornment,
      disabled,
      error,
      fullWidth,
      touched = true,
      id,
      label,
      name,
      onBlur,
      onChange,
      required,
      value,
    },
    ref
  ) => {
    const shouldShowError = error && touched;

    const labelClassnames = classNames('block text-sm font-medium text-gray-700', {
      'w-full': fullWidth,
    });

    const inputClassnames = classNames(
      'appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm  focus:outline-none  sm:text-sm',
      {
        'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500':
          shouldShowError,
        'border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500':
          !shouldShowError,
        'opacity-50': disabled,
      }
    );

    return (
      <label htmlFor={id} className={labelClassnames}>
        <div className="flex justify-between">
          {label}
          {cornerAdornment && <div>{cornerAdornment}</div>}
        </div>
        <div className="relative mt-1">
          <input
            ref={ref}
            className={inputClassnames}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            required={required}
            value={value}
            type="password"
          />
          {shouldShowError && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
            </div>
          )}
        </div>
        {shouldShowError && <p className="mt-2 text-sm font-normal text-red-600">{error}</p>}
      </label>
    );
  }
);

InputPassword.displayName = 'InputPassword';
