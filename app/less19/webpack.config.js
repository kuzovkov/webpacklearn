const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');


module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlPlugin({
            title: 'Webpack dev server'
        })
    ]
};
