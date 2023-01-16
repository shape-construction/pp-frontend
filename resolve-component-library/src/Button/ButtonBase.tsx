import classNames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonColor, ButtonSize, ButtonVariant } from './button-config';
import { getButtonClasses } from './ButtonClasses';

export type ButtonBaseProps = React.ComponentPropsWithRef<'button'> & {
  color: ButtonColor;
  disabled?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  size: ButtonSize;
  variant: ButtonVariant;
};

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      color,
      disabled = false,
      fullWidth = false,
      rounded = false,
      size,
      type = 'button',
      variant,

      ...props
    },
    ref
  ) => {
    const { buttonClasses } = getButtonClasses({
      color,
      disabled,
      fullWidth,
      rounded,
      size,
      variant,
    });

    return (
      <button
        {...props}
        type={type}
        ref={ref}
        disabled={disabled}
        className={twMerge(classNames(buttonClasses, props.className))}
      >
        {props.children}
      </button>
    );
  }
);

ButtonBase.displayName = 'ButtonBase';
