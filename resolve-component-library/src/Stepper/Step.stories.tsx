import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Step, StepProps } from './Step';
import { Steps } from './Steps';

export default {
  component: Step,
  title: 'Design System/Stepper/Step',
} as Meta<StepProps>;

const Template: Story<StepProps> = ({ ...args }) => (
  <Steps>
    <Step {...args} />
  </Steps>
);
export const Default = Template.bind({});

export const Current = Template.bind({});
Current.args = {
  variant: 'current',
};

export const Complete = Template.bind({});
Complete.args = {
  variant: 'complete',
};
