import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StackedListHeader } from './StackedListHeader';

export default {
  title: 'StackedListHeader',
  component: StackedListHeader,
} as ComponentMeta<typeof StackedListHeader>;

const Template: ComponentStory<typeof StackedListHeader> = (args) => (
  <StackedListHeader {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  title: 'Stacked List Header',
};
