var postcssImport = require('postcss-import');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

module.exports = (webpack) => [
  postcssImport({ addDependencyTo: webpack }),
  precss(),
  autoprefixer({ browsers: ['last 2 versions'] }),
  cssnano({ zindex: false }),
];
