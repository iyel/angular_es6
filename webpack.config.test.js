'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/test/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'src/test/'),
        filename: 'test.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname, 'src/app/')
        ]
    }
};
