import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColorTool as ColorToolElement } from './ColorTool';

export default {
  title: 'Design System/Editor Markup/Tools/Color Tool',
  component: ColorToolElement,
  args: {
    color: 'yellow',
  },
} as ComponentMeta<typeof ColorToolElement>;

const Template: ComponentStory<typeof ColorToolElement> = (props) => (
  <ColorToolElement {...props} />
);

export const ColorTool = Template.bind({});
