const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: './init.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new CaseSensitivePathsPlugin()
    ]
};