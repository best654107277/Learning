const {resolve} = require('path')

module.exports = {
    // 打包模式  production 生产环境 | development 开发环境 |
    //          none 无预置模式
    mode:'development',
    //入口文件

    //一对一
    // entry:'./index.js',

    //多对一
    // entry:['./index.js','./main.js'],

    //多对多
    entry:{
        index:'./index.js',
        abc:'./main.js'
    },

    //输出
    output:{
        //path输出目录
        path:resolve(__dirname,'./build'),
        //打包文件名
        // filename:'index.js'

        //占位符  多对多的输出方式不能使用写死的方式, 需要使用占位符
        filename:'[name].js'
    }
}