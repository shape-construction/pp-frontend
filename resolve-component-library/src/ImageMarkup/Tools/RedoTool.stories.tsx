import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RedoTool as RedoToolElement } from './RedoTool';

export default {
  title: 'Design System/Editor Markup/Tools/Redo Tool',
  component: RedoToolElement,
} as ComponentMeta<typeof RedoToolElement>;

const Template: ComponentStory<typeof RedoToolElement> = (props) => <RedoToolElement {...props} />;

export const RedoTool = Template.bind({});
