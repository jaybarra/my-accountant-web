const debug = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const path = require("path");

module.exports = {
    devtool: debug ? "inline-sourcemap" : false,
    devServer: {
        historyApiFallback: true
    },
    entry: {
        app: "./src/js/index.js",
        vendor: "./src/js/vendor.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "src")

    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: ["react-html-attrs", "transform-decorators-legacy", "transform-class-properties"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
    ]
};
