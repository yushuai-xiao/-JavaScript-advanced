var obj = {
  name: 'yushuai',
  age: 18
}

var info = Object.create(obj, {
  address: {
    value: '合肥市',
    enumerable: true
  }
})


console.log(info);
console.log(info.__proto__);
// hasOwnProperty方法判断
/*
 hasOwnProperty表示是否有自己的属性。这个方法会查找一个对象是否有某个属性，
 但是不会去查找它的原型链
*/
// console.log(info.hasOwnProperty('address')); //true
// console.log(info.hasOwnProperty('name')); //false

// in操作符：不管在当前对象还是原型中返回的都是true
// console.log("address" in info); //true
// console.log("name" in info); //true

// // for in
// for (var key in info) {
//   console.log(key)
// }