const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}