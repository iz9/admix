const fs = require('fs')
const path = require('path')
const config = {
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: ['./.*.js', './*.config.js'],
      parser: 'esprima',
      extends: ['eslint:recommended'],
      env: { commonjs: true, es2021: true, node: true },
      parserOptions: { ecmaVersion: 12, sourceType: 'script' },
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
    {
      files: ['./plop/**/*.ts'],
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
  ],
}
/* ***** Add prettier options **** */ const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)
config.rules['prettier/prettier'] = ['error', prettierOptions]
module.exports = config
