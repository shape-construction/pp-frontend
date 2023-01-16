import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputTextArea } from './InputTextArea';

export default {
  title: 'Design System/Input/InputTextArea',
  component: InputTextArea,
} as ComponentMeta<typeof InputTextArea>;

const Template: ComponentStory<typeof InputTextArea> = (args) => <InputTextArea {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Example',
  name: 'example',
  id: 'example',
  required: true,
  rows: 5,
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Example',
  name: 'example',
  id: 'example',
  value: 'This is my value!',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Example',
  name: 'example',
  id: 'example',
  error: 'This field has an error message!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Example',
  name: 'example',
  id: 'example',
  value: 'This is my value!',
  disabled: true,
};

export const WithCornerAdornment = Template.bind({});
WithCornerAdornment.args = {
  label: 'Example',
  name: 'example',
  id: 'example',
  value: 'This is my value!',
  cornerAdornment: <>Corner Adornment</>,
};

export const WithCornerAdornmentAndNoLabel = Template.bind({});
WithCornerAdornmentAndNoLabel.args = {
  name: 'example',
  id: 'example',
  value: 'This is my value!',
  cornerAdornment: <>Corner Adornment</>,
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  ...Standard.args,
  fullWidth: true,
};
