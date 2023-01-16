import React from 'react';
import classNames from 'classnames';
import { QuestionMarkCircleIcon } from '../Icons/solid';

export interface FeedSimpleProps {
  prefix?: React.ReactNode;
  body: string;
  suffix?: React.ReactNode;
  date: string;
  iconClassNames?: string;
  Icon?: React.ComponentType;
  belowContent?: React.ReactNode;
}

const FeedSimple: React.FC<FeedSimpleProps> = ({
  body,
  date,
  Icon = QuestionMarkCircleIcon,
  iconClassNames = 'text-gray-500',
  prefix,
  suffix,
  belowContent,
}) => (
  <>
    <div className="relative px-1">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white">
        <Icon className={classNames('h-5 w-5', iconClassNames)} aria-hidden="true" />
      </div>
    </div>
    <div className="min-w-0 flex-1 py-1.5">
      <div className="text-sm text-gray-700" data-testid="feed-content">
        {prefix && <>{prefix}&nbsp;</>}
        {body}
        {suffix && <>&nbsp;{suffix}</>}
        <span className="ml-2 whitespace-nowrap text-gray-400">{date}</span>
      </div>
      {belowContent}
    </div>
  </>
);

export default FeedSimple;
