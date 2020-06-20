const path = require('path');

module.exports = {
    entry: path.join(__dirname, './client/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './public')
    },
    devtool: 'source-map',
    mode:'development',
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/, 
            },
        ],
    },
};