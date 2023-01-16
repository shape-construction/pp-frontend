import React from 'react';
import classnames from 'classnames';

import { THEME } from '../Badge.types';
import { removeButtonColors } from '../BadgeTheme';

export interface RemoveButtonProps {
  label: string;
  theme: THEME;
  onRemove: React.MouseEventHandler;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({
  label,
  onRemove,
  theme,
}: RemoveButtonProps) => {
  const classNames = classnames(
    'shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center',
    'focus:outline-none',
    removeButtonColors[theme]
  );

  return (
    <button type="button" className={classNames} onClick={onRemove}>
      <span className="sr-only">{`Remove ${label}`}</span>
      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
        <title>Remove</title>
        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
      </svg>
    </button>
  );
};
