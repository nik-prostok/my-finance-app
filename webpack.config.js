const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: {
        app: './src/index',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        host: "0.0.0.0",
        static: { directory: path.resolve(__dirname, "public") },
    },
    optimization: { minimize: true },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)?$/,
                use: 'asset/resource'
            },
            {
                test: /\.(tsx|ts)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            }
        ]
    }
}
