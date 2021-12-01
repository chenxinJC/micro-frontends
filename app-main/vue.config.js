const path = require('path')
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
    }
}