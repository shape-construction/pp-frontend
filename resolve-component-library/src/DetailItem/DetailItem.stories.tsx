import React from 'react';
import {
  CalendarIcon,
  LocationMarkerIcon,
  MinusCircleIcon,
  QuestionMarkCircleIcon,
} from '../Icons/solid';
import { Meta, Story } from '@storybook/react';
import { DetailItem, DetailItemProps } from './DetailItem';

export default {
  title: 'Design System/Details/DetailItem',
  component: DetailItem,
} as Meta<DetailItemProps>;

const DetailItemTemplate: Story<DetailItemProps> = (args) => <DetailItem {...args} />;

export const Default = DetailItemTemplate.bind({});
Default.args = {
  title: 'This is the title',
  icon: <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />,
  children: <>With something expandable</>,
};

export const Disabled = DetailItemTemplate.bind({});
Disabled.args = {
  title: 'This is disabled',
  icon: <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />,
  disabled: true,
};

export const DisabledWithChildren = DetailItemTemplate.bind({});
DisabledWithChildren.args = {
  title: 'This is disabled',
  icon: <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />,
  children: <>With something expandable</>,
  disabled: true,
};

export const WithoutIcon = DetailItemTemplate.bind({});
WithoutIcon.args = {
  title: 'This is the title',
  children: <>With something expandable</>,
};

export const NotExpandable = DetailItemTemplate.bind({});
NotExpandable.args = {
  title: 'This is the title',
  icon: <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />,
  children: <>With something expandable</>,
  expandable: false,
};

export const NotExpandableWithoutTitle = DetailItemTemplate.bind({});
NotExpandableWithoutTitle.args = {
  children: <>With something expandable</>,
  expandable: false,
};

export const MultipleItems: Story<DetailItemProps> = ({ onClick }) => (
  <div className="space-y">
    <DetailItem
      icon={<QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />}
      title="Something Needed > Access"
    />
    <DetailItem
      icon={<LocationMarkerIcon className="h-5 w-5 text-gray-400" />}
      title="KGS > B01 > TK07"
      onClick={onClick}
    />
    <DetailItem
      icon={<CalendarIcon className="h-5 w-5 text-yellow-500" />}
      title="Due April 13 - 9:00"
    />
    <DetailItem
      icon={<MinusCircleIcon className="h-5 w-5 text-red-500" />}
      title="Live Delay"
      onClick={onClick}
    >
      More content here
    </DetailItem>
    <DetailItem icon="*" title="No onClick, No Content" />
    <DetailItem icon="*" title="With onClick, No Content" onClick={onClick} />
    <DetailItem icon="*" title="No onClick, With Content">
      Content
    </DetailItem>
    <DetailItem icon="*" title="With onClick, With Content" onClick={onClick}>
      More content here
    </DetailItem>
    <DetailItem icon="C" title="default expanded item" defaultOpen>
      Some content here
    </DetailItem>
    <DetailItem icon="D" title="another expandable item" onClick={onClick}>
      More content here
    </DetailItem>
  </div>
);
MultipleItems.args = {};
