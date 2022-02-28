// request.js
function requestData(url) {
  // 异步请求的代码会加入到executor中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      resolve(url)
    }, 1000)
  })
}

// 需求
// 1>url:xs -> res:xs
// 2>url:res + 'aaa' -> res:xsaaa
// 3.url:res + "bbb" -> res:xsaaabbb

// 1.第一种方案：多次回调
// 回调地狱
// requestData("xs").then(res => {
//   requestData(res + "aaa").then(res => {
//     requestData(res + "bbb").then(res => {
//       console.log(res);
//     })
//   })
// })

// 2、第二种方案：Promise种then的返回值来解决
// requestData("xs").then(res => {
//   return requestData(res + "aaa").then(res => {
//     return requestData(res + "bbb").then(res => {
//       console.log(res);
//     })
//   })
// })

// 3.第三种方案:Promise + generator实现
function* getData() {
  const res1 = yield requestData("xs")
  const res2 = yield requestData(res1 + "aaa")
  const res3 = yield requestData(res2 + "bbb")
  console.log(res3);
}

// function* getDepartment() {
//   const user = yield requestData("id")
//   const department = yield requestData(user.departmentId)
// }

// 1.手动执行生成器函数
// const generator = getData()
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then(res => {
//       generator.next(res)
//     })
//   })
// })

// 2、自己封装一个自动执行的函数
// function execGenerator(genFn) {
//   const generator = genFn()
//   function exec(res) {
//     const result = generator.next(res)
//     if (result.done) {
//       return result.value
//     }
//     result.value.then(res => {
//       exec(res)
//     })
//   }
//   exec()
// }

// execGenerator(getData)

// 3.第三方包co自动执行
// TJ: co / n(nvm) / commander(coderwhy / vue cli) / express / koa(egg)
// const co = require('co')
// co(getData)

// 4.第四种方案：async/await
async function getData() {
  const res1 = await requestData("xs")
  const res2 = await requestData(res1 + "aaa")
  const res3 = await requestData(res2 + "bbb")
  const res4 = await requestData(res3 + "ccc")
  console.log(res4);
}

getData()