const path = require('path');

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'src'),
    entry: './index',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};
