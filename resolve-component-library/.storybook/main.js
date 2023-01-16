module.exports = {
  core: { builder: '@storybook/builder-vite' },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-jsx',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    'storybook-addon-pseudo-states',
    '@storybook/addon-a11y',
    '@geometricpanda/storybook-addon-badges',
  ],
};
