// name和age虽然没有使用属性描述符来定义，但是他们也具备对应的特征
// value:赋值的value
// configurable:true
// writable:true
// enumerable:true
var obj = {
  name:'yushuai',
  age:18
}

// 数据属性描述符
// 用了属性描述符，会用默认的特性
Object.defineProperty(obj,'address',{
  // 很多的配置
  value:'北京市',//默认值undefined
  // 该属性不可删除/也不可以重新定义属性描述符
  configurable:false, //默认值为false
  // 该特性是配置对应的属性(address)是否是可以进行枚举
  enumerable:false,//默认值为false
  // 该特性是属性是否可以赋值(写入值)
  writable:false //默认值为false
})

// 测试configurable的作用
// delete obj.name //当configurable为true时，可以进行删除
// console.log(obj.name); //undefined

// delete obj.address //当configurable为false时，不可以进行删除
// console.log(obj.address); //北京市

// Object.defineProperty(obj, "address", { //Cannot redefine property: address
//   value: "广州市",
//   configurable: true
// })
// console.log(obj.address);

// 测试enumerable的作用
// console.log(obj)
// for (var key in obj) {
//   console.log(key)
// }
// console.log(Object.keys(obj))

// 测试Writable的作用
obj.address = "上海市" //当Writable为false,不可写入
console.log(obj.address)