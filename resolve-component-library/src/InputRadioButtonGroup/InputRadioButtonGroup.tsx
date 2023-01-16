import React, { ReactNode } from 'react';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { InputBaseProps } from '../types/InputBase';

export interface InputRadioButtonGroupOption {
  description?: ReactNode;
  label?: ReactNode;
  value?: string;
  /**
   * Overrides label and description props with custom content
   */
  content?: ReactNode;
  /**
   * disables option
   */
  disabled?: boolean;
}

export interface InputRadioButtonGroupProps extends InputBaseProps {
  options: InputRadioButtonGroupOption[];
  setFieldValue?: (name: string, value: string) => void;
  /**
   * how to render button group options
   */
  type?: 'simple' | 'table';
}

export const InputRadioButtonGroup = React.forwardRef<HTMLInputElement, InputRadioButtonGroupProps>(
  (
    { label, description, name, value, onBlur, setFieldValue, options, type = 'table', disabled },
    ref
  ) => (
    <RadioGroup
      ref={ref}
      value={value}
      onChange={(val) => {
        if (setFieldValue) setFieldValue(name, val || '');
      }}
      onBlur={onBlur}
      disabled={disabled}
    >
      {label && (
        <RadioGroup.Label className="mb-4 inline-block text-base font-medium leading-6">
          {label}
          {description && (
            <p className="text-sm font-normal leading-5 text-gray-500">{description}</p>
          )}
        </RadioGroup.Label>
      )}
      <div className="-space-y-px bg-white">
        {options.map((option) => (
          <RadioGroup.Option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            className={({ checked }) =>
              classNames('relative flex cursor-pointer p-4 focus:outline-none', {
                'border': type === 'table',
                'z-popover border-indigo-200 bg-indigo-50': checked && type === 'table',
                'border-gray-200': !checked && type === 'table',
              })
            }
          >
            {({ checked, disabled: optionDisabled }) =>
              option.content || (
                <>
                  <span
                    className={classNames(
                      'mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border',
                      {
                        'border-transparent bg-indigo-600 ring-2 ring-indigo-500 ring-offset-2':
                          checked,
                        'border-gray-300 bg-white': !checked,
                        'bg-gray-50': optionDisabled,
                      }
                    )}
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <div className="ml-3 flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className={classNames('block text-sm font-medium', {
                        'text-indigo-900': checked && type === 'table',
                        'text-gray-900': !checked && type === 'table',
                        'text-gray-400': optionDisabled,
                      })}
                    >
                      {option.label}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={classNames('block text-sm font-normal', {
                        'text-indigo-700': checked && type === 'table',
                        'text-gray-500':
                          (!checked && type === 'table') || (type === 'simple' && !optionDisabled),
                        'text-gray-300': optionDisabled,
                      })}
                    >
                      {option.description}
                    </RadioGroup.Description>
                  </div>
                </>
              )
            }
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
);

InputRadioButtonGroup.displayName = 'InputRadioButtonGroup';
