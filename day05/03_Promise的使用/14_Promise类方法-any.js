// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(11111)
    reject(1111)
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222)
  }, 500);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(33333)
    reject(3333)
  }, 3000);
})

// any方法
Promise.any([p1, p2, p3]).then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err.errors)
})

/* 

Promise.any() 和 Promise.all() 从返回结果来看，它们 彼此相反 ：

Promise.all() ：任意一个 promise 被 reject ，就会立即被 reject ，并且 reject 的是第一个抛出的错误信息，只有所有的 promise 都是 resolve 时才会 resolve 所有的结果
Promise.any() ：任意一个 promise 被 resolve ，就会立即被 resolve ，并且 resolve 的是第一个正确结果，只有所有的 promise 都 reject 时才会 reject 所有的失败信息
另外，它们又有不同的 重点 ：

Promise.all() 对所有实现都感兴趣。相反的情况（至少一个拒绝）导致拒绝。
Promise.any() 对第一个实现感兴趣。相反的情况（所有拒绝）导致拒绝。
*/

