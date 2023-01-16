import React from 'react';
import { ButtonBase, ButtonBaseProps } from './ButtonBase';
import { getIconClasses } from './IconClasses';

export type ButtonProps = Omit<ButtonBaseProps, 'className' | 'rounded'> & {
  leadingIcon?: React.ElementType;
  trailingIcon?: React.ElementType;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,

      ...props
    },
    ref
  ) => {
    const { color, variant } = props;
    const { iconClasses } = getIconClasses({ color, variant });

    return (
      <ButtonBase {...props} ref={ref}>
        {!!LeadingIcon && <LeadingIcon data-testid="leading-icon" className={iconClasses} />}
        {props.children}
        {!!TrailingIcon && <TrailingIcon data-testid="trailing-icon" className={iconClasses} />}
      </ButtonBase>
    );
  }
);

Button.displayName = 'Button';
