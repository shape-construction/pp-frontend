import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PencilTool as PencilToolElement } from './PencilTool';

export default {
  title: 'Design System/Editor Markup/Tools/Pencil Tool',
  component: PencilToolElement,
} as ComponentMeta<typeof PencilToolElement>;

const Template: ComponentStory<typeof PencilToolElement> = (props) => (
  <PencilToolElement {...props} />
);

export const PencilTool = Template.bind({});
