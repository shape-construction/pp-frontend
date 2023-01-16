import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './index';
import { DefaultSizes } from '../../types/Sizes';
import { FolderAddIcon } from '../../Icons/solid';

export default {
  title: 'Design System/Avatar/Avatar',
  component: Avatar,
} as Meta<AvatarProps>;

const sizes: DefaultSizes[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];

const Template: Story<AvatarProps> = (args: AvatarProps) => (
  <div className="flex items-center gap-x-4">
    {sizes.map((size, key) => (
      <Avatar key={key} {...args} size={size} />
    ))}
  </div>
);

export const WithoutAvatarUrl = Template.bind({});
WithoutAvatarUrl.args = {
  text: 'Shape',
  variant: 'circle',
};

export const WithAvatarUrl = Template.bind({});
WithAvatarUrl.args = {
  text: 'Shape',
  imgURL: 'https://picsum.photos/id/1027/300',
  variant: 'circle',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Shape',
  icon: <FolderAddIcon />,
  variant: 'circle',
};
