const Koa = require('koa')
const koaStaticCache = require('koa-static-cache')
const KoaRouter = require('koa-router')

const server = new Koa();
server.use(koaStaticCache({
    prefix:'/public',
    dir:'./public',
    gzip:true,
    dynamic:true
}))

const router = new KoaRouter()

router.get('/users',async(ctx,next)=>{
    ctx.body = [
        {id:1,username:'dahai'},
        {id:2,username:'shijian'}
    ];
});
server.use(router.routes())
server.listen(8888)