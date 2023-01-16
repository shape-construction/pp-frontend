import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ListWithSeparator, ListWithSeparatorProps } from './ListWithSeparator';

export default {
  title: 'Design System/ListWithSeparator',
  component: ListWithSeparator,
} as Meta<ListWithSeparatorProps>;

const TemplateListWithSeparator: Story<ListWithSeparatorProps> = (args) => (
  <ListWithSeparator {...args} />
);

export const MultipleChildren = TemplateListWithSeparator.bind({});
MultipleChildren.args = {
  children: [
    1,
    <div key="2">2</div>,
    '3',
    <div key="123">4</div>,
    () => <div>aaa</div>,
    true,
    false,
    undefined,
  ],
};

export const LongChildren = TemplateListWithSeparator.bind({});
LongChildren.args = {
  children: [
    'This is a long text',
    'This one is long text too',
    'This one is even more long than the other',
    () => <div>aaa</div>,
    true,
    false,
    undefined,
  ],
};

export const SingleChild = TemplateListWithSeparator.bind({});
SingleChild.args = { children: [<div key="1">1</div>] };
