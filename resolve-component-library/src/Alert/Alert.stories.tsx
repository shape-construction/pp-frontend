import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from './Alert';
import { DiamondIcon } from '../Icons/solid';

export default {
  title: 'Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  children: 'This is an Error message',
};
export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  children: 'This is an Warning message',
};
export const Success = Template.bind({});
Success.args = {
  type: 'success',
  children: 'This is an Success message',
};
export const Info = Template.bind({});
Info.args = {
  type: 'info',
  children: 'This is an Info message',
};

export const Banner = Template.bind({});
Banner.args = {
  children: 'This is a banner variant',
  type: 'success',
  variant: 'banner',
};

export const WithAction = Template.bind({});
WithAction.args = {
  children: 'This is a very long alert message',
  Actions: (
    <button type="button" className="bg-gray-200 p-1">
      Action
    </button>
  ),
};

export const CenteredWithAction = Template.bind({});
CenteredWithAction.args = {
  children: 'This is a very long alert message',
  Actions: (
    <button type="button" className="bg-gray-200 p-1">
      Action
    </button>
  ),
  centered: true,
  type: 'info',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'This has provided icon',
  icon: <DiamondIcon className="h-5 w-5 text-green-400" aria-hidden="true" />,
  centered: true,
  type: 'success',
};
