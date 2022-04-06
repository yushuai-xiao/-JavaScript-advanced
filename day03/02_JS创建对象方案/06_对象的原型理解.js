// 每个对象中都有一个[[prototype]],这个属性可以称之为对象的原型(隐式原型)
var obj = {name:"why"} //创建对象的同时，会自动绑定一个[[prototype]]
var info = {}

// 1.解释原型的概念和看一下原型
// 早期的ECMA是没有规范如何去查看[[prototype]]

// 给对象中提供一个属性，可以让我们查看一下这个原型对象(浏览器提供g)
   // __proto__
console.log(obj.__proto__);  //{}
console.log(info.__proto__); //{}
// var obj = {name: "why", __proto__: {} }

// ES5之后提供的Object.getPrototypeOf
console.log(Object.getPrototypeOf(obj));

// 2.原型有什么用呢？
// 当我们从一个对象中获取某一个属性给你时，它会触发[[get]]操作
// 1.在当前对象中去查找对应的属性，如果找到就直接引用
// 2.如果没有找到，那么会沿着它的原型去查找[[prototype]]
// obj.age = 18
// obj.__proto__.age = 18
console.log(obj.age);