setTimeout(() => {
  console.log("setTimeout");
}, 1000)

queueMicrotask(() => {
  console.log("queryMiscrotask");
})

Promise.resolve().then(() => {
  console.log("Promise then");
})

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
  foo()
}

bar()

console.log("其他代码");

// bar
// foo
// 其他代码
// queryMiscrotask
// Promise then
// setTimeout