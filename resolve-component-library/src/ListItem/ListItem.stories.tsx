import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListItem } from './ListItem';

export default {
  title: 'List Item',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  title: 'My list item',
};

export const HighlightedWord = Template.bind({});
HighlightedWord.args = {
  ...Standard.args,
  highlightWord: 'list',
};
