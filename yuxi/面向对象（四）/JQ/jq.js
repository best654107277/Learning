class Jq{
    click(fn){
        console.log('click....')
    }
}

function $(arg){
    console.log(arg);
    return new Jq();
}