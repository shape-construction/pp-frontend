import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconBadge } from './IconBadge';
import { InboxInIcon } from '../Icons/solid';

export default {
  component: IconBadge,
  title: 'Design System/IconBadge',
} as ComponentMeta<typeof IconBadge>;

const Template: ComponentStory<typeof IconBadge> = (args) => <IconBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <InboxInIcon />,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  children: <InboxInIcon className="text-red-500" />,
};
