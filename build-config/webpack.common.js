const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        vendor: ['normalize.css'],
        index: './src/index.js'
    },
    output: {
        path: path.resolve('./dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                },
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modlues|dist)/,
                loader: 'babel-loader',
                options: { babelrc: true }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false,
                            minimize: true

                        }
                    },
                        {
                            loader: 'postcss-loader', // postcss loader so we can use autoprefixer
                            options: {
                                config: {
                                    path: 'postcss.config.js'
                                }
                            }
                        }]
                })
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: 'public/', to: './'}]),
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            templateParameters: {
                title: 'Portfolio'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'project-1.html',
            template: 'src/project-1.html',
            templateParameters: {
                title: 'Project 1'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'project-2.html',
            template: 'src/project-2.html',
            templateParameters: {
                title: 'Project 2'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'project-3.html',
            template: 'src/project-3.html',
            templateParameters: {
                title: 'Project 3'
            }
        })
    ]
};

module.exports = config;