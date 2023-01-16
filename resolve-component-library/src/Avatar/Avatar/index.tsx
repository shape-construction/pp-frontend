import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { DefaultSizes } from '../../types/Sizes';
import { AvatarSizeClasses } from '../AvatarSizeClasses';

export interface AvatarProps {
  /**
   * @param icon - icon to display on the avatar
   * */
  icon?: ReactNode;
  /**
   * @param imgURL - image to display on the avatar
   * */
  imgURL?: string;
  /**
   * @param size - size of the component
   * */
  size?: DefaultSizes;
  /**
   * @param text - text to display in the absence of an image
   * */
  text: string;
  /**
   * @param variant - image style variant to be displayed
   * */
  variant?: 'circle' | 'rounded';
}

export const Avatar: React.FC<AvatarProps> = ({
  icon,
  imgURL,
  text,
  size = 'md',
  variant = 'circle',
}) => {
  const { root, fontSize, iconSize } = AvatarSizeClasses({ size });

  const displayImage = !!imgURL;
  const displayIcon = !imgURL && !!icon;
  const displayFallback = !imgURL && !icon;

  return (
    <div
      className={classNames('flex justify-center overflow-hidden bg-gray-200 text-center', root, {
        'rounded': variant === 'rounded',
        'rounded-full': variant === 'circle',
      })}
    >
      {displayImage && (
        <img className="inline-block h-full w-full object-cover" src={imgURL} alt={text} />
      )}
      {displayIcon && (
        <div className={classNames('inline-flex justify-center self-center', iconSize)}>{icon}</div>
      )}
      {displayFallback && (
        <span
          className={classNames(
            'inline-flex items-center justify-center font-medium leading-none text-gray-500',
            fontSize
          )}
        >
          {text.slice(0, 3).toUpperCase()}
        </span>
      )}
    </div>
  );
};
