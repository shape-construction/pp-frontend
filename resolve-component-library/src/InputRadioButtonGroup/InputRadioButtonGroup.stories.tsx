import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { InputRadioButtonGroup, InputRadioButtonGroupProps } from './InputRadioButtonGroup';

export default {
  title: 'Design System/Input/InputRadioButtonGroup',
  component: InputRadioButtonGroup,
} as Meta<InputRadioButtonGroupProps>;

const Template: Story<InputRadioButtonGroupProps> = (props) => {
  const [value, setValue] = useState(props.options[0].value);

  const changeValue = (_: any, val: string) => setValue(val);

  return <InputRadioButtonGroup value={value} setFieldValue={changeValue} {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'example', value: 'example', description: 'This is a description' },
    {
      label: 'another example',
      value: 'another example',
      description: 'And this is another one',
    },
  ],
};

export const Simple = Template.bind({});
Simple.args = {
  ...Default.args,
  type: 'simple',
};

export const WithLabelAndContent = Template.bind({});
WithLabelAndContent.args = {
  ...Default.args,
  label: 'Group label',
  options: [
    { value: 'example', content: 'This is a description' },
    {
      value: 'another example',
      content: 'And this is another one',
    },
  ],
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  label: 'Group label',
  description: 'A very descriptive description',
};

export const DisabledOption = Template.bind({});
DisabledOption.args = {
  ...Default.args,
  options: [
    ...(Default.args.options || []),
    {
      label: 'Disabled',
      value: 'disabled',
      description: 'You can not choose this option',
      disabled: true,
    },
  ],
};

export const AllDisabled = Template.bind({});
AllDisabled.args = {
  ...Default.args,
  disabled: true,
};
