const path = require('path')
const webpack = require('webpack')
const demoVueTemplate = require('./vueComponents/demo.vue')
const getWebpackConfig = require('./webpack.config')
const entryPath = './vueComponents' + demoVueTemplate
console.log('entryPath:', entryPath)
const compiler = webpack(getWebpackConfig(entryPath))

compiler.run((err, stats) => {
    console.log('run', err, stats)
})
compiler.close(closeErr => {
    console.log('closeErr', closeErr)
})

