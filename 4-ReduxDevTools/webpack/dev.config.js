var path = require('path');
var webpack = require('webpack');
var postcss = require('./postcss');

process.env.BABEL_ENV = 'development';

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: [
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://localhost:8080`,
    './src/client.jsx',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel', 'eslint']},
      { test: /\.scss$/, loader: 'style!css?modules&importLoaders=1&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss' },
    ],
  },
  postcss,
  progress: true,
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.json', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('development') },
    }),
  ],
};
