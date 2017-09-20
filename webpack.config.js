/**
 * Created by douxc on 2017/9/20.
 */
/**
 * webpack config
 * Created by xinchao.dou on 2017/5/2.
 */
var path = require('path');
var utils = require('./build/utils')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var vueLoaderConfig = require('./build/vue-loader.conf');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  entry: './src/main',
  output: {
    path: resolve('./dist'),
    publicPath: "../",
    filename: 'components/[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', {loader: 'css-loader', options: {minimize: true, sourceMap: true}}]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        var resource = module.resource;
        // any required modules inside node_modules are extracted to vendor
        return (
          resource &&
          /\.js$/.test(resource) &&
          resource.indexOf(
            resolve('./node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./index.html'),
      inject: true
    }),
    new ExtractTextPlugin({
      filename: './style/index.css'
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: resolve('./static/manifest.json'),
        to: './',
        ignore: ['.js', '.css', '.html']
      }
    ])
  ]
};
