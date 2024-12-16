import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Répertoire de base pour résoudre les configs étendues
  recommendedConfig: { parserOptions: { ecmaVersion: 2020 } }, // Optionnel
});

export default [
  ...compat.extends(
    'next/core-web-vitals',
    'next',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ),
];
