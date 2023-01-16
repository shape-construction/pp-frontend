import React from 'react';

export enum SHAPE {
  BASIC = 'BASIC',
  ROUNDED = 'ROUNDED',
}

export enum THEME {
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  PINK = 'PINK',
  YELLOW = 'YELLOW',
  GRAY = 'GRAY',
  TEAL = 'TEAL',
  WHITE = 'WHITE',
}

export enum SIZE {
  SMALL = 'SMALL',
  LARGE = 'LARGE',
}

export interface BadgeProps {
  /**
   * Does the badge have a dot?
   */
  withDot?: boolean;
  /**
   * The label of the badge
   */
  label: string;
  /**
   * Handler when clicking the remove button
   */
  onRemove?: React.MouseEventHandler;
  /**
   * Does the badge have a remove button?
   */
  withRemoveButton?: boolean;
  /**
   * The shape of the badge
   */
  shape?: SHAPE;
  /**
   * The size of the badge
   */
  size?: SIZE;
  /**
   * The colorized theme of the badge
   */
  theme?: THEME;
  /**
   * If badge should occupy only its container and truncate label
   */
  truncate?: boolean;
}

export interface InternalProps extends Required<BadgeProps> {
  /**
   * The dot component
   */
  dotChild?: React.ReactElement;
  /**
   * The remove button component
   */
  removeButtonChild?: React.ReactElement;
  /**
   * The class names needed to define the shape
   */
  shapeClassNames?: string;
  /**
   * The class names needed to define the size
   */
  sizeClassNames?: string;
  /**
   * The class names needed to define the theme
   */
  themeClassNames?: string;
}
