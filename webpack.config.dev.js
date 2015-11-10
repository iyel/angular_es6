'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build', 'js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: 'src/'
    },
    debug: true,
    devtool: 'sourcemap',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style/useable!css!autoprefixer?browsers=last 5 version!'
            },
            {
                test: /\.scss/,
                loader: 'style!css!autoprefixer?browsers=last 5 version!sass!'
            },
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'src/app/')
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js')
    ]
};
