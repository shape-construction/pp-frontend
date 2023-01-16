import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Direction as DirectionType,
  Spacing as SpacingType,
  Order as OrderType,
  Stack,
  StackProps,
} from './Stack';

export default {
  title: 'Factories/Stack',
  component: Stack,
  subcomponents: {
    Item: Stack.Item,
  },
} as Meta<StackProps>;

const Template: Story<Omit<StackProps, 'children'>> = (props) => (
  <Stack {...props}>
    <Stack.Item>
      <div className="h-10 w-10 rounded-full bg-green-300" />
    </Stack.Item>
    <Stack.Item>
      <div className="h-10 w-10 rounded-full bg-yellow-400" />
    </Stack.Item>
    <Stack.Item>
      <div className="h-10 w-10 rounded-full bg-red-300" />
    </Stack.Item>
    <Stack.Item>
      <div className="h-10 w-10 rounded-full bg-blue-300" />
    </Stack.Item>
  </Stack>
);

export const Direction = () => {
  const directions: DirectionType[] = ['row', 'column'];

  return (
    <div className="flex flex-col gap-4">
      {directions.map((direction) => (
        <div key={direction}>
          <p>Direction: {direction}</p>
          <Template direction={direction} />
        </div>
      ))}
    </div>
  );
};

export const Spacing = () => {
  const spacings: SpacingType[] = ['-1', '-2', '-3', '0', '1', '2', '3'];

  return (
    <div className="flex flex-col gap-4">
      {spacings.map((spacing) => (
        <div key={spacing}>
          <p>Spacing: {spacing}</p>
          <Template spacing={spacing} />
        </div>
      ))}
    </div>
  );
};

export const Order = () => {
  const orders: OrderType[] = ['bottom-to-top', 'top-to-bottom'];

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <div key={order}>
          <p>Order: {order}</p>
          <Template spacing="-3" order={order} />
        </div>
      ))}
    </div>
  );
};

export const Divider = Template.bind({});
Divider.args = {
  divider: true,
  spacing: '3',
};
