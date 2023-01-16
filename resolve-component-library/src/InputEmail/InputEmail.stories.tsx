import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputEmail } from './InputEmail';

export default {
  title: 'Design System/Input/InputEmail',
  component: InputEmail,
} as ComponentMeta<typeof InputEmail>;

const Template: ComponentStory<typeof InputEmail> = (args) => <InputEmail {...args} />;

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
  value: 'example@value.com',
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
  value: 'example@value.com',
  disabled: true,
};

export const WithCornerAdornment = Template.bind({});
WithCornerAdornment.args = {
  label: 'Example',
  name: 'example',
  id: 'example',
  value: 'example@value.com',
  cornerAdornment: <>Corner Adornment</>,
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  ...Standard.args,
  fullWidth: true,
};
