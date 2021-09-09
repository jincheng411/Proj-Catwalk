const webpack = require('webpack');
const path = require('path');
//    client/index.js     client/index.js    /Users/michaelharfenist/RFE5_ImmersiveWork/project-catwalk1/client/index.js
const config = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
};

module.exports = config;