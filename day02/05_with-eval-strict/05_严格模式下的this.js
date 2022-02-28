"use strict"

// 在严格模式下，自执行函数(默认绑定)会指向undefined
// 之前编写的代码中，自执行函数我们时没有使用过this直接去引用window
function foo(){
  console.log(this);
}
// foo()
var obj = {
  name:'yushuai',
  foo:foo
}
foo() //undefined
obj.foo() //obj

var bar = obj.foo
bar() //undefined

// setTimeout的this
// fn.apply(this = window)
setTimeout(function() {
  console.log(this) //window
}, 1000);


