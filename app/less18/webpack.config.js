const path = require('path');


module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.png$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]?[hash]'
            }
        }]
    }
};
