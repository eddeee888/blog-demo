/* eslint-disable */
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const webpackMain = require('./webpack.main.js');
const paths = require('./webpack.paths.js');

const devConfig = merge(webpackMain, {
  mode: 'development',
  watch: true,
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: paths.distDevPath,
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin([paths.distDevPath], {
      root: `${paths.distDevPath}/../../`,
      verbose: true,
      dry: false,
    }),
    new HardSourceWebpackPlugin(),
  ],
});

module.exports = devConfig;
