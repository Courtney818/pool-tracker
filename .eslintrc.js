module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['off'],
    'no-extraneous-dependencies': ['off'],
    'arrow-parens': ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-plusplus': ['off'],
    'no-alert': ['off'],
    'no-console': ['off'],
    'no-underscore-dangle': ['off'],
    'max-len': ['off'],
    'operator-linebreak': ['off'],
    'vue/no-side-effects-in-computed-properties': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'linebreak-style': ['off'],
    'function-paren-newline': ['off'],
    'nonblock-statement-body-position': ['off'],
    'no-mixed-operators': ['off'],
    'space-before-function-paren': ['off'],
    indent: ['off'],
    curly: ['error', 'multi-or-nest'],
    radix: ['off'],
    'no-param-reassign': ['error', { props: false }],
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { multiline: true, minProperties: 7 },
      },
    ],
    camelcase: ['off'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    _: true,
  },
};
