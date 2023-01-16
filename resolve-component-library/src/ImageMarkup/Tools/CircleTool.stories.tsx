import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CircleTool as CircleToolElement } from './CircleTool';

export default {
  title: 'Design System/Editor Markup/Tools/Circle Tool',
  component: CircleToolElement,
} as ComponentMeta<typeof CircleToolElement>;

const Template: ComponentStory<typeof CircleToolElement> = (props) => (
  <CircleToolElement {...props} />
);

export const CircleTool = Template.bind({});
