import classNames from 'classnames';
import React from 'react';
import { InputBaseProps } from 'types/InputBase';

export interface CheckboxProps extends InputBaseProps {
  checked?: boolean;
}

export const InputCheckbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      disabled,
      error,
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

    const inputClassnames = classNames('h-4 w-4 rounded border', {
      'focus:ring-red-500 text-red-600 border-red-300': shouldShowError,
      'focus:ring-indigo-500 text-indigo-600 border-gray-300': !shouldShowError,
      'opacity-50': disabled,
    });

    return (
      <div className="relative">
        <label htmlFor={id} className="flex items-start text-gray-700">
          <div className="flex h-5 items-center">
            <input
              ref={ref}
              checked={checked}
              className={inputClassnames}
              disabled={disabled}
              id={id}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              required={required}
              value={value}
              type="checkbox"
            />
          </div>
          <div className="ml-3 text-sm">{label}</div>
        </label>
        {shouldShowError && <p className="mt-1 text-sm font-normal text-red-600">{error}</p>}
      </div>
    );
  }
);

InputCheckbox.displayName = 'InputCheckbox';
