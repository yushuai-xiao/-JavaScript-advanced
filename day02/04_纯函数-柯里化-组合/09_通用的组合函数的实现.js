function myCompose(...fns){
  var length = fns.length
  // 判断传入的每个参数是否是一个函数
  for(var i = 0;i<length;i++){
    if(typeof fns[i] !== 'function'){
      throw new TypeError("Expected arguments are function")
    }
  }
  // 实现
  function compose(...args){
    var index = 0
    var result = length ? fns[index].apply(this,args) : args
    while(++index < length){
      result = fns[index].call(this,result)
    }
    return result
  }
  return compose
}

function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

var newFn = myCompose(double, square)
console.log(newFn(10))