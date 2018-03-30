const path = require('path');

module.exports = {
    entry: './src/client/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'script.min.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['env']
            }
        }]
    }
};
