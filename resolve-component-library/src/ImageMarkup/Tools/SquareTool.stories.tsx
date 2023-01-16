import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SquareTool as SquareToolElement } from './SquareTool';

export default {
  title: 'Design System/Editor Markup/Tools/Square Tool',
  component: SquareToolElement,
} as ComponentMeta<typeof SquareToolElement>;

const Template: ComponentStory<typeof SquareToolElement> = (props) => (
  <SquareToolElement {...props} />
);

export const SquareTool = Template.bind({});
