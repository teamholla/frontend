module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: ['standard', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json'
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error'
    }
  }
  