import React from 'react';
import { ExclamationCircleIcon } from '../Icons/solid';
import classNames from 'classnames';
import { InputBaseProps } from 'types/InputBase';

export const InputText = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      autoComplete,
      cornerAdornment,
      description,
      disabled,
      error,
      fullWidth,
      touched = true,
      id,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      required,
      placeholder,
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
        {(label || cornerAdornment) && (
          <div className="mb-1 flex justify-between">
            {label && <div className="mr-auto">{label}</div>}
            {cornerAdornment && <div className="ml-auto">{cornerAdornment}</div>}
          </div>
        )}
        <div className="relative">
          <input
            ref={ref}
            autoComplete={autoComplete}
            className={inputClassnames}
            disabled={disabled}
            id={id}
            name={name}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            required={required}
            value={value}
            placeholder={placeholder}
            type="text"
          />
          {shouldShowError && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
            </div>
          )}
        </div>
        {shouldShowError && <p className="mt-2 text-sm font-normal text-red-600">{error}</p>}
        {description && <p className="mt-2 text-sm font-normal text-gray-500">{description}</p>}
      </label>
    );
  }
);

InputText.displayName = 'InputText';
