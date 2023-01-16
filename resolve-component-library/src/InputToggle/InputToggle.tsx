import React from 'react';
import { Switch } from '@headlessui/react';
import classNames from 'classnames';
import { CheckIcon, CrossIcon } from '../Icons';

type SwitchProps = Parameters<typeof Switch>[0];

export type InputToggleProps = SwitchProps & {
  disabled?: boolean;
  small?: boolean;
  withIcon?: boolean;
};

export const InputToggle = ({
  disabled = false,
  small = false,
  withIcon = false,
  ...props
}: InputToggleProps) => {
  const checked = props.checked && !disabled;

  return (
    <Switch
      {...props}
      disabled={disabled}
      checked={checked}
      className={classNames(
        'relative inline-flex rounded-full focus:outline-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        {
          'bg-indigo-600': !small && checked,
          'bg-gray-200': !small && !checked,
          'bg-gray-100': !small && disabled,
          'cursor-not-allowed': disabled,
          'cursor-pointer': !disabled,
          'h-5 w-10 items-center justify-center': small,
          'h-6 w-11 border-2 border-transparent transition-colors duration-200 ease-in-out': !small,
        }
      )}
    >
      {small && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute h-full w-full rounded-md bg-white"
          />
          <span
            aria-hidden="true"
            className={classNames(
              'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out',
              {
                'bg-indigo-600': checked,
                'bg-gray-200': !checked,
              }
            )}
          />
        </>
      )}
      <span
        aria-hidden="true"
        className={classNames(
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 duration-200 ease-in-out',
          {
            'translate-x-5': checked,
            'translate-x-0': !checked,
            'absolute left-0 border border-gray-200 transition-transform': small,
            'transition': !small,
          }
        )}
      >
        {withIcon && (
          <>
            <span
              className={classNames(
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                {
                  'opacity-0 duration-100 ease-out': checked,
                  'opacity-100 duration-200 ease-in': !checked,
                }
              )}
              aria-hidden="true"
            >
              <CrossIcon />
            </span>
            <span
              className={classNames(
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                {
                  'opacity-100 duration-200 ease-in': checked,
                  'opacity-0 duration-100 ease-out': !checked,
                }
              )}
              aria-hidden="true"
            >
              <CheckIcon />
            </span>
          </>
        )}
      </span>
    </Switch>
  );
};
