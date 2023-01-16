import classNames from 'classnames';
import { ButtonColor, ButtonVariant } from './button-config';

const iconColorVariantClassesMap: Record<
  NonNullable<ButtonColor>,
  Record<NonNullable<ButtonVariant>, string>
> = {
  primary: {
    contained: 'text-white',
    outlined: 'text-indigo-600',
    text: 'text-indigo-600',
  },
  secondary: {
    contained: 'text-gray-600',
    outlined: 'text-gray-600',
    text: 'text-gray-600',
  },
  success: {
    contained: 'text-white',
    outlined: 'text-green-700',
    text: 'text-green-700',
  },
  danger: {
    contained: 'text-white',
    outlined: 'text-red-700',
    text: 'text-red-700',
  },
  warning: {
    contained: 'text-white',
    outlined: 'text-yellow-700',
    text: 'text-yellow-700',
  },
};

type GetIconClassesProps = {
  color: ButtonColor;
  variant: ButtonVariant;
};

export const getIconClasses = ({ color, variant }: GetIconClassesProps) => {
  const iconClasses = classNames('h-full', iconColorVariantClassesMap[color][variant]);

  return { iconClasses };
};
