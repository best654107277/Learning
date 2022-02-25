const Koa = require('koa')
const KoaRouter = require('koa-router')

let users = [
    {id:1,username:'dahai'},
    {id:2,username:'shijian'}
]

const server = new Koa()

const router = new KoaRouter()
let whiteList = [
    'http://localhost:7777',
    'http://localhost:9999'
]


router.get('/users',async(ctx,next)=>{

        if(whiteList.includes(ctx.headers.origin)){

        ctx.set('Access-Control-Allow-Origin',ctx.headers.origin)
        }

        ctx.body = users
})

server.use(router.routes())

server.listen(8888)
