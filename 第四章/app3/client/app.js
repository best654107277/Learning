const Koa = require('koa')
const koaStaticCache = require('koa-static-cache')

const server = new Koa();
server.use(koaStaticCache({
    prefix:'/public',
    dir:'./public',
    gzip:true,
    dynamic:true
}))
server.listen(7777)