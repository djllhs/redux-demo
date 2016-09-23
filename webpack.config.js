<<<<<<< HEAD
/**
 * Created by 代佳玲 on 2016/9/22.
 */
const path = require("path"),
       webpack = require("webpack");

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: [
        "webpack-hot-middleware/client",
        "./index"
    ],
    output: {
        path: path.join(__dirname,'dist'),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
       /* new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })*/
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["babel"],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
    watch: true
=======
/**
 * Created by 代佳玲 on 2016/9/22.
 */
const path = require("path"),
       webpack = require("webpack");

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: [
        "webpack-hot-middleware/client",
        "./index"
    ],
    output: {
        path: path.join(__dirname,'dist'),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
       /* new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })*/
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["babel"],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
    watch: true
>>>>>>> d30ffba178deb1512202cc05bac17e78c19dff18
}