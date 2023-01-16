import React from 'react';

import { BadgeBase } from './BadgeBase';

import { BadgeProps, InternalProps, SHAPE, SIZE, THEME } from './Badge.types';
import { sizePropsShaping } from './BadgeSize';
import { shapePropsShaping } from './BadgeShape';
import { themePropsShaping } from './BadgeTheme';

export const defaultProps = ({
  withDot = false,
  label,
  withRemoveButton = false,
  shape = SHAPE.ROUNDED,
  size = SIZE.SMALL,
  theme = THEME.GREEN,
  onRemove = () => {},
  truncate = false,
}: BadgeProps): InternalProps => ({
  withDot,
  label,
  withRemoveButton,
  shape,
  size,
  theme,
  onRemove,
  dotChild: undefined,
  removeButtonChild: undefined,
  truncate,
});

export const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const defaultBadgeProps = defaultProps(props);

  const shapeProps = shapePropsShaping(defaultBadgeProps);
  const sizeProps = sizePropsShaping(defaultBadgeProps);
  const themeProps = themePropsShaping(defaultBadgeProps);

  const badgeProps = { ...defaultBadgeProps, ...shapeProps, ...sizeProps, ...themeProps };

  return <BadgeBase {...badgeProps} />;
};
