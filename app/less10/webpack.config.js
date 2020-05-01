const path = require('path');
const webpack = require('webpack');


module.exports = {

    context: path.join(__dirname, 'src'),
    entry: './init.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('0.0.2'),
            PRODUCTION: false,
            HTML5_SUPPORT: true
        }),
        new webpack.ProvidePlugin({
            myJquery: 'jquery'
        })
    ]
};
