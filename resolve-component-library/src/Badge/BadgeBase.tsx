import React from 'react';
import classnames from 'classnames';

import { InternalProps } from './Badge.types';
import { Dot } from './Dot/Dot';
import { RemoveButton } from './RemoveButton/RemoveButton';

export const BadgeBase: React.FC<InternalProps> = ({
  dotChild,
  label,
  onRemove,
  removeButtonChild,
  shapeClassNames,
  size,
  sizeClassNames,
  theme,
  themeClassNames,
  withDot,
  withRemoveButton,
  truncate,
}: InternalProps) => {
  const classNames = classnames(
    'inline-flex items-center',
    { 'w-full': truncate },
    shapeClassNames,
    sizeClassNames,
    themeClassNames
  );

  return (
    <span className={classNames}>
      {withDot && (dotChild || <Dot size={size} theme={theme} />)}
      {truncate ? <span className="truncate">{label}</span> : label}
      {withRemoveButton &&
        (removeButtonChild || <RemoveButton label={label} onRemove={onRemove} theme={theme} />)}
    </span>
  );
};
