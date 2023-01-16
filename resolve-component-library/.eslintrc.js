module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
    'plugin:eslint-comments/recommended',
    'airbnb-typescript',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'sort-exports'],
  ignorePatterns: ['core/**/*', 'jest.setup.ts'],
  rules: {
    'prettier/prettier': ['error'],
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': ['error', { allow: ['_destroy'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stories.tsx', '**/*.spec.{ts,tsx}'] },
    ],
    'import/extensions': ['error', 'never', { css: 'ignorePackages' }],
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['src/index.ts'],
      rules: {
        'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
      },
    },
  ],
};
