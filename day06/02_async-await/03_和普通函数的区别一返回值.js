async function foo() {
  console.log("foo function starit~");

  console.log("中间代码~");

  console.log("foo function end");

  // 1.返回值一个值
  // return "adf"

  // 2.返回thenable
  // return {
  //   then: function (resolve, reject) {
  //     resolve("hahahah")
  //   }
  // }

  // 3.返回Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("heheheh")
    }, 2000)
  })
}
// foo()
const promise = foo()
console.log(promise);

promise.then(res => {
  console.log("promise then function exec", res);
})