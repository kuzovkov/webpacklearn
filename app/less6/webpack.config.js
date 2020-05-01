const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        index: './Home',
        shop: './Shop',
        profile: './Profile'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: 'development'
};
