//引入内置标准库
const http = require("http")
//引入url库
// const url = require("url")

//创建server服务
const server = http.createServer()

//注册服务
server.on("request",(req,res)=>{
    console.log('有客户端请求')
    const urlObj = new URL('http://localhost:8888'+req.url)
    // res.write("hello")
    // res.end()
    console.log(urlObj);
    if(urlObj.pathname == '/1'){
        res.write('hello')
        console.log('请求页面1')
    }else if(urlObj.pathname == '/2'){
        res.write('world')
        console.log('请求页面2')
    }
    res.end()
})

//监听
server.listen(8888,'0.0.0.0',()=>{
    console.log('服务启动')
})