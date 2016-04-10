var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require("webpack-dev-server");

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'source');


app = {
  entry: APP_DIR + '/jsx/index.jsx',
  output: {
    path: BUILD_DIR + '/js/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
}

module.exports = app