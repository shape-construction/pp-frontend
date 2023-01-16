import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Stepper, StepperProps } from './Stepper';

export default {
  component: Stepper,
  title: 'Design System/Stepper',
} as Meta<StepperProps>;

const Template: Story<StepperProps> = ({ steps = 4, currentStep = 2 }) => (
  <Stepper steps={steps} currentStep={currentStep} />
);

export const Default = Template.bind({});
