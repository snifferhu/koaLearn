// const router = require('koa-router')()

// module.exports  = function home(app){
//     router.get('/home', async(ctx,next)=>{
//         ctx.response.title = 'Home';
//         ctx.response.body = '<h1>Home Page</h1>';
//     });
//     app.use(router.routes());
// };
const router = require('koa-router')();
const HomeController = require('./controller/home');

module.exports = (app) => {
    router.get('/', HomeController.index)

    router.get('/home', HomeController.home)

    router.get('/home/:id/:name', HomeController.homeParams)

    router.get('/user', HomeController.login)

    router.post('/user/register', HomeController.register)

    app.use(router.routes())
        .use(router.allowedMethods())
}
