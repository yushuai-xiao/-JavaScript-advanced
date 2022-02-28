function foo(num1,num2){
  // 1.自己遍历
  var newArr = []
  for(var i=0;i<arguments.length;i++){
    newArr.push(arguments[i])
  }

  // 2.arguments转成array类型
  // 2.1自己遍历arguments中所有元素

  // 2.2 Array.prototype.slice将arguments转成array
  var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2);

  var newArr3 = [].slice.call(arguments)
  console.log(newArr3);

  // 2.3 ES6语法
  var newArr4 = Array.from(arguments)
  console.log(newArr4);

  var newArr5 = [...arguments]
  console.log(newArr5);
}

foo(10,20,30,40,50,60)

// 额外补充的知识点：Array中的slice实现
Array.prototype.myslice = function(start,end){
  var arr = this
  start = start || 0
  end = end || arr.length
  var newArray = []
  for(var i = start;i< end;i++){
    newArray.push(arr[i])
  }
  return newArray
}

var newArray = Array.prototype.myslice.call(['aa','bb','cc'],1,3)
console.log(newArray);

var names = ['aa','bb','cc','dd']
var newNames = names.slice(1,3)
console.log(newNames);