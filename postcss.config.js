const path = require('path');
const resolver = require('postcss-import-resolver');

const srcDir = path.join(__dirname, './src/');

module.exports = {
  plugins: {
    'postcss-import': {
      resolve: resolver({
        alias: {
          '@assets': path.resolve(srcDir, 'assets'),
        },
      }),
    },
    'postcss-mixins': {},
    'postcss-preset-env': {
      stage: 4,
      browsers: [
        'last 1 version',
      ],
      features: {
        'custom-media-queries': {
          preserve: false,
        },
        'nesting-rules': true,
      },
      preserve: false,
    },
    cssnano: { preset: 'default' },
  },
};
