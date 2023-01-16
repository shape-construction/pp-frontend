import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LockClosedIcon } from '../Icons/solid';
import { Banner } from '..';

export default {
  title: 'Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a banner message',
  icon: <LockClosedIcon />,
};

export const Floating = Template.bind({});
Floating.args = {
  ...Default.args,
  floating: true,
};

export const Centered = Template.bind({});
Centered.args = {
  ...Default.args,
  centered: true,
};
