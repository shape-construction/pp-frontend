const colors = require('tailwindcss/colors');

const removeDeprecatedColors = (tailwindColors) => {
  // To remove building warnings
  delete tailwindColors.lightBlue;
  delete tailwindColors.warmGray;
  delete tailwindColors.trueGray;
  delete tailwindColors.coolGray;
  delete tailwindColors.blueGray;

  return tailwindColors;
};

const migrateColor = (tailwindColors) => ({
  /**
   * If you’re using these colors in your project, the simplest way to upgrade is to alias them back to their previous names
   * https://tailwindcss.com/docs/upgrade-guide#renamed-gray-scales
   */
  green: tailwindColors.emerald,
  yellow: tailwindColors.amber,
  purple: tailwindColors.violet,
  gray: tailwindColors.neutral,
});

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '3xs': '0.375rem',
        '2xs': '0.5rem',
      },
      gridTemplateColumns: {
        'span-first': 'auto min-content',
      },
      spacing: {
        '50vh': '50vh',
        '80vh': '80vh',
      },
      zIndex: {
        navigation: 10,
        popover: 20,
        drawer: 30,
        modal: 40,
      },
      translate: {
        '1/5': '20%',
      },
    },
    colors: {
      ...migrateColor(colors),
      ...removeDeprecatedColors(colors),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
  darkMode: 'class',
};
