let t= 10

// 一段代码
console.log(t);
console.log(t * 2);
console.log(t ** 2);

// 对象的响应式
const obj = {
  name:'yushuai',
  age:18
}

const newName = obj.name
console.log("你好啊，李银河");
console.log('Hello World');

console.log(obj.name);  //100行

obj.name = "kobe"

// 当我们对一个对象属性进行修改时，那么对这个对象有依赖的方法或者属性，都会进行相应的改变