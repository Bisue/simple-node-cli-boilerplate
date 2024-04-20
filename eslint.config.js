// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const globals = require('globals');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'warn',
    },
  }
);
