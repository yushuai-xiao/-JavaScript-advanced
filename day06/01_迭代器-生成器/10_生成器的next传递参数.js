function* foo(num) {
  console.log("函数开始执行~");

  const value1 = 100 * num
  console.log("第一段代码：", value1);

  const n = yield value1
  // console.log(n);
  const value2 = 200 * n
  console.log("第二段代码：", value2);
  const count = yield value2

  const value3 = 300 * count
  console.log("第二段代码：", value3);
  yield value3

  console.log("函数执行结束~");
  return "123"
}

// 生成器上的next方法可以传递参数
const generator = foo(5)

// 第二段代码,第二次调用next的时候执行的

console.log(generator.next(10));
console.log(generator.next(20));
/* 
 函数开始执行~
第一段代码： 500
{ value: 500, done: false }
第二段代码： 4000
{ value: 4000, done: false }
*/