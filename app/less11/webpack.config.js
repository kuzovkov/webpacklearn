const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        shop: './shop'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Application title 01',
            hash: true,
            template: './template.html'
        })
    ]
};
