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
    test: /\.json$/,
    loader: "json-loader"
  }, {
    test: /\.scss$/,
    exclude: /(node_modules)/,
    // loader: "style!css!sass",
    loader: 'style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!sass',
  },{
    test: /\.less$/,
    exclude:/(node_modules)/,
    loader:'style-loader!css-loader!postcss-loader!less-loader'
  },{
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
  devtool: '#inline-source-map',
  debug: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
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
        'APP_ENV': JSON.stringify('browser')
      }
    })
  ]
}, {
  name: 'server',
  target: 'node',
  entry: {
    app: './server.js'
  },
  output: {
    path: SERVER_DIR,
    filename: 'index.js'
  },
  externals: nodeModules,
  resolve: {
    alias: {
      'components': './app/components',
      'styles': './app/styles'
    },
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: loaders
  },
  plugins: [
    new ExtractTextPlugin('server.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        'BROWSER': JSON.stringify(true),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]

}];
