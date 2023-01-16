import React from 'react';
import { LinkColor, LinkUnderline } from './link-config';
import { getLinkClasses } from './LinkClasses';

export type LinkProps<T extends React.ElementType> = {
  as?: T;
  disabled?: boolean;
  children?: React.ReactNode;
  color: LinkColor;
  underline?: LinkUnderline;

  leadingIcon?: React.ElementType;
  trailingIcon?: React.ElementType;
};

export const Link = <T extends React.ElementType = 'a'>({
  as,

  disabled = false,
  color,
  underline = 'solid',

  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,

  ...props
}: LinkProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof LinkProps<T>>) => {
  const { linkClasses } = getLinkClasses({ disabled, color, underline });

  const Component = as || 'a';

  return (
    <Component {...props} className={linkClasses} disabled={disabled}>
      {!!LeadingIcon && <LeadingIcon data-testid="leading-icon" className="h-4" />}
      {props.children}
      {!!TrailingIcon && <TrailingIcon data-testid="trailing-icon" className="h-4" />}
    </Component>
  );
};
