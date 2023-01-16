import React from 'react';
import { ExclamationCircleIcon } from '../Icons/solid';
import classNames from 'classnames';
import { InputBaseProps } from 'types/InputBase';

export interface InputSelectOptionProps {
  label?: string;
  value?: string;
  disabled?: boolean;
}

export type InputSelectProps = InputBaseProps & {
  options: InputSelectOptionProps[];
};

export const InputSelect = React.forwardRef<HTMLSelectElement, InputSelectProps>(
  (
    {
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
      options,
      required,
      value,
    },
    ref
  ) => {
    const shouldShowError = error && touched;

    const labelClassnames = classNames('block text-sm font-medium text-gray-700', {
      'w-full': fullWidth,
    });

    const inputClassNames = classNames(
      'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md truncate',
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
          <select
            ref={ref}
            id={id}
            name={name}
            className={inputClassNames}
            defaultValue={value}
            disabled={disabled}
            required={required}
            onBlur={onBlur}
            onChange={onChange}
          >
            {options.map((option) => (
              <option value={option.value} key={option.label} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
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

InputSelect.displayName = 'InputSelect';
