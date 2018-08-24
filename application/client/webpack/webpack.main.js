/* eslint-disable */
const paths = require('./webpack.paths.js');
const publicPath = paths.servedPath;

module.exports = {
  devtool: 'source-map',

  entry: {
    vendor: [
      'prop-types',
      'react',
      'react-dom',
    ],
    home: `${paths.srcPath}/pages/home/index.js`,
    blog: `${paths.srcPath}/pages/blog/index.js`
  },

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },

  optimization: {
    providedExports: true,
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'initial',
          name: 'common',
          minChunks: 5 ,
        }, 
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
