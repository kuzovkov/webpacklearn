const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        shop: './shop',
        profile: './profile',
        vendor: ['jquery', 'lodash']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    mode: 'development',

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test: path.resolve(__dirname, "node_modules"),
                    name: "vendor",
                    enforce: true
                },
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    name: "commons",
                    test: /common/,
                    enforce: true
                }
            }
        }
    }
};
