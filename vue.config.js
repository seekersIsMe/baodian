module.exports = {
    publicPath: "/",
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: false, // 关闭eslint检查
    // 指定生成的 index.html 的输出路径 (相对于 outputDir),也可以是一个绝对路径
    indexPath: "index.html",

    // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    filenameHashing: true,
    // 项目根目录下的 vue.config.js 的 devServe 中
    devServer: {
        proxy: {
                '/api': {
                  target: 'http://localhost:3000',
                  changeOrigin: true,
                  https: false,
                //   pathRewrite: {
                //     '^/api': ''
                //   }
                }
              },
        before: () => {
            var chokidar = require('chokidar')  // 监听
            var watcher = chokidar.watch('./test/mock/', {
                ignored: /(^|[\/\\])\../,
                persistent: true
            })
            var forkMockServer = function () {
                return require('child_process').fork('./test/mock/index.js')  // 子进程,fork父子通信
            }
            var n = forkMockServer()
    
            watcher.on('change', () => {
                console.log('restart mock server')
                n.kill()
                n = forkMockServer()
            })
    
            process.on('SIGINT', function () {
                n.kill()
                process.exit(0)
            })
        }
    }
   
}