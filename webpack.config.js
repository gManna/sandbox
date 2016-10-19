"use strict";

var
path = require('path'),
webpack = require('webpack'),
fs = require('fs');

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
},
{
  test: /\.json$/,
  loader: "json-loader"
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
    extensions: ['','.js', '.json']
  },
  module: {
    loaders: loaders
  }
},
{
  name: 'server',
  target: 'node',
  entry: {
    app:'./server.js'
  },
  output: {
    path: SERVER_DIR,
    filename: 'index.js'
  },
  externals: nodeModules,
  resolve: {
    extensions: ['','.js', '.json']
  },
  module: {
    loaders: loaders
  }

}];
