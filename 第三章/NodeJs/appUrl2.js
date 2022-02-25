//引入内置标准库
const http = require("http");

//引入nunjucks
const nunjucks = require('../node_modules/nunjucks/browser/nunjucks')

//引入fs文件操作库
const fs = require("fs");

//创建server服务
const server = http.createServer()

let users =[
    {id:1,username:'大海'},
    {id:2,username:'紫薯'},
    {id:3,username:'小蕊'},
]

//路由表
const routesMap = new Map();
routesMap.set('/',async (req,res)=>{
    res.setHeader('Content-Type','text/html;charset="utf-8"');
    res.end('首页')
})
routesMap.set('/list',async (req,res)=>{
    res.setHeader('Content-Type','text/html;charset="utf-8"');
//     res.end(`
//     <ul>
//     ${users.map(u=>{
//         return `<li>${u.username}</li>`
//     }).join('')}
// </ul>
//     `)
//     let tplData = {}
//     tplData.users = users.map(u=>{return `<li>${u.username}</li>`}).join('');
//     let tpl = fs.readFileSync('./template/list.tpl.html').toString();
//     tpl = tpl.replace(/\{\{(\w+)\}\}/gi,( $0, $1)=>{
//         console.log($0+'----'+$1)
//         return tplData[$1];
//     })
//     let str = '<h1>{{title}}</h1>'
//     let tpl = nunjucks.renderString(str,{
//         title:'开课吧'
//     })
    let tpl = fs.readFileSync('./template/list.html').toString();
    res.end(nunjucks.renderString(tpl,{
        users
    }))

})


server.on('request',async (req,res)=>{
    //1.获取当前客户端请求url
    let url = req.url;

    if(url.startsWith('/public')){
        //静态资源
        //静态文件路由
        let content = fs.readFileSync(`.${url}`).toString();
        //把读取到的资源文件内容作为响应内容返回给客户端
        res.end(content);
    }
    //处理动态资源
    //根据当前的pathname 指定routeMap 中对应的函数
    let routeHandler = routesMap.get(url)
    if(routeHandler){
        await routeHandler(req,res)
    }else{
        res.statusCode = 302;
        res.setHeader('Location','/')
        res.end()
    }
    //2.解析 url 字符串


    //3.获取 url 中 path 部分的值

    //4.根据 path 读取我们存放在硬盘中对应的资源文件
    // let content = fs.readFileSync('./public/1.html').toString()  //写死了





})

//监听
server.listen(8888,'0.0.0.0',()=>{
    console.log('服务启动1')
})
