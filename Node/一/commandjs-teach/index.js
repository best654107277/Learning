//导入
// ./  /
// .js || .json || .node
// const add = require('./add')
// console.log(add);
//如果不是文件的话
//尝试看看是不是文件夹
// 1. 找里面的index.js || .json || .node
// 2. package.json 里面的 main 字段
// const sub = require('./sub')
// console.log(sub);

//如果不是./  /开头的话
//加载内置模块   第三方模块
//
// const http = require('http')
// console.log(http);

//第三方模块
// const atest = require('test')

const  lodash = require('lodash')
console.log(lodash);