import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { Color, configuration } from '../colors';
import { ButtonBaseProps } from '../../Button/ButtonBase';
import { getButtonClasses } from '../../Button/ButtonClasses';
import { twMerge } from 'tailwind-merge';

export type ToolProps = Omit<
  ButtonBaseProps,
  'color' | 'fullWidth' | 'rounded' | 'size' | 'variant'
> & {
  /**
   * When a tool is active it shows an outline around the button
   */
  active?: boolean;
  /**
   * Color used for the active property
   */
  color?: Color;
  /**
   * Icon component to be rendered inside button component
   */
  icon: ReactElement;
  variant?: ButtonBaseProps['variant'];
};

// FIXME: This component needs to be refactored and analised.
// Using it as an extension of the BaseButton is just a quick fix.
export const Tool: FC<ToolProps> = ({
  active = false,
  color = 'gray',
  variant = 'outlined',
  icon,
  disabled = false,
  ...props
}) => {
  const { active: activeColor } = configuration[color];

  const { buttonClasses } = getButtonClasses({
    color: 'secondary',
    variant,
    disabled,
    fullWidth: false,
    rounded: false,
    size: 'md',
  });

  const toolClassNames = twMerge(
    classNames(
      buttonClasses,
      `text-gray-500 bg-white border-gray-300 hover:bg-gray-50 focus:${activeColor}`,
      { [activeColor]: active },
      { 'ring-2 ring-offset-2': active },
      props.className
    )
  );

  const Icon = React.cloneElement(icon, {
    className: classNames('h-5 w-5', icon.props.className),
  });

  return (
    <button {...props} type="button" className={toolClassNames} disabled={disabled}>
      {Icon}
    </button>
  );
};
