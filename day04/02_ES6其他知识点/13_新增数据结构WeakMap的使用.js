const obj = {name:'yushuai'}
// 1.区别一：不能使用基本数据类型
const weakMap = new WeakMap()
 //Invalid value used as weak map key
// weakMap.set(1,'SDFD')

// 2.WeakMap和Map的区别二：
const map = new Map()
map.set(obj,"aaa")
  // 强引用和弱引用

weakMap.set(obj, "aaa")

// 3.常见方法
// get方法
console.log(weakMap.get(obj));

// has方法
console.log(weakMap.has(obj));

// delete方法
console.log(weakMap.delete(obj));


// WeakMap { <items unknown> }
console.log(weakMap)

