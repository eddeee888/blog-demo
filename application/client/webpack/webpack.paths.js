const path = require('path');

const srcPath = path.join(__dirname, './../src');
const distPath = path.join(__dirname, './../../server/web/js/react');
const distDevPath = path.join(__dirname, './../../server/web/js/react');
const webpackPath = path.join(__dirname, '.');

module.exports = {
  srcPath,
  distPath,
  distDevPath,
  webpackPath,
};
