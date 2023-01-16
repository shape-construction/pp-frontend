import React from 'react';
import FeedWrapper from './FeedWrapper';
import FeedComment, { FeedCommentProps } from './FeedComment';

export default {
  title: 'Design System/Feed/FeedComment',
  component: FeedComment,
  args: {
    user: {
      name: 'Rick Sanchez',
      firstName: 'Rick',
      lastName: 'Sanchez',
    },
    body: 'added a comment',
    date: '25/5',
    comment: 'Wubba Lubba Dub Dub!',
  },
};

const Template = (args: FeedCommentProps) => (
  <div className="flow-root">
    <ul>
      <FeedWrapper>
        <FeedComment {...args} />
      </FeedWrapper>
    </ul>
  </div>
);

const TemplateUnread = (args: FeedCommentProps) => (
  <div className="flow-root">
    <ul>
      <FeedWrapper isUnread>
        <FeedComment {...args} />
      </FeedWrapper>
    </ul>
  </div>
);

const TemplateMultiple = (args: FeedCommentProps) => (
  <div className="flow-root">
    <ul>
      <FeedWrapper isUnread>
        <FeedComment {...args} />
      </FeedWrapper>
      <FeedWrapper isUnread>
        <FeedComment {...args} />
      </FeedWrapper>
      <FeedWrapper>
        <FeedComment {...args} />
      </FeedWrapper>
      <FeedWrapper shouldRenderVerticalRule={false}>
        <FeedComment {...args} />
      </FeedWrapper>
    </ul>
  </div>
);

export const CommentFeed = Template.bind({});
export const CommentFeedUnread = TemplateUnread.bind({});
export const MultipleCommentFeed = TemplateMultiple.bind({});
