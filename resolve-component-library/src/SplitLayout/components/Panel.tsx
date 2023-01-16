import classnames from 'classnames';
import React, { FC, HtmlHTMLAttributes } from 'react';

export interface PanelProps extends HtmlHTMLAttributes<HTMLDivElement> {
  // Props coming from SplitLayout React.cloneElement
  index?: number;
  isHidden?: boolean;
  isExpanded?: boolean;
}

export const Panel: FC<PanelProps> = ({
  children,
  className,
  index,
  isHidden,
  isExpanded,
  ...props
}) => (
  <div
    aria-expanded={isExpanded}
    aria-hidden={isHidden}
    className={classnames(className, {
      'opacity-0 hidden': isHidden,
      'opacity-100 w-full': isExpanded,
    })}
    {...props}
  >
    {children}
  </div>
);
