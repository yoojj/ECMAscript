const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');



module.exports = {
    devServer: {
        historyApiFallback: true,
        overlay: true,
        inline: true,
        hot: true,
        host: 'localhost',
        port: 8000,
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },

    devtool: 'eval-cheap-source-map',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),

        new HtmlWebPackPlugin({
            template: './public/index.html',
        }),
    ],

};
