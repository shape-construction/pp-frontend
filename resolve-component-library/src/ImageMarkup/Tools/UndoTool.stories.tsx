import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UndoTool as UndoToolElement } from './UndoTool';

export default {
  title: 'Design System/Editor Markup/Tools/Undo Tool',
  component: UndoToolElement,
} as ComponentMeta<typeof UndoToolElement>;

const Template: ComponentStory<typeof UndoToolElement> = (props) => <UndoToolElement {...props} />;

export const UndoTool = Template.bind({});
