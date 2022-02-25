const Koa = require('koa')
const koaStaticCache = require('koa-static-cache')
const KoaRouter = require('koa-router')
const koaBody = require('koa-body')

const app = new Koa();

app.use(koaStaticCache({
    prefix:'/public',
    dir:'./public',
    gzip:true,
    dynamics:true
}))
