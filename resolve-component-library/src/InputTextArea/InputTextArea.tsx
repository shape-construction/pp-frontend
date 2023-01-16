import React from 'react';
import { ExclamationCircleIcon } from '../Icons/solid';
import classNames from 'classnames';
import { InputBaseProps } from 'types/InputBase';

export interface InputTextAreaProps extends InputBaseProps {
  /**
   * Determines how many lines/rows should be displayed on the textarea
   * @default 3
   */
  rows?: number;
}

export const InputTextArea = React.forwardRef<HTMLTextAreaElement, InputTextAreaProps>(
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
      required,
      placeholder,
      rows = 3,
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
        <div className="mb-1 flex justify-between">
          {label && <div className="mr-auto">{label}</div>}
          {cornerAdornment && <div className="ml-auto">{cornerAdornment}</div>}
        </div>
        <div className="relative">
          <textarea
            ref={ref}
            className={inputClassnames}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            defaultValue={value}
            rows={rows}
            // Temporarily disable the Grammarly support in the <textarea />
            // Since many text area components are rendered in a modal,
            // clicking the Grammarly icon registers as a click and dismisses the modal.
            // https://stackoverflow.com/a/46777787
            data-gramm={false}
            data-enable-grammarly={false}
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

InputTextArea.displayName = 'InputTextArea';
