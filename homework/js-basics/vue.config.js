const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
    productionSourceMap: process.env.NODE_ENV === 'dev',
    configureWebpack: {
        devtool: process.env.NODE_ENV === 'dev' ? 'source-map' : undefined,
        plugins: [
            new MonacoWebpackPlugin({
                languages: ['javascript', 'css', 'html', 'typescript', 'json']
            })
        ]
    }
}