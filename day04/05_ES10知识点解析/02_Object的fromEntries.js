const obj = {
  name:'yushuai',
  age:18,
  height:1.88
}

const entries = Object.entries(obj)
console.log(entries);

// const newObj = {}
// for (const entry of entries) {
//   newObj[entry[0]] = entry[1]
// }
// console.log(newObj);


// 1.ES10中新增了Object.fromEntries方法:
// 我们知道 Object.entries() 是将对象转成一个自身可枚举属性的键值对数组。
 // 同样，我们也可以把键值对数组转成了对象。
const newObj = Object.fromEntries(entries)

console.log(newObj)

// 2.Object.fromEntries的应用场景
const queryString = "name=yushuai&age=18&height=1.80"
const queryParams = new URLSearchParams(queryString)
for(const param of queryParams){
  console.log(param);
}

const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)