const router = require('koa-router')()

module.exports  = function home(app){
    router.get('/home', async(ctx,next)=>{
        ctx.response.title = 'Home';
        ctx.response.body = '<h1>Home Page</h1>';
    });
    app.use(router.routes());
};