const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    context: __dirname,
    entry: {
        app: './src/index',
        html: './public/index.html'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        host: '0.0.0.0',
        port: 8888
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)?$/,
                use: 'url-loader'
            },
            {
                test: /\.(tsx|ts)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    optimization: {
        minimizer: [new TerserPlugin({})]
    }
}
