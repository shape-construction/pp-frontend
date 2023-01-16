import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Steps, StepsProps } from './Steps';
import { Step } from './Step';

export default {
  component: Steps,
  title: 'Design System/Stepper/Steps',
} as Meta<StepsProps>;

const Template: Story<StepsProps> = (args) => <Steps {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<Step variant="complete" />, <Step variant="current" />, <Step />],
};
