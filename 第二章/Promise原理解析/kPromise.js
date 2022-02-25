export default class KPromise{
    constructor(handle) {

        this['[[PromiseState]]'] = 'pending'
        this['[[PromiseResult]]'] = undefined;
        this.resolveQueue = [];
        this.rejectQueue = [];
        handle(this.#resolve.bind(this),this.#reject.bind(this))
    }
    #resolve(val){
        this['[[PromiseState]]'] = 'fulfilled';
        this['[[PromiseResult]]'] = val;
        const run = ()=>{
            // this.resolveQueue(val)
            let cb;
            while(cb = this.resolveQueue.shift()){
                cb && cb(val);
            }
        }
        // setTimeout(run);

        let ob = new MutationObserver(run)
        ob.observe(document.body,{
            attributes:true
        })
        document.body.setAttribute('kkb','value')
    }
    #reject(err){
        this['[[PromiseState]]'] = 'rejected';
        this['[[PromiseResult]]'] = err;
        const run = ()=>{
            // this.rejectQueue(err)
            let cb;
            while(cb = this.rejectQueue.shift()){
                cb && cb(err);
            }
        }
        // setTimeout(run);
        let ob = new MutationObserver(run)
        ob.observe(document.body,{
            attributes:true
        })
        document.body.setAttribute('kkb','value')


    }
    then(onResolved,onRejected){
        // this.resolveFn = onResolved;
        // this.rejectFn = onRejected;

        return new KPromise((resolve,reject)=>{
            let resolveFn = (val)=>{
                let res = onResolved && onResolved(val);
                resolve(res);
            }
            this.resolveQueue.push(resolveFn)

            let rejectFn = (err)=>{
                onRejected && onRejected(err);
                reject(err)
            }
            this.rejectQueue.push(rejectFn)

        })


    }
}