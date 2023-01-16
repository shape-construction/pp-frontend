import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputText } from './InputText';

export default {
  title: 'Design System/Input/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Example',
  name: 'example',
  id: 'example',
  required: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
  ...Standard.args,
  value: 'This is my value!',
};

export const WithError = Template.bind({});

WithError.args = {
  ...Standard.args,
  error: 'This field has an error message!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Standard.args,
  value: 'This is my value!',
  disabled: true,
};

export const WithCornerAdornment = Template.bind({});
WithCornerAdornment.args = {
  ...Standard.args,
  value: 'This is my value!',
  cornerAdornment: <>Corner Adornment</>,
};

export const WithCornerAdornmentAndNoLabel = Template.bind({});
WithCornerAdornmentAndNoLabel.args = {
  ...Standard.args,
  value: 'This is my value!',
  cornerAdornment: <>Corner Adornment</>,
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  ...Standard.args,
  fullWidth: true,
};
