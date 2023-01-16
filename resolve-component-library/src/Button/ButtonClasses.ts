import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { ButtonColor, ButtonSize, ButtonVariant } from './button-config';

const sizeClassesMap: Record<NonNullable<ButtonSize>, string> = {
  xs: 'rounded text-xs leading-4 font-medium px-2.5 py-2 h-8',
  sm: 'rounded-md text-sm leading-4 font-medium px-3 py-2.5 h-9',
  md: 'rounded-md text-sm leading-5 font-medium px-4 py-2.5 h-10',
  lg: 'rounded-md text-base leading-6 font-medium px-4 py-2.5 h-11',
  xl: 'rounded-md text-base leading-6 font-medium px-6 py-3 h-12',
};

const roundedSizeClassesMap: Record<NonNullable<ButtonSize>, string> = {
  xs: 'rounded-full p-2',
  sm: 'rounded-full p-2',
  md: 'rounded-full p-2.5',
  lg: 'rounded-full p-3',
  xl: 'rounded-full p-3',
};

const colorVariantClassesMap: Record<
  NonNullable<ButtonColor>,
  Record<NonNullable<ButtonVariant>, string>
> = {
  primary: {
    contained: 'text-white bg-indigo-500',
    outlined: 'bg-white outline outline-1 -outline-offset-1 text-indigo-600 outline-indigo-300',
    text: 'text-indigo-600',
  },
  secondary: {
    contained: 'text-gray-700 bg-gray-200',
    outlined: 'bg-white outline outline-1 -outline-offset-1 text-gray-700 outline-gray-300',
    text: 'text-gray-700',
  },
  success: {
    contained: 'text-white bg-green-500',
    outlined: 'bg-white outline outline-1 -outline-offset-1 text-green-700 outline-green-300',
    text: 'text-green-700',
  },
  danger: {
    contained: 'text-white bg-red-600',
    outlined: 'bg-white outline outline-1 -outline-offset-1 text-red-700 outline-red-300',
    text: 'text-red-700',
  },
  warning: {
    contained: 'text-white bg-yellow-500',
    outlined: 'bg-white outline outline-1 -outline-offset-1 text-yellow-700 outline-yellow-400',
    text: 'text-yellow-700',
  },
};

const hoverColorVariantClassesMap: Record<
  NonNullable<ButtonColor>,
  Record<NonNullable<ButtonVariant>, string>
> = {
  primary: {
    contained: 'hover:bg-indigo-600',
    outlined: 'hover:bg-indigo-50',
    text: 'hover:bg-indigo-50',
  },
  secondary: {
    contained: 'hover:bg-gray-300',
    outlined: 'hover:bg-gray-50',
    text: 'hover:bg-gray-50',
  },
  success: {
    contained: 'hover:bg-green-600 ',
    outlined: 'hover:bg-green-50',
    text: 'hover:bg-green-50',
  },
  danger: {
    contained: 'hover:bg-red-700',
    outlined: 'hover:bg-red-50',
    text: 'hover:bg-red-50',
  },
  warning: {
    contained: 'hover:bg-yellow-600',
    outlined: 'hover:bg-yellow-50',
    text: 'hover:bg-yellow-50',
  },
};

const focusColorVariantClassesMap: Record<
  NonNullable<ButtonColor>,
  Record<NonNullable<ButtonVariant>, string>
> = {
  primary: {
    contained: 'focus:ring-indigo-500',
    outlined: 'focus:ring-indigo-500',
    text: 'focus:ring-indigo-500',
  },
  secondary: {
    contained: 'focus:ring-indigo-500',
    outlined: 'focus:ring-indigo-500',
    text: 'focus:ring-indigo-500',
  },
  success: {
    contained: 'focus:ring-green-600',
    outlined: 'focus:ring-green-600',
    text: 'focus:ring-green-600',
  },
  danger: {
    contained: 'focus:ring-red-700',
    outlined: 'focus:ring-red-700',
    text: 'focus:ring-red-700',
  },
  warning: {
    contained: 'focus:ring-yellow-500',
    outlined: 'focus:ring-yellow-500 ',
    text: 'focus:ring-yellow-500',
  },
};

type GetButtonClassesProps = {
  color: ButtonColor;
  disabled: boolean;
  fullWidth: boolean;
  size: ButtonSize;
  variant: ButtonVariant;
  rounded: boolean;
};

export const getButtonClasses = ({
  color,
  disabled,
  fullWidth,
  size,
  variant,
  rounded,
}: GetButtonClassesProps) => {
  const baseClasses = 'flex gap-2';
  const disabledClasses = 'cursor-not-allowed opacity-50';
  const fullWidthClasses = 'w-full justify-center';
  const sizeClasses = classNames(sizeClassesMap[size], {
    [roundedSizeClassesMap[size]]: rounded,
  });
  const colorClasses = colorVariantClassesMap[color][variant];
  const hoverClasses = hoverColorVariantClassesMap[color][variant];

  const focusClasses = classNames(
    'focus:ring-2 focus:ring-offset-2 focus:ring-offset-white',
    focusColorVariantClassesMap[color][variant]
  );

  const buttonClasses = twMerge(
    classNames(baseClasses, colorClasses, focusClasses, hoverClasses, sizeClasses, {
      [disabledClasses]: disabled,
      [fullWidthClasses]: fullWidth,
    })
  );

  return {
    buttonClasses,
  };
};
