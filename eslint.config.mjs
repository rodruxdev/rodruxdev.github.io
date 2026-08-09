import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import typescript from 'typescript-eslint';

export default [
  {
    ignores: ['archive/**', 'dist/**', 'node_modules/**', '.astro/**'],
  },
  eslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  ...typescript.configs.recommended.map((config) => ({
    ...config,
    files: config.files ?? ['**/*.{ts,tsx,mts,cts}'],
  })),
  {
    files: ['**/*.{js,mjs,ts,tsx,astro}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  prettier,
];
