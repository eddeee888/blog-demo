/* eslint-disable */
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackMain = require('./webpack.main.js');
const paths = require('./webpack.paths.js');

const prodConfig = merge(webpackMain, {
  mode: 'production',
  output: {
    path: paths.distPath,
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin([paths.distPath], {
      root: `${paths.distPath}/../../`,
      verbose: true,
      dry: false,
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          output: { comments: false },
          compress: {
            conditionals: true,
            dead_code: true,
            evaluate: true,
            unused: true,
          },
        },
      }),
    ],
  },
});

module.exports = prodConfig;
