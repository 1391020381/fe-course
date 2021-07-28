const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let commonConfig = {
    entry: '',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        // library: 'hello',
        //libraryTarget: 'umd'
    },
    mode: 'development',
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

function getWebpackConfig(entry) {
    return Object.assign({}, commonConfig, { entry: entry })
}


module.exports = {
    getWebpackConfig
}
