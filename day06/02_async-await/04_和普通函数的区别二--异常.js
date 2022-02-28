async function foo() {
  console.log("foo function start!");

  console.log("中间代码");

  // 异步函数的异常，会被作为异步函数返回的Promise的reject值得

  throw new Error("error message")

  console.log("foo function end--");
}

// 异步函数的返回值一定一个Promise
foo().catch(err => {
  console.log("cdcdcd err", err);
})

console.log("后续代码");