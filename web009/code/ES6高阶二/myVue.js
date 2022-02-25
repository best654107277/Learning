class Vue{
    constructor(options){
        this.$options = options;
        this.compile()
    }
    compile(){
        let ele = document.querySelector(this.$options.el);
        this.compileNodes(ele)
    }
    compileNodes(ele){
        let childNodes = ele.childNodes;
        console.log(childNodes);
        childNodes.forEach(node=>{
            if(node.nodeType ===1){
                //元素节点
                if(node.childNodes.length>0){
                    this.compileNodes(node)
                }

            }else if(node.nodeType===3){
                //文本节点;
                let reg =/\{\{\s*([^\{\}\s]+)\s*\}\}/g;
                let textContent = node.textContent;
                console.log('??',textContent)
                if(reg.test(textContent)){
                    console.log('有大括号表达式')
                    //获取数据的下标
                    let $1 = RegExp.$1;
                    let rData = this.$options.data[$1];
                    //将数据渲染到视图
                    node.textContent = node.textContent.replace(reg,rData)
                }
            }
        })
    }

}