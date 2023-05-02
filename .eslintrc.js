module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'airbnb-base',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    'react',
    '@next/eslint-plugin-next',
    '@typescript-eslint',
    // 'prettier'
  ],
  rules: {
    'max-len': ['off'],
    strict: ['warn', 'safe'],

    'import/no-unresolved': 'off',

    /** typescript rules */
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    '@typescript-eslint/indent': ['error', 2],
    // @see https://github.com/ikyucom/restaurant2/issues/2305
    '@typescript-eslint/no-namespace': ['warn'],
    // JavaScript に対してもエラーが出てしまい混乱するだけなので判定基準が強化されるまで警告に留める。
    '@typescript-eslint/no-var-requires': ['warn'],
    '@typescript-eslint/ban-ts-comment': ['warn'],

    // webpack エイリアスで警告を出さない
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: false, // devDependenciesのimportを禁止
        optionalDependencies: false,
      },
    ],
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'operator-linebreak': 'off',
    'class-methods-use-this': 'off',

    /** airbnb rules */
    'max-classes-per-file': ['off'],

    /** import rules */
    // 拡張子指定対象
    'import/extensions': [
      'warn',
      {
        js: 'never',
        json: 'always',
        ts: 'never',
        tsx: 'always',
        css: 'always',
      },
    ],

    'import/prefer-default-export': 0,
    'no-alert': 'off',
    'no-console': 'off',
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
    camelcase: 0,
    'react/self-closing-comp': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', 'jsx', 'ts', 'tsx'] }],
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-no-comment-textnodes': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 0,
    '@next/next/no-img-element': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    'linebreak-style': ['error', 'unix'],
    // semi: ['error', 'never'],
    // 'prettier/prettier': ['error', { "endOfLine": "off" }, { usePrettierrc: true }],
  },
  settings: {
    'import/resolver': 'webpack',
  },
}
