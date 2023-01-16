import 'tailwindcss/tailwind.css';
import { jsxDecorator } from 'storybook-addon-jsx';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters } from '@storybook/react';

export const decorators = [jsxDecorator()];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      order: ['Factories'],
    },
  },
};
