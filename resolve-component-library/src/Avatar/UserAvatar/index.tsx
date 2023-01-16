import React from 'react';
import classNames from 'classnames';
import { DefaultSizes } from '../../types/Sizes';
import { ProfileIcon } from '../../Icons';
import { AvatarSizeClasses } from '../AvatarSizeClasses';

export interface UserAvatarProps {
  user?: User;
  /**
   * @param size - size of the component
   * */
  size: DefaultSizes;
  /**
   * @param highlighted - add a highlight to the avatar
   * @default false
   */
  highlighted?: boolean;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ user, size, highlighted = false }) => {
  const { root, fontSize } = AvatarSizeClasses({ size });

  if (!user) {
    return (
      <div
        className={classNames(
          'inline-block overflow-hidden rounded-full bg-gray-100',
          { 'ring-2 ring-white': highlighted },
          root
        )}
      >
        <ProfileIcon
          className="h-full w-full translate-y-1/5 transform"
          role="presentation"
          aria-label="Generic user"
        />
      </div>
    );
  }

  return user.avatarUrl ? (
    <img
      className={classNames(
        'inline-block rounded-full bg-white',
        { 'ring-2 ring-white': highlighted },
        root
      )}
      src={user.avatarUrl}
      alt={user.name}
      role="presentation"
    />
  ) : (
    <div
      className={classNames(
        'flex items-center justify-center rounded-full bg-indigo-400',
        { 'ring-2 ring-white': highlighted },
        root
      )}
      role="presentation"
    >
      <span className={classNames('uppercase text-white', fontSize)}>
        {user.firstName?.charAt(0) || user.name?.slice(0, 2)}
        {user.lastName?.charAt(0) || user.firstName?.charAt(1)}
      </span>
    </div>
  );
};
