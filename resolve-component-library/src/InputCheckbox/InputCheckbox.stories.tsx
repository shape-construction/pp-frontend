import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputCheckbox } from './InputCheckbox';

export default {
  title: 'Design System/Input/InputCheckbox',
  component: InputCheckbox,
} as ComponentMeta<typeof InputCheckbox>;

const Template: ComponentStory<typeof InputCheckbox> = (args) => <InputCheckbox {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Example',
  name: 'example',
  id: 'example',
  required: true,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Example',
  name: 'example',
  id: 'example',
  checked: true,
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
  disabled: true,
};
