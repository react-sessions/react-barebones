var path = require('path')

module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js' // Compiled bundle filename
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}
