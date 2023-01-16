import { Meta, Story } from '@storybook/react';
import React from 'react';
import { InputSelect, InputSelectProps } from './InputSelect';

export default {
  title: 'Design System/Input/InputSelect',
  component: InputSelect,
} as Meta<InputSelectProps>;

const options = [
  { label: 'Frodo Baggins', value: 'frodo' },
  { label: 'Samwise Gamgee', value: 'sam' },
  { label: 'Pippin Took', value: 'pippin' },
  { label: 'Merry Bradybuck', value: 'merry' },
];

const TemplateInputSelect: Story<InputSelectProps> = (args) => <InputSelect {...args} />;

export const Hobbits = TemplateInputSelect.bind({});
Hobbits.args = { label: 'Hobbit', options };

export const WithError = TemplateInputSelect.bind({});
WithError.args = { ...Hobbits.args, value: 'pippin', error: 'Unable to bear the ring' };

export const Disabled = TemplateInputSelect.bind({});
Disabled.args = { ...Hobbits.args, disabled: true, value: 'sam' };

export const DisabledOption = TemplateInputSelect.bind({});
DisabledOption.args = {
  ...Hobbits.args,
  options: [{ label: 'Disabled Option', disabled: true }, ...options],
};

export const WithFullWidth = TemplateInputSelect.bind({});
WithFullWidth.args = {
  ...Hobbits.args,
  fullWidth: true,
};
