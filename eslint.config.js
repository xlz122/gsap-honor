import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    'prettier': prettier
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],

    'prettier/prettier': [2],
    // 使用===和!==
    'eqeqeq': [2, 'always'],
    'react-hooks/exhaustive-deps': [0]
  }
});
