import { render, screen } from '@testing-library/react';
import React from 'react';
import { AvatarGroupStacked, AvatarGroupStackedProps } from './AvatarGroupStacked';

const users: AvatarGroupStackedProps['users'] = new Array(10).fill(null).map((_, index) => ({
  id: `user_${index}`,
  name: `User ${index}`,
  avatarUrl: 'https://picsum.photos/id/1027/300',
}));

describe('AvatarGroupStacked', () => {
  it('renders 4 avatars if there is no length', () => {
    render(<AvatarGroupStacked users={users} />);

    expect(screen.getAllByRole('listitem', { name: 'user avatar item' })).toHaveLength(4);
  });

  it('renders the number of avatars based on length', () => {
    render(<AvatarGroupStacked users={users} length={2} />);

    expect(screen.getAllByRole('listitem', { name: 'user avatar item' })).toHaveLength(2);
  });
});
