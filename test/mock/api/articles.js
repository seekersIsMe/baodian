const Mock = require('mockjs')
 
// 配置模拟数据：
const article = ctx => {
    ctx.body = Mock.mock({
        code: 0,
        msg: 'ok',
        data: {
            articles: [
                {
                    id: '@integer()',
                    title: '@ctitle(3,6)',
                    date: '@date("yyyy-MM-dd HH:mm:ss")',
                    content: '@cparagraph(5,8)',
                    introduction: '@csentence(30,50)',
                    readNum: '@integer(10, 100)',
                    comNum: '@integer(10, 100)'
                }
            ]
        }
    })
}
  // 返回模拟的数据及接口：
module.exports = (router) => {
    return [
        router.get('/api/article', article),
    ]
}