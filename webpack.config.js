const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html' // the template for our HTML file
        })
    ],
    devServer: {
        static: './dist', // the folder to serve files from
        open: true // open the browser after the server starts
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }
}