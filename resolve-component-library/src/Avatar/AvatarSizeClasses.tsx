import { DefaultSizes } from '../types/Sizes';

type AvatarSizeClassesProps = { size: DefaultSizes };

export const AvatarSizeClasses = ({ size }: AvatarSizeClassesProps) => ({
  root: {
    'h-4 w-4': size === 'xs',
    'h-6 w-6': size === 'sm',
    'h-8 w-8': size === 'md',
    'h-10 w-10': size === 'lg',
    'h-12 w-12': size === 'xl',
    'h-14 w-14': size === '2xl',
    'h-16 w-16': size === '3xl',
    'flex-shrink-0': true,
  },
  fontSize: {
    'text-3xs ': size === 'xs',
    'text-2xs ': size === 'sm',
    'text-xs': size === 'md',
    'text-sm': size === 'lg',
    'text-base': size === 'xl',
    'text-lg': size === '2xl',
    'text-xl': size === '3xl',
  },
  iconSize: {
    'h-2.5 w-2.5': size === 'xs',
    'h-4 w-4': size === 'sm',
    'h-[18px] w-[18px]': size === 'md',
    'h-6 w-6': size === 'lg',
    'h-7 w-7': size === 'xl',
    'h-8 w-8': size === '2xl',
    'h-[38px] w-[38px]': size === '3xl',
  },
});
