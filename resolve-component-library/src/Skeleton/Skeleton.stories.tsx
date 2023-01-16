import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Design System/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Rectangle = Template.bind({});
Rectangle.args = { variant: 'rectangle', className: 'h-2 w-full' };
Rectangle.decorators = [
  (Story) => (
    <div className="space-y-2">
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  ),
];

export const Circle = Template.bind({});
Circle.args = { variant: 'circle', className: 'h-20 w-20' };
