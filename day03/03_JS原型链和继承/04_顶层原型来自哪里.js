// var obj1 = { } //创建了一个对象
// var obj2 = new Object() //创建了一个对象

// function Person(){

// }

// var p = new Person()

var obj  = {
  name:'yushuai',
  age:18
}

var obj2 = {
  // address:'北京'
}

obj.__proto__ = obj2
// Object.prototype
// console.log(obj.__proto__);
// console.log(Object.prototype);
// console.log(obj.__proto__ === Object.prototype);

console.log(Object.prototype);
console.log(Object.prototype.constructor);
console.log(Object.prototype.__proto__);
console.log(Object.getOwnPropertyDescriptors(Object.prototype));

Object.defineProperty(Object.prototype,'__prototype__',{
  value:'lall'
})