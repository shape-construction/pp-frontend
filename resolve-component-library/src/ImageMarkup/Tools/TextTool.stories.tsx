import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextTool as TextToolElement } from './TextTool';

export default {
  title: 'Design System/Editor Markup/Tools/Text Tool',
  component: TextToolElement,
} as ComponentMeta<typeof TextToolElement>;

const Template: ComponentStory<typeof TextToolElement> = (props) => <TextToolElement {...props} />;

export const TextTool = Template.bind({});
