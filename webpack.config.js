const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/public/main.ts',  // Đường dẫn tới file entry TypeScript của bạn
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',  // Tên file đầu ra
        path: path.resolve(__dirname, 'dist/public'),  // Thư mục đầu ra
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',  // Đường dẫn tới template HTML gốc
            filename: 'index.html',  // Tên file đầu ra
        }),
    ],
    mode: 'development',
};
