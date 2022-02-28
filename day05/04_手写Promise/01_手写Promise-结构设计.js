// ES6 ES2015 
//Promise实现规范 https://promisesaplus.com/

// 定义在Promise的三种状态
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise{
  constructor(executor){
    // 进行执行的前应该是pending状态
    this.status = PROMISE_STATUS_PENDING

    // resolve和reject传递的参数先进行定义
    this.value = undefined
    this.reason = undefined

    const resolve = (value) =>{
      // 当状态为pending时，才进行入resolve,这样是保证resolve,reject,只能调用一个
      if(this.status === PROMISE_STATUS_PENDING){
        // 当进入resolve是，status应该是fulfilled
        this.status = PROMISE_STATUS_FULFILLED
        this.value = value
        console.log("resolve被调用");
      }
    }
    
    const reject = (reason) => {
      if(this.status === PROMISE_STATUS_PENDING){
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
        console.log("reject被调用");
      }
    }
    executor(resolve,reject)
  }
}

const promise = new MyPromise((resolve,reject) => {
  console.log('状态pending');
  resolve('aaaa')
  reject("bbbb")
})

// 结构设计完成，接着实现一个核心的方法,then方法

// promise.then(res => {

// },err => {

// })