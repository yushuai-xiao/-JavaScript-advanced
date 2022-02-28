function foo(){
  function bar(){

  }
  return bar
}

var fn1 = foo()
var fn2 = foo()

console.log(fn1 === fn2); //false
// 构造函数中的方法的作用是相同的，但每次创建对象，会重新赋值一个方法