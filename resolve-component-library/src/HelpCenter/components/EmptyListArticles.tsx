import React from 'react';
import { QuestionMarkCircleIcon } from '../../Icons/outline';

type EmptyListArticlesProps = {
  helpCenterUrl: string;
  helpCenterEmail: string;
};

const EmptyListArticles: React.FC<EmptyListArticlesProps> = ({
  helpCenterUrl,
  helpCenterEmail,
}) => (
  <div
    className="flex h-full flex-col items-center justify-center gap-y-4 p-7"
    data-testid="empty-list-articles"
  >
    <QuestionMarkCircleIcon className="h-9 w-9 text-gray-400" />
    <div className="flex flex-col items-center gap-y-1">
      <span className="text-sm font-medium leading-5 text-gray-800">No entries found</span>
      <p className="text-center text-sm font-normal leading-5 text-gray-500">
        We couldn&apos;t find any articles related to the current page. You can visit our{' '}
        <a
          className="font-medium text-indigo-500"
          href={helpCenterUrl}
          target="_blank"
          rel="noreferrer"
        >
          help center
        </a>{' '}
        and browse available articles, or you can{' '}
        <a
          className="font-medium text-indigo-500"
          href={`mailto:${helpCenterEmail}`}
          target="_blank"
          rel="noreferrer"
        >
          contact support
        </a>{' '}
        directly.
      </p>
    </div>
  </div>
);

export default EmptyListArticles;
