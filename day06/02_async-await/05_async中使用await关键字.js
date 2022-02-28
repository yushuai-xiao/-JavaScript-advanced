// 1.await跟上表达式
function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(111)
      // reject(222)
    }, 2000)
  })
}

// async function foo() {
//   const res1 = await requestData()
//   console.log("后面的代码1", res1);
//   console.log("后面的代码2");
//   console.log("后面的代码3");

//   const res2 = await requestData()
//   console.log("res后面的代码", res2);
// }

// 2.跟上其他的值
async function foo() {
  // const res1 = await 123
  // return res1
  // const res1 = await {
  //   then: function (resolve, rehect) {
  //     resolve("abc")
  //   }
  // }
  console.log("res1:", res1)
  return res1
}

// 3.reject值
async function foo() {
  const res1 = await requestData()
  console.log("res1:", res1);
}

foo().then(res => {
  console.log("res:", res);
})

// foo().catch(res => {
//   console.log("res:", res);
// })