import React, { FC } from 'react';
import classNames from 'classnames';
import { DoubleCircleIcon } from '../../Icons';
import { Tool, ToolProps } from './Tool';
import { Color, configuration } from '../colors';

export type ColorToolProps = Omit<ToolProps, 'icon' | 'color'> & {
  /**
   * Color used for the tool
   */
  color: Color;
  /**
   * Class name to be applied on icon component
   */
  iconClassName?: string;
  /**
   * When a color tool is selected it shows the double circle icon with both circles and filled with active color.
   * When not selected, only the inner circle is shown.
   */
  selected?: boolean;
};

export const ColorTool: FC<ColorToolProps> = ({
  iconClassName = '',
  selected = false,
  ...props
}) => {
  const { color } = props;
  const { text: textColor, active: activeColor } = configuration[color];
  const doubleCircleClassName = classNames(iconClassName, { [activeColor]: selected });

  return (
    <Tool
      aria-label={color}
      icon={<DoubleCircleIcon selected={selected} className={doubleCircleClassName} />}
      className={textColor}
      {...props}
    />
  );
};
