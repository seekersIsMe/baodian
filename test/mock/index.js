// index.js
const fs = require('fs')
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()  // 集中处理URL，根据不同的URL调用不同的处理函数
const bodyParser = require('koa-bodyparser')  // 解析原始的request请求，把解析的参数绑定到 ctx.request.body中
// 上面的中间件 需要 npm install
 
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())
 
require('./api/articles.js')(router)
 
 
app.listen(3000, function() {
    console.log('\nmock server running, http://localhost:3000')
})