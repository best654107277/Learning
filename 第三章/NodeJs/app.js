//引入node内置的标准库 http 类实现基于网络的编程
const http = require("http");

//使用http.Server 类来创建一个http Server对象
//const server = new http.Server();
const server = http.createServer()//这个方法和上面是一样的  在Server类内部返回了Server方法

//注册 request 时间回调函数,当有客户端连接请求被监听到的时候执行回调
server.on('request',(req,res)=>{
    console.log('有客户端请求')
    res.write('hello')
    res.end()
})
//指定当前Server 需要监听的主机
//listen 与当前机器的 网卡进行了一个交互
server.listen(8888,'0.0.0.0',()=>{
console.log('服务启动成功')

}) //参数1:端口,参数2:ip
