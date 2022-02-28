// 实现自己的apply
Function.prototype.myapply = function(thisArg , argArray){
  // 1.获取要执行的函数
  var fn = this

  // 2.处理绑定的thisArg
  thisArg = (thisArg !== null && thisArg !== undefined)? Object(thisArg) : window

  // 3.执行函数
  thisArg.fn = fn
  var result

  // if(!argArray){
  //   result = thisArg.fn()
  // }else{
  //   result = thisArg.fn(...argArray)
  // }
  // argArray = argArray? argArray : []
  argArray = argArray || []
 
  result  = thisArg.fn(...argArray)
  delete thisArg.fn

  // 4.返回结果
  return result
}

function sum(num1,num2){
  console.log("sum被调用",this,num1,num2);
  return num1 + num2
}

function foo(num){
  return num
}

function bar(){
  console.log("bar函数被执行",this);
}

// 系统调用
// var  result = sum.apply('abc',[20])
// console.log(result);

// 自己实现调用
var result = sum.myapply('abc',[20])
console.log(result);


var result2 = foo.myapply("abc", [20])
console.log(result2)

// edge case
bar.myapply(0)
