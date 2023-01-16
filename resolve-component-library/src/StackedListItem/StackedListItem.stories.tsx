import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StackedListItem } from './StackedListItem';

export default {
  title: 'StackedListItem',
  component: StackedListItem,
} as ComponentMeta<typeof StackedListItem>;

const Template: ComponentStory<typeof StackedListItem> = (args) => <StackedListItem {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  children: <>List item content</>,
};
