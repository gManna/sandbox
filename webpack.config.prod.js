"use strict";

var
  path = require('path'),
  webpack = require('webpack'),
  fs = require('fs'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const CLIENT_DIR = path.resolve(__dirname, 'client');
const SERVER_DIR = path.resolve(__dirname, 'server/generated');
const DIST_DIR = path.resolve(__dirname, 'public');

const loaders = [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react']
    }
  }, {
    test: path.resolve(__dirname, "app/vendors/bootstrap"),
    loader: 'imports?jQuery=jquery,$=jquery,this=>window'
  }, {
    test: /\.json$/,
    loader: "json-loader"
  }, {
    test: /\.scss$/,
    exclude: /(node_modules)/,
    // loader: "style!css!sass",
    loader: ExtractTextPlugin.extract('css!sass'),
  }, {
    test: /\.less$/,
    exclude: /(node_modules)/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
  }, {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file?name=public/fonts/[name].[ext]'
  }

];

module.exports = [{
  name: 'client',
  target: 'web',
  entry: './src/client.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.less'],
    alias: {
      'components': './app/components',
      'styles': './app/styles',
      'vendor': path.resolve(__dirname, "app/vendors"),
    }
  },
  module: {
    loaders: loaders
  },
  plugins: [
    new ExtractTextPlugin('client.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'BROWSER': JSON.stringify(true)
      }
    })
  ]
}];
