/**
 * webpack config
 * Created by xinchao.dou on 2017/5/2.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/components/index',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'components/[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-3'],
                    plugins: ['transform-vue-jsx']
                }
            }
        },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader']
                })
            }]
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
                        path.join(__dirname, './node_modules')
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
            filename: 'newTab.html',
            template: path.join(__dirname, './src/newTab.html'),
            inject: true
        }),
        new ExtractTextPlugin({
            filename: './style/newTab.css'
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/manifest.json'),
                to: './',
                ignore: ['.js', '.css', '.html']
            }
        ])
    ]
};