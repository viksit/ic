const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: resolve(__dirname, '..', 'src'),
  entry: './index.js',
  plugins: [
    new CleanWebpackPlugin(['dist'], {root: resolve(__dirname, '..')}),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: resolve(__dirname, '..', 'src', 'index.html')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        join_vars: true,
        if_return: true
      },
      output: {
        comments: false
      }
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: 'url-loader?limit=10000&name=[path][name].[ext]'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '..', 'dist'),
    publicPath: ''
  }
};
