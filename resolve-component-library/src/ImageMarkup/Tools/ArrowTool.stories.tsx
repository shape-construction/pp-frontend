import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowTool as ArrowToolElement } from './ArrowTool';

export default {
  title: 'Design System/Editor Markup/Tools/Arrow Tool',
  component: ArrowToolElement,
} as ComponentMeta<typeof ArrowToolElement>;

const Template: ComponentStory<typeof ArrowToolElement> = (props) => (
  <ArrowToolElement {...props} />
);

export const ArrowTool = Template.bind({});
