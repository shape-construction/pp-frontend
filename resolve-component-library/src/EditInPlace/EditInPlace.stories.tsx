import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { EditInPlace, EditInPlaceProps } from './EditInPlace';

export default {
  title: 'Design System/Input/EditInPlace',
  component: EditInPlace,
  args: {
    label: 'Edit title',
    maxLength: 64,
    contentEditable: true,
    showLengthMessage: false,
  },
} as Meta<EditInPlaceProps>;

const Template: Story<EditInPlaceProps> = (args) => {
  const [value, setValue] = useState('Departure from the approved design');
  return (
    <EditInPlace {...args} onBlur={setValue}>
      <h1 className="rounded px-1 text-2xl font-semibold leading-8">{value}</h1>
    </EditInPlace>
  );
};

export const Default = Template.bind({});

export const EditInPlaceDisabled = Template.bind({});
EditInPlaceDisabled.args = { contentEditable: false };

export const EditInPlaceWithMessage = Template.bind({});
EditInPlaceWithMessage.args = { contentEditable: true, maxLength: 64, showLengthMessage: true };
