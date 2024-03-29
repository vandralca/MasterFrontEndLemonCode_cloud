const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const base = require('./base');
const helpers = require('./helpers');

const hotReloadingEntries = ['react-hot-loader/patch'];

module.exports = mergeWithCustomize({
  customizeObject: customizeObject({
    entry: 'prepend',
  }),
})(base, {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  entry: {
    app: hotReloadingEntries,
  },
  output: {
    path: helpers.resolveFromRootPath('dist'),
    filename: '[name].js',
  },
  devServer: {
    inline: true,
    host: 'localhost',
    port: 8080,
    stats: 'minimal',
    hot: true,
  },
  plugins: [
    new Dotenv({
      path: 'dev.env',
    }),
  ],
});
