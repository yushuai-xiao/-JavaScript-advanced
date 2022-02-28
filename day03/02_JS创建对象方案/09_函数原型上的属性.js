function foo(){

}

// 1.constructor属性
//foo.prototype这个对象中有一个constructor属性
// console.log(foo.prototype);
// console.log(Object.getOwnPropertyDescriptors(foo.prototype));
// 原型上的属性如下
/* {
  constructor: {
    value: [Function: foo],
    writable: true,
    enumerable: false,
    configurable: true
  }
} */

// Object.defineProperty(foo.prototype,'construtor',{
//   enumerable:true,
//   configurable:true,
//   writable:true,
//   value:'我是constructor'
// })

// console.log(foo.prototype);

// 其实prototype.constructor = 构造函数本身
console.log(foo.prototype.constructor);//[Function: foo]
console.log(foo.prototype.constructor.name);//foo

console.log(foo.prototype.constructor.prototype.constructor.prototype.constructor);

// 2.可以添加自己的属性
// foo.prototype.name = 'yushuai'
// foo.prototype.age = 18
// foo.prototype.height = 1.80
// foo.prototype.eating = function(){

// }

// var f1 = new foo()
// console.log(f1.name , f1.age);

// 3.直接修改整个prototype对象
foo.prototype = {
  // constructor:foo,
  name:'yushuai',
  age:18,
  height:1.80
}
var f1 = new foo()
console.log(f1.name,f1.age,f1.height);

// 真实开发中我们可以通过Object.defineProperty方式添加constructor
Object.defineProperty(foo.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo
})