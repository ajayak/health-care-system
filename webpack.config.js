var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  devtool: '#eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'webpack/hot/dev-server',
    './client/app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'}
    ],
    postcss: function () {
      return [autoprefixer, precss];
    }
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
