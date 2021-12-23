const path = require("path");

module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
    },
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
    },
    devServer: {
        port: 9999, // 监听端口
        open: false, // 启动后，自动打开默认浏览器
        disableHostCheck: true, // 关闭主机检查，使微应用可以被 fetch
    },
};