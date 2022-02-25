class Jq{
    constructor(arg) {
        if(typeof arg === 'string'){
            //字符串情况
            // this[0] = document.querySelector(arg);
            let eles = document.querySelectorAll(arg)
            //多个元素保存
            this.#addEles(eles);
        }else if(typeof arg === 'function'){
            //函数
            document.addEventListener('DOMContentLoaded',arg)
        }else{
            //对象
            if(typeof arg.length === "undefined"){
                //一个节点
                this[0] = arg;
                this.length = 1;
            }else{
                //多个节点
                this.#addEles(arg);
            }
        }


    }
    #addEles(eles){
        for(let i = 0; i <eles.length; i++){
            this[i] = eles[i]
        }
        this.length = eles.length;
    }
    click(fn){
        //多个元素绑定
        for (let i = 0; i < this.length; i++) {
            this[i].addEventListener('click',fn)

        }
        // this[0].addEventListener('click',fn)

    }
    on(eventName,fn){
        let eventArr = eventName.split(" ");
        //多层循环
        //多个元素
        for (let i = 0; i < this.length; i++) {
            //多个事件
            for (let j = 0; j < eventArr.length; j++) {
                this[i].addEventListener(eventArr[j],fn)
                
            }
        }
    }
}

function $(arg){
    return new Jq(arg)
    // return {
    //     click(fn){
    //         document.querySelector(arg).onclick = function (){
    //             fn && fn();
    //         }
    //     }
    // }
}