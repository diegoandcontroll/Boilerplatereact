module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'eslint-disable no-console': 'off',
    'eslint-disable consistent-return': 'off',
    'eslint-disable linebreak-style': 'off',
    'eslint-disable import/no-extraneous-dependencies': 'off',
    'eslint-disable-next-line import/no-extraneous-dependencies': 'off',
    'eslint-disable react/jsx-filename-extension': 'off',
    'eslint-disable global-require': 'off',
  },
};
