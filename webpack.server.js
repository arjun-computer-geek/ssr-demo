const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
    mode: 'development',
    target: 'node',
    entry: ['regenerator-runtime/runtime.js', './server.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {
                            target: { browsers: ['last 2 versions'] }
                        }]
                    ]
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]
}