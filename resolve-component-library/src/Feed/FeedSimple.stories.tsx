import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CheckCircleIcon } from '../Icons/solid';
import FeedWrapper from './FeedWrapper';
import FeedSimple, { FeedSimpleProps } from './FeedSimple';

export default {
  title: 'Design System/Feed/FeedSimple',
  component: FeedSimple,
  args: {
    body: 'Things happened',
    date: '25/5',
  },
} as Meta<FeedSimpleProps>;

const Template: Story<FeedSimpleProps> = (args) => (
  <div className="flow-root">
    <ul>
      <FeedWrapper>
        <FeedSimple {...args} />
      </FeedWrapper>
    </ul>
  </div>
);

const TemplateUnread: Story<FeedSimpleProps> = (args) => (
  <div className="flow-root">
    <ul>
      <FeedWrapper isUnread>
        <FeedSimple {...args} />
      </FeedWrapper>
    </ul>
  </div>
);

const TemplateMultiple: Story<FeedSimpleProps> = (args) => (
  <div className="flow-root">
    <ul>
      <FeedWrapper isUnread>
        <FeedSimple {...args} />
      </FeedWrapper>
      <FeedWrapper isUnread>
        <FeedSimple {...args} />
      </FeedWrapper>
      <FeedWrapper>
        <FeedSimple {...args} />
      </FeedWrapper>
      <FeedWrapper shouldRenderVerticalRule={false}>
        <FeedSimple {...args} />
      </FeedWrapper>
    </ul>
  </div>
);

export const SimpleFeed = Template.bind({});
export const SimpleFeedUnread = TemplateUnread.bind({});

const elaborateSimpleFeedArgs = {
  Icon: CheckCircleIcon,
  iconClassNames: 'text-green-500',
  date: '25/5',
  prefix: <strong>Past is history,</strong>,
  body: 'Tomorrow is mistery,',
  suffix: <strong>But today is gift.</strong>,
  belowContent: (
    <p className="mt-4">
      {"That's why it's called "} <strong>present</strong>
    </p>
  ),
};
export const ElaborateSimpleFeed = Template.bind({});
ElaborateSimpleFeed.args = elaborateSimpleFeedArgs;
export const ElaborateSimpleFeedUnread = TemplateUnread.bind({});
ElaborateSimpleFeedUnread.args = elaborateSimpleFeedArgs;

export const MultipleSimpleFeed = TemplateMultiple.bind({});
