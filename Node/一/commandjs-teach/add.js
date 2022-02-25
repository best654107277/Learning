

// 把ADD 移动到一个单独的文件
const add = (a,b)=>{
    return a+b
}
//导出
// module.exports = add;
exports.add = add;