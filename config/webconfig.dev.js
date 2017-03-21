const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, '..', './src'),
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: resolve(__dirname, '..', 'src', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
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
  devServer: {
    port: 8080,
    historyApiFallback: true,
    hot: true,
    contentBase: resolve(__dirname, '..', 'dist'),
    publicPath: '/'
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '..', 'dist'),
    publicPath: '/'
  }
};
