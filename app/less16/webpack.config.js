const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: './index',
        vendor: ['jquery']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: require.resolve('jquery'),
            loader: 'expose-loader?$'
        }, {
            test: /no-export.js/,
            loader: 'exports-loader?hiddenConst'
        }]
    }
};
