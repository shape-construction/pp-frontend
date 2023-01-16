import classnames from 'classnames';
import React from 'react';

import { SIZE, THEME } from '../Badge.types';
import { dotColors } from '../BadgeTheme';

export interface DotProps {
  size: SIZE;
  theme: THEME;
}

export const Dot: React.FC<DotProps> = ({ size, theme }: DotProps) => {
  const classNames = classnames('mr-1.5 h-2 w-2', dotColors[theme], {
    'mr-1.5 h-2': size === SIZE.SMALL,
    '-ml-0.5 mr-1.5 h-2': size === SIZE.LARGE,
  });

  return (
    <svg className={classNames} fill="currentColor" viewBox="0 0 8 8">
      <title>Dot</title>
      <circle cx={4} cy={4} r={3} />
    </svg>
  );
};
