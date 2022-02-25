const {resolve} = require('path')

module.exports = {
    // 打包模式  production 生产环境 | development 开发环境 |
    //          none 无预置模式
    mode:'production',
    //入口文件

    //一对一
    entry:'./index.js',

    //多对一
    // entry:['./index.js','./main.js'],

    //多对多
    // entry:{
    //     index:'./index.js',
    //     abc:'./main.js'
    // },

    //输出
    output:{
        //path输出目录
        path:resolve(__dirname,'./build'),
        //打包文件名
        // filename:'index.js'

        //占位符  多对多的输出方式不能使用写死的方式, 需要使用占位符
        filename:'[name].js'
    },
    //处理loader目录
    resolveLoader: {
        modules:['node_modules',resolve(__dirname,'loaders')]
    },

    //当编译模块时 如果遇到不能解析的模块, 如txt 文件 会找到这个属性下面的rules 去查找对应的解析规则
    module:{
        rules:[
            {   //直接使用txt文本
                //test 对于文件的一个匹配规则  需要安装loaders 下的 raw-loader组件
                // yarn loaders add raw-loader
                test:/\.txt$/,
                use:'raw-loader'
            },
            {
                //直接使用图片
                //arn loaders add file-loader
                test:/\.(gif|png|jpe?g)/,
                use: {
                    //url-loader 多一个limit属性,判断文件小于该值,转换成base64格式
                    loader:'file-loader',
                    options:{
                        name:'[name]_[contenthash].[ext]',
                        //打包后文件所在位置 目录相对于打包文件夹
                        outputPath:'./images',
                        // 相对路径
                        // publicPath:'./build/images'

                        //url-loader 多一个limit属性,判断文件
                        // limit:true
                    }
                }
            },
            {
                test:/\.css$/,
                // use的顺序是 右 -> 左 下 ->上
                use:[
                        "style-loader",
                    {
                    loader:'css-loader',
                    options:{
                        //是否处理url() 括号
                        url:true,

                        //是否处理@import 默认值为true
                        import:true,

                        //是否生成对应sourceMap文件 默认值是false
                        sourceMap:false
                    }
                }
                ]
            },
            {
                test:/\.docx$/,
                loader:'doc-loader'
            }
        ]
    }
}