import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Divider, DividerProps } from './Divider';

export default {
  component: Divider,
  subcomponents: {},
  title: 'Design System/Divider',
} as Meta<DividerProps>;

const Template: Story<DividerProps> = (props) => <Divider {...props} />;

export const Row = Template.bind({});
Row.decorators = [
  (Component) => (
    <div className="flex h-96 flex-row p-7">
      <Component />
    </div>
  ),
];
Row.args = {
  direction: 'row',
};

export const Column = Template.bind({});
Column.decorators = [
  (Component) => (
    <div className="flex w-96 flex-col p-7">
      <Component />
    </div>
  ),
];
Column.args = {
  direction: 'column',
};
