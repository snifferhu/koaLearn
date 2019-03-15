const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')()
const app = new Koa()

// 记录执行时间
app.use(async (ctx, next) => {
    let stime = new Date().getTime()
    await next()
    let etime = new Date().getTime()
    // ctx.response.type = 'text/html'
    // ctx.response.body = '<h1>Hello World</h1>'
    console.log(`请求地址：${ctx.path},响应时间：${etime - stime}ms`)
})

app.use(async (ctx, next) => {
    console.log('中间件1 doSoming')
    await next()
    console.log('中间件1 end')
})

app.use(async (ctx, next) => {
    console.log('中间件2 doSoming')
    await next()
    console.log('中间件2 end')
})

app.use(async (ctx, next) => {
    console.log('中间件3 doSoming')
    await next()
    console.log('中间件3 end')
})

// 添加路由
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
})

router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>'
})

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>'
})

// 调用路由中间件
app.use(router.routes())

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})