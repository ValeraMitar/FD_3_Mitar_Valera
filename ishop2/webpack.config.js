const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename: "bundle.css"
});

module.exports = {
    entry: "./ishop.js",// current file of application
    output: {
        path: __dirname,// way to catalog output files
        filename: "bundle.js"  // the name of creation file
    },
    devtool: 'source-map',
    module: {
        rules: [
            {

                test: /\.jsx?$/, // what file need to handle
                exclude: /node_modules/, //what files need to miss
                use: {
                    loader: ["babel-loader"]
                }
            },
            {
                test: /\.json$/,
                use: {
                    loader: ["json"]
                }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    loader: ["css-loader"]
                })
            }
        ]
    },
}