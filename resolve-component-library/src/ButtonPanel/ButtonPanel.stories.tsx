import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonPanel } from './ButtonPanel';

export default {
  title: 'Design System/LegacyButton/ButtonPanel',
  component: ButtonPanel,
} as ComponentMeta<typeof ButtonPanel>;

const Template: ComponentStory<typeof ButtonPanel> = (args) => <ButtonPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>This is a block level child</div>,
};
