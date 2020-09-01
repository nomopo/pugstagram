const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { PassThrough } = require('stream');

module.exports = {
    entry: './src/index.js',
    output:  {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*','.mjs','.js','.svelte']
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.svelte?$/,
            exclude: /node-modules/,
            use: {
                loader: 'svelte-loader'
            }
        }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}