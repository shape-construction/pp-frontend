import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AvatarGroupStacked, AvatarGroupStackedProps } from './AvatarGroupStacked';

export default {
  title: 'Design System/Avatar/AvatarGroupStacked',
  component: AvatarGroupStacked,
} as Meta;

const sizes: AvatarGroupStackedProps['size'][] = ['sm', 'md', 'lg'];
const orders: AvatarGroupStackedProps['order'][] = ['bottom-to-top', 'top-to-bottom'];
const users: AvatarGroupStackedProps['users'] = [
  {
    id: 'user_1',
    name: 'User 1',
    avatarUrl: 'https://picsum.photos/id/1027/300',
  },
  {
    id: 'user_2',
    name: 'User 2',
    avatarUrl: 'https://picsum.photos/id/1027/300',
  },
  {
    id: 'user_3',
    name: 'User 3',
    avatarUrl: 'https://picsum.photos/id/1027/300',
  },
  {
    id: 'user_4',
    name: 'User 4',
    avatarUrl: 'https://picsum.photos/id/1027/300',
  },
];

const Template: Story<AvatarGroupStackedProps> = (props) => <AvatarGroupStacked {...props} />;

export const Sizes: Story = () => (
  <div className="flex flex-col gap-y-10">
    {sizes.map((size) => (
      <div key={size}>
        <p>Size: {size}</p>
        <Template users={users} key={size} size={size} />
      </div>
    ))}
  </div>
);

export const Order: Story = () => (
  <div className="flex flex-col gap-y-10">
    {orders.map((order) => (
      <div key={order}>
        <p>Order: {order}</p>
        <Template users={users} size="md" order={order} />
      </div>
    ))}
  </div>
);

export const Length: Story = () => (
  <div className="flex flex-col gap-y-10">
    {[2, 3, 4].map((length) => (
      <div key={length}>
        <p>Length: {length}</p>
        <Template users={users} size="md" length={length} />
      </div>
    ))}
  </div>
);
