import classnames from 'classnames';

import { InternalProps, THEME } from './Badge.types';

export const dotColors = {
  [THEME.BLUE]: 'text-blue-400',
  [THEME.GREEN]: 'text-green-400',
  [THEME.PINK]: 'text-pink-400',
  [THEME.YELLOW]: 'text-yellow-400',
  [THEME.GRAY]: 'text-gray-400',
  [THEME.TEAL]: 'text-teal-400',
  [THEME.WHITE]: 'text-gray-400',
};

export const removeButtonColors = {
  [THEME.BLUE]:
    'text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-500 focus:text-white',
  [THEME.GREEN]:
    'text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500 focus:text-white',
  [THEME.PINK]:
    'text-pink-400 hover:bg-pink-200 hover:text-pink-500 focus:bg-pink-500 focus:text-white',
  [THEME.YELLOW]:
    'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500 focus:text-white',
  [THEME.GRAY]:
    'text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white',
  [THEME.TEAL]:
    'text-teal-400 hover:bg-teal-200 hover:text-teal-500 focus:bg-teal-500 focus:text-white',
  [THEME.WHITE]:
    'text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white',
};

const colorClassNames = {
  [THEME.BLUE]: 'bg-blue-100 text-blue-800',
  [THEME.GREEN]: 'bg-green-100 text-green-800',
  [THEME.PINK]: 'bg-pink-100 text-pink-800',
  [THEME.YELLOW]: 'bg-yellow-100 text-yellow-800',
  [THEME.GRAY]: 'bg-gray-100 text-gray-800',
  [THEME.TEAL]: 'bg-teal-100 text-teal-800',
  [THEME.WHITE]: 'bg-white text-gray-600  border border-gray-300',
};

export const themePropsShaping = ({ theme }: InternalProps): Partial<InternalProps> => {
  const themeClassNames = classnames(colorClassNames[theme]);

  return { themeClassNames };
};
