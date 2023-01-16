import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CharacterCount, CharacterCountProps } from './CharacterCount';

export default {
  component: CharacterCount,
  subcomponents: {},
  title: 'Design System/CharacterCount',
} as Meta<CharacterCountProps>;

const Template: Story<CharacterCountProps> = (props) => <CharacterCount {...props} />;

export const Default = Template.bind({});
Default.args = {
  sentence: 'Some characters',
  maximum: 20,
  label: 'characters',
};

export const Exceeding = Template.bind({});
Exceeding.args = {
  ...Default.args,
  maximum: 10,
};
