import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { LinkColor, LinkUnderline } from './link-config';

const themeLinkClasses: Record<LinkColor, string> = {
  primary: 'leading-5 font-medium text-indigo-600',
  secondary: 'leading-5 font-medium text-gray-700',
  success: 'leading-5 font-medium text-green-700',
  danger: 'leading-5 font-medium text-red-700',
  warning: 'leading-5 font-medium text-yellow-700',
  white: 'leading-5 font-medium text-white',
};

const hoverLinkClasses: Record<LinkColor, string> = {
  primary: 'hover:text-indigo-400 ',
  secondary: 'hover:text-gray-400',
  success: 'hover:text-green-500',
  danger: 'hover:text-red-400',
  warning: 'hover:text-yellow-500',
  white: 'hover:text-indigo-300',
};

const focusLinkClasses: Record<LinkColor, string> = {
  primary: 'focus:text-indigo-400 ',
  secondary: 'focus:text-gray-400',
  success: 'focus:text-green-500',
  danger: 'focus:text-red-400',
  warning: 'focus:text-yellow-500',
  white: 'focus:text-indigo-300',
};

export type GetLinkClassesProps = {
  disabled: boolean;
  color: LinkColor;
  underline?: LinkUnderline;
};

export const getLinkClasses = ({ disabled, color, underline }: GetLinkClassesProps) => {
  const disabledClasses = 'cursor-not-allowed opacity-30 pointer-events-none';
  const themeClasses = themeLinkClasses[color];
  const hoverClasses = hoverLinkClasses[color];
  const focusClasses = focusLinkClasses[color];
  const linkClasses = twMerge(
    classNames('flex items-center gap-x-1.5', themeClasses, hoverClasses, focusClasses, {
      [disabledClasses]: disabled,
      underline: underline === 'solid',
    })
  );

  return { linkClasses };
};
