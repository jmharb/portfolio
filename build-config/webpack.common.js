const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve('./dist')
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
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            templateParameters: {
                title: 'Portfolio'
            }
        })
    ]
};

module.exports = config;