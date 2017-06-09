var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: 'source-map',
  // entry: './app/index.js',
  entry: {
    style: [
      path.join(__dirname, '../demo/index.js'),
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      minimize: true,
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // minChunks: Infinity,
      path: path.join(__dirname, '../build'),
      filename: '[name].js',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          publicPath: '',
        }),
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=1000&name=fonts/[name].[ext]',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=1000&name=img/[name].[ext]',
      },
    ],
  },
  resolve: {
    // modulesDirectories: ['demo', 'src', 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
}