// apply/call/bind的用法
//js模拟他们的实现?难度

// 给所有的函数添加一个xscall的方法
Function.prototype.xscall = function(thisArg,...args){
  // 在这里可以区执行调用的那个函数
  // 问题：得可以活到得是哪一个函数执行了xscall
  // 1.获取需要被执行得函数
  var fn = this
  
  // 2.对thisArg转成对象类型(防止它传入得是非对象类型)
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  // 3.调用需要被执行得函数
  thisArg.fn = fn
  var result = thisArg.fn(...args)

  delete thisArg.fn
  
  console.log(thisArg.fn);

  // 4.将最终得结果返回出去
  return result
}

function foo(){
  console.log("foo函数被执行",this);
}

function sum(num1,num2){
  console.log("sum函数被执行",this,num1,num2);
  return num1 + num2
}

// 系统的函数call方法
// foo.call(undefined)
foo.call({name:'xs'})
foo.call(undefined)
// var result = sum.call({},20,30)
// console.log("系统调用的结果",result);

// 自己实现额函数xscall方法
// foo.xscall({name:"xs"})
// foo.xscall(undefined)
