import { yellow, pink, red, purple, blue, green, gray, black } from 'tailwindcss/colors';

export const colors = [
  'yellow',
  'pink',
  'red',
  'purple',
  'blue',
  'green',
  'gray',
  'black',
] as const;

export type Color = typeof colors[number];

export type ColorConfiguration = {
  [Key in Color]: { background: string; text: string; active: string; color: string };
};

export const configuration: ColorConfiguration = {
  yellow: {
    active: 'ring-yellow-500',
    background: 'bg-yellow-500',
    text: 'text-yellow-500',
    color: yellow['500'],
  },
  pink: {
    active: 'ring-pink-500',
    background: 'bg-pink-500',
    text: 'text-pink-500',
    color: pink['500'],
  },
  red: {
    active: 'ring-red-500',
    background: 'bg-red-500',
    text: 'text-red-500',
    color: red['500'],
  },
  purple: {
    active: 'ring-purple-600',
    background: 'bg-purple-600',
    text: 'text-purple-600',
    color: purple['500'],
  },
  blue: {
    active: 'ring-indigo-400',
    background: 'bg-indigo-400',
    text: 'text-indigo-400',
    color: blue['400'],
  },
  green: {
    active: 'ring-green-500',
    background: 'bg-green-500',
    text: 'text-green-500',
    color: green['500'],
  },
  gray: {
    active: 'ring-gray-200',
    background: 'bg-gray-200',
    text: 'text-gray-400',
    color: gray['200'],
  },
  black: {
    active: 'ring-black',
    background: 'bg-black',
    text: 'text-black',
    color: black,
  },
};
