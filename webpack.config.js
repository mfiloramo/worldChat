const { resolve } = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HotModuleReplacementPlugin } = require('webpack');


module.exports = {
  entry: './client/index.js',

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
    clean: true,
  },

  devtool: 'inline-source-map',

  mode: 'development',

  devServer: {
    host: 'localhost',
    port: 8080,
    static: {
      publicPath: '/build',
      directory: resolve(__dirname, 'build'),
    },
    open: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/**': {
        target: 'http://localhost:3035',
        secure: false,
      },
      '/api/**': {
        target: 'http://localhost:3035',
        secure: false,
      },
      '/client/stylesheets/**': {
        target: 'http://localhost:3035',
        secure: false,
      }
    }
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        include: resolve(__dirname, 'client'),
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(svg|webp|ico|png|jpg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'client', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
    new dotenv,
  ],
}