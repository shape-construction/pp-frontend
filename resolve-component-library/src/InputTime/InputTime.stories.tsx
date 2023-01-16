import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputTime } from './InputTime';

export default {
  title: 'Design System/Input/InputTime',
  component: InputTime,
} as ComponentMeta<typeof InputTime>;

const TemplateInputTime: ComponentStory<typeof InputTime> = (args) => <InputTime {...args} />;

export const Default = TemplateInputTime.bind({});
Default.args = { label: 'Time', name: 'time' };

export const WithValue = TemplateInputTime.bind({});
WithValue.args = { ...Default.args, value: '12:30' };

export const WithErrors = TemplateInputTime.bind({});
WithErrors.args = { ...Default.args, error: 'error' };

export const Disabled = TemplateInputTime.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const WithCornerAdornment = TemplateInputTime.bind({});
WithCornerAdornment.args = { ...Default.args, cornerAdornment: <>Corner Adornment</> };

export const WithFullWidth = TemplateInputTime.bind({});
WithFullWidth.args = {
  ...Default.args,
  fullWidth: true,
};
