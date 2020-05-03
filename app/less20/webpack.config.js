const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');


module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlPlugin({
            title: 'Webpack dev server'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        hot: true
    }
};
