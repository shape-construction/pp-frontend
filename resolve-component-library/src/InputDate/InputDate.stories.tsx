import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputDate } from './InputDate';

export default {
  title: 'Design System/Input/InputDate',
  component: InputDate,
} as ComponentMeta<typeof InputDate>;

const TemplateInputDate: ComponentStory<typeof InputDate> = (args) => <InputDate {...args} />;
export const Default = TemplateInputDate.bind({});
Default.args = {
  label: 'Date',
  name: 'date',
};

export const WithValue = TemplateInputDate.bind({});
WithValue.args = { ...Default.args, value: '2020-09-29' };

export const WithErrors = TemplateInputDate.bind({});
WithErrors.args = { ...Default.args, error: 'error' };

export const Disabled = TemplateInputDate.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const WithCornerAdornment = TemplateInputDate.bind({});
WithCornerAdornment.args = { ...Default.args, cornerAdornment: <>Corner Adornment</> };

export const WithFullWidth = TemplateInputDate.bind({});
WithFullWidth.args = {
  ...Default.args,
  fullWidth: true,
};
