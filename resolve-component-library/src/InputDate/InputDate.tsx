import React from 'react';
import { ExclamationCircleIcon, CalendarIcon } from '../Icons/solid';
import classNames from 'classnames';
import { InputBaseProps } from 'types/InputBase';

export const InputDate = React.forwardRef<HTMLInputElement, InputBaseProps>(
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
      'flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
      {
        'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500':
          shouldShowError,
        'border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500':
          !shouldShowError,
        'opacity-50': disabled,
      }
    );

    const iconClassnames = classNames(
      'inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm',
      { 'opacity-50': disabled }
    );

    return (
      <label htmlFor={id} className={labelClassnames}>
        <div className="mb-1 flex justify-between">
          {label && <div className="mr-auto">{label}</div>}
          {cornerAdornment && <div className="ml-auto">{cornerAdornment}</div>}
        </div>
        <div className="relative">
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className={iconClassnames}>
              <CalendarIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </span>
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
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
            />
          </div>

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

InputDate.displayName = 'InputDate';
