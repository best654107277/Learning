const Koa = require('koa')
const koaStaticCache = require('koa-static-cache')
const koaRouter = require('koa-router')
const koaBody = require('koa-body')

server = new Koa()

let users = [
    {id:1,username:'ShiJian'},
    {id:2,username:'Jian'}
]


server.use(koaStaticCache({
    prefix:"/public",
    dir:'./public',
    gzip:true,
    dynamic:true

}))

const router = new koaRouter()

router.get('/users' ,async (ctx,next)=>{

    let lis = users.map(user=>{
        return `<li>${user.username}</li>`
    }).join("")



    return new Promise((res)=>{
        setTimeout(()=>{
            ctx.body = `<ul>${lis}</ul>`;
            res();
        },3000)
    })

})

server.use(router.routes())

server.listen(8888)

