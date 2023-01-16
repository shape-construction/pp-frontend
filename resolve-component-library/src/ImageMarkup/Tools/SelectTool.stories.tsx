import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectTool as SelectToolElement } from './SelectTool';

export default {
  title: 'Design System/Editor Markup/Tools/Select Tool',
  component: SelectToolElement,
} as ComponentMeta<typeof SelectToolElement>;

const Template: ComponentStory<typeof SelectToolElement> = (props) => (
  <SelectToolElement {...props} />
);

export const SelectTool = Template.bind({});
