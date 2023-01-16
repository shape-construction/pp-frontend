import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StackedListItemTitle } from './StackedListItemTitle';

export default {
  title: 'StackedListItemTitle',
  component: StackedListItemTitle,
} as ComponentMeta<typeof StackedListItemTitle>;

const Template: ComponentStory<typeof StackedListItemTitle> = (args) => (
  <StackedListItemTitle {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  title: 'title',
  description: 'description',
};
