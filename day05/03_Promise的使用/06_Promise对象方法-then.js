// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));
/* 
 {
  constructor: {
    value: [Function: Promise],
    writable: true,
    enumerable: false,
    configurable: true
  },
  then: {
    value: [Function: then],
    writable: true,
    enumerable: false,
    configurable: true
  },
  catch: {
    value: [Function: catch],
    writable: true,
    enumerable: false,
    configurable: true
  },
  finally: {
    value: [Function: finally],
    writable: true,
    enumerable: false,
    configurable: true
  },
  [Symbol(Symbol.toStringTag)]: {
    value: 'Promise',
    writable: false,
    enumerable: false,
    configurable: true
  }
}
*/
const promise = new Promise((resolve,reject) => {
  resolve("lalacdf")
})

// 1.同一个Promise可以被多次调用then方法
// 当我们的resolve方法被调用时，所有的then方法传入的回调函数都会被调用
// promise.then(res => {
//   console.log("res1:",res);
// })

// promise.then(res => {
//   console.log("res2:",res);
// })

// promise.then(res => {
//   console.log("res3:",res);
// })
// 2.then方法传入的"回调函数可以有返回值
//  then方法本身也是有返回值的，它的返回值时Promise


// 1> 如果我们返回的是一个普通值(数值/字符串/普通对象/undefined), 
    //那么这个普通的值被作为一个新的Promise的resolve值
// promise.then(res => {
//   return 'aaa'
// }).then(res => {
//   console.log("res:",res);
//   return "bbbb"
// })

// 2> 如果我们返回的时一个Promise
promise.then(res => {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      // resolve('11111')
      reject("err")
    },3000)
  })
}).then(res => {
  console.log("res:",res);
},err => {
  console.log("err:",err);
})

// 3.如果返回的是一个对象，并且该对象返回了thenable
promise.then(res => {
  return {
    then:function(resolve,reject){
      resolve("123success")
    }
  }
}).then(res => {
  console.log("res:",res);
})