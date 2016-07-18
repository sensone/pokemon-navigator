var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: "./src/js/app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.rt$/,
        loaders: ['babel-loader?presets[]=es2015', 'react-templates-loader?modules=es6']
      },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.png$/i, loader:'file?name=[path][name].[ext]'},
    ]
  },
  output: {
    path: __dirname + "/",
    filename: "app.min.js",
    publicPath: '/'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    proxy: {
      '/get-pokemons' : '../api/data.json',
    }
  }
};
