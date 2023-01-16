import React from 'react';
import { UserAvatar, UserAvatarProps } from '../UserAvatar';
import { Stack, Order } from '../../Stack/Stack';

enum Spacing {
  sm = '-1',
  md = '-2',
  lg = '-3',
}

type AvatarGroupStackedSizes = Extract<UserAvatarProps['size'], keyof typeof Spacing>;

export type AvatarGroupStackedProps = {
  order?: Order;
  users: User[];
  size?: AvatarGroupStackedSizes;
  length?: number;
};

export const AvatarGroupStacked: React.FC<AvatarGroupStackedProps> = ({
  users,
  size = 'sm',
  order = 'bottom-to-top',
  length = 4,
}) => {
  const slicedUsers = users.slice(0, length);

  return (
    <Stack spacing={Spacing[size]} order={order} aria-label="user avatar list">
      {slicedUsers.map((user) => (
        <Stack.Item aria-label="user avatar item" key={user.id}>
          <UserAvatar size={size} highlighted user={user} />
        </Stack.Item>
      ))}
    </Stack>
  );
};
