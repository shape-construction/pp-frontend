import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputPassword } from './InputPassword';

export default {
  title: 'Design System/Input/InputPassword',
  component: InputPassword,
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) => <InputPassword {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Example',
  name: 'example',
  id: 'example',
  required: true,
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

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  ...Standard.args,
  fullWidth: true,
};
