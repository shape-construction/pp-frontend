import { ChatAltIcon, LockClosedIcon } from '../Icons/solid';
import React from 'react';
import { UserAvatar } from '../Avatar';

export interface FeedCommentProps {
  user: User;
  body: string;
  date: string;
  comment: string;
  privateComment?: boolean;
}

const FeedComment: React.FC<FeedCommentProps> = ({
  user,
  body,
  date,
  comment,
  privateComment = false,
}) => (
  <>
    <div className="relative">
      <UserAvatar user={user} size="lg" highlighted={true} />

      <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
        {privateComment ? (
          <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        ) : (
          <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        )}
      </span>
    </div>
    <div className="min-w-0 flex-1" data-testid="feed-content">
      <div className="text-sm text-gray-700">
        <strong className="font-medium text-gray-900">{user.name}</strong>
        &nbsp;{body}
        <span className="ml-2 whitespace-nowrap text-gray-400">{date}</span>
      </div>
      <p className="mt-2 text-sm text-gray-700">{comment}</p>
    </div>
  </>
);

export default FeedComment;
