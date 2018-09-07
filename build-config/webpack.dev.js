const config = {
    devtool: 'source-map',
    devServer: {
        open: true,
        compress: false,
        https: true,
        host: '0.0.0.0', // Allows access by local IP from VM
        disableHostCheck: true, // Allows access by local IP from VM
        public: `jmathewharb.com:${process.env.npm_package_config_port}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
    }
};

module.exports = config;
