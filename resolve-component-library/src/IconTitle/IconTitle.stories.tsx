import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ExclamationIcon } from '../Icons/outline';
import { IconTitle, IconTitleProps } from './IconTitle';

export default {
  component: IconTitle,
  title: 'IconTitle',
} as Meta<IconTitleProps>;

const Template: Story<IconTitleProps> = (args) => <IconTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <ExclamationIcon />,
  color: 'red',
  title: 'Delete these items?',
  subtitle: "This action can't be undone.",
};
