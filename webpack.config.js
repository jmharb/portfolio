const webpackMerge = require('webpack-merge');

function config(env) {
    const options = Object.assign({
        env: 'prod'
    }, env);
    const envConfig = require(`./build-config/webpack.${options.env}`);
    const commonConfig = require('./build-config/webpack.common');
    return webpackMerge(commonConfig, envConfig);
}

module.exports = config;