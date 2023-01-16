import React, { ReactNode } from 'react';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { InputBaseProps } from 'types/InputBase';

export interface InputRadioGroupOptionProps {
  description?: ReactNode;
  label?: ReactNode;
  value?: string;
}

export interface InputRadioGroupProps extends InputBaseProps {
  options: InputRadioGroupOptionProps[];
  setFieldValue?: (name: string, value: string) => void;
}

export const InputRadioGroup = React.forwardRef<HTMLInputElement, InputRadioGroupProps>(
  ({ label, name, value, onBlur, setFieldValue, options, error, touched = true }, ref) => {
    const shouldShowError = error && touched;

    return (
      <RadioGroup
        ref={ref}
        value={value}
        onBlur={onBlur}
        onChange={(val: string | undefined) => {
          if (setFieldValue) setFieldValue(name, val || '');
        }}
      >
        {label && (
          <RadioGroup.Label className="mb-4 inline-block text-base font-medium leading-6">
            {label}
          </RadioGroup.Label>
        )}
        <div className="space-y-4">
          {options.map((option: InputRadioGroupOptionProps) => (
            <RadioGroup.Option
              key={option.value}
              value={option.value}
              className={({ checked }) =>
                classNames(
                  {
                    'ring-1 ring-indigo-500 ring-offset-2': checked,
                    'ring-red-500': checked && shouldShowError,
                  },
                  'relative block cursor-pointer rounded-lg border border-gray-300 bg-white px-5 py-4 shadow-sm hover:border-gray-400 focus:outline-none sm:flex sm:justify-between'
                )
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroup.Label as="div" className="font-medium text-gray-900">
                        {option.label}
                      </RadioGroup.Label>
                      <RadioGroup.Description as="div" className="text-gray-500">
                        {option.description}
                      </RadioGroup.Description>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      {
                        'border-indigo-500': checked,
                        'border-transparent': !checked,
                        'border-red-500': shouldShowError,
                      },
                      'pointer-events-none absolute -inset-px rounded-lg border-2'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
        {shouldShowError && <p className="mt-2 text-sm font-normal text-red-600">{error}</p>}
      </RadioGroup>
    );
  }
);

InputRadioGroup.displayName = 'InputRadioGroup';
