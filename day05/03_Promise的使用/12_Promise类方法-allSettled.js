// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111)
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222)
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333)
  }, 3000);
})

// allSettled
Promise.allSettled([p1, p2, p3]).then(res => {
  console.log('res', res)
}).catch(err => {
  console.log(err)
})
/* 
 * [
  { status: 'fulfilled', value: 11111 },
  { status: 'rejected', reason: 22222 },
  { status: 'fulfilled', value: 33333 } 
  ] 
 */