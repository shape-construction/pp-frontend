import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SearchField } from './SearchField';

export default {
  title: 'Search Field',
  component: SearchField,
  argTypes: { onChange: { action: 'search changed' } },
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => <SearchField {...args} />;

export const Default = Template.bind({});
