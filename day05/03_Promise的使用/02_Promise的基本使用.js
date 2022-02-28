function foo() {
  // Promist
  return new Promise((resolve, reject) => {
    resolve("success message")
    reject("success message")
  })
}

// main.js
const fooPromise = foo()
// then方法传入的回调函数：凉饿回调函数
// 1> 第一个回调函数，会在Promise执行resolve函数时，被回调
// 2> 第二个回调函数，会在Promise执行reject函数时，被回调
fooPromise.then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})

// catch方法传入的回调函数，会在Promise执行reject函数时，被回调
fooPromise.catch(() => {

})

// 传入的这个函数，被称之为exexutor
// 》resolve:回调函数，在成功时，回调resoleve函数
// 》reject：回调函数，在失败时，回调reject函数

const promise = new Promise((resolve, reject) => {
  console.log("promise传入的函数执行了");
  resolve()
})

promise.then(() => {
  console.log("111");
})
promise.catch(() => {

})

// 钩子函数: hook
// function foo(fn) {
//   fn()
// }

// foo(() => {

// })
