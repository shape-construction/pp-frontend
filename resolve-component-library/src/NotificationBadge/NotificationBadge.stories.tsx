import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NotificationBadge from './NotificationBadge';

export default {
  title: 'Design System/NotificationBadge',
  component: NotificationBadge,
} as ComponentMeta<typeof NotificationBadge>;

const Template: ComponentStory<typeof NotificationBadge> = (props) => (
  <NotificationBadge className="text-green-100 bg-green-500" active {...props}>
    <>content</>
  </NotificationBadge>
);

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
};

export const WithoutText = Template.bind({});
WithoutText.args = {};

export const WithText = Template.bind({});
WithText.args = {
  text: '10',
};
