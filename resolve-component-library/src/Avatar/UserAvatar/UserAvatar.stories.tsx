import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UserAvatar, UserAvatarProps } from './index';
import { DefaultSizes } from '../../types/Sizes';

const defaultUser = {
  id: 'user_id',
  name: 'Jack Johnson',
  firstName: 'Jack',
  lastName: 'Johnson',
  avatarUrl: '',
};

export default {
  title: 'Design System/Avatar/UserAvatar',
  component: UserAvatar,
  args: { user: defaultUser },
} as Meta<UserAvatarProps>;

const sizes: DefaultSizes[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];

const Template: Story<UserAvatarProps> = (args: UserAvatarProps) => (
  <div className="flex items-center gap-x-4 bg-gray-200">
    {sizes.map((size) => (
      <UserAvatar {...args} size={size} key={size} />
    ))}
  </div>
);

export const WithoutUser = Template.bind({});
WithoutUser.args = {
  user: undefined,
};

export const WithoutAvatarUrl = Template.bind({});
WithoutAvatarUrl.args = {
  user: {
    ...defaultUser,
    avatarUrl: '',
  },
};

export const WithAvatarUrl = Template.bind({});
WithAvatarUrl.args = {
  user: {
    ...defaultUser,
    avatarUrl: 'https://picsum.photos/id/1027/300',
  },
};

export const HighlightedWithoutAvatarUrl = Template.bind({});
HighlightedWithoutAvatarUrl.args = {
  user: {
    ...defaultUser,
    avatarUrl: '',
  },
  highlighted: true,
};

export const HighlightedWithAvatarUrl = Template.bind({});
HighlightedWithAvatarUrl.args = {
  user: {
    ...defaultUser,
    avatarUrl: 'https://picsum.photos/id/1027/300',
  },
  highlighted: true,
};
