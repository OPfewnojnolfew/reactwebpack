// var path = require('path');
// var node_modules_dir = path.resolve(__dirname, 'node_modules');

// var config = {
//     entry: path.resolve(__dirname, 'assets/js/index.js'),
//     output: {
//         path: path.resolve(__dirname, 'prod', 'css'), //主要是为了使fonts在样式目录下
//         // filename: '../js/[name].js'
//         filename: 'test.js'
//     },
//     module: {
//         loaders: [{
//             test: /\.js?$/,
//             exclude: [node_modules_dir],
//             loader: 'babel'
//         }, {
//             test: /\.css$/,
//             loader: "style!css"
//         }]
//     }
// };

// module.exports = config;

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    // entry: {
    //     p1: "./assets/js/index1.js",
    //     p2: "./assets/js/index.js"
    // },
    entry: ['./assets/js/index.js'],
    output: {
        path: __dirname,
        filename: "test.js"
    },
    plugins: [new CommonsChunkPlugin("init.js", ["./assets/js/index.js"])],
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }]
    }
};
