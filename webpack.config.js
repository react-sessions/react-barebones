var path = require('path')

module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js', // Compiled bundle filename
        path: path.resolve(__dirname, 'dist'), // Output compile assets here
        publicPath: '/assets' // Path to compiled assets which goes into your HTML files
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'public') // Serve content from this directory
    }
}
