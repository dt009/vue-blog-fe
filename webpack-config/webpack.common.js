/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 16:29:51
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-21 16:08:40
 */

const webpack = require('webpack');
const path = require('path');
const config = require('../config/config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    optimization: {
        runtimeChunk: 'multiple',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    resolve: {
        alias:  {
            comp: path.resolve(__dirname, '../src/component/'),
        },

        extensions: ['.js', '.vue', '.css', '.less', '.png', '.jpg', '.jpeg', '.gif', '.json']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'image/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'iconfont/[name].[ext]'
                }
            },

        ]
    },

    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: config.pageTitle
        }),
        new VueLoaderPlugin(),
    ],
}
