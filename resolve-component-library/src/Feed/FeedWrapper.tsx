import React from 'react';
import classNames from 'classnames';

interface FeedWrapperProps {
  shouldRenderVerticalRule?: boolean;
  isUnread?: boolean;
}

const FeedWrapper: React.FC<FeedWrapperProps> = React.forwardRef(
  ({ shouldRenderVerticalRule = true, isUnread = false, children }, ref) => (
    <li>
      <div
        className={classNames('relative mb-3 py-1.5', { 'rounded-md bg-blue-50': isUnread })}
        data-testid={`feed-wrapper${isUnread ? '-new' : ''}`}
      >
        {shouldRenderVerticalRule && (
          <span
            className="absolute top-3 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
            data-testid="vertical-rule"
          />
        )}
        <div
          className="relative flex items-start space-x-3"
          ref={ref as React.LegacyRef<HTMLDivElement>}
        >
          {children}
        </div>
      </div>
    </li>
  )
);

FeedWrapper.displayName = 'FeedWrapper';

export default FeedWrapper;
