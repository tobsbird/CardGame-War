module.exports = env => {
    return {
        mode: 'development',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
    }
}