module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': ['always', 'windows'],
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
  },
};
