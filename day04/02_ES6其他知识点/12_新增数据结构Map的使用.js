// 1.JavaScript对象中是不能使用对象来作为key的
const obj1 = {name:'yushuai'}
const obj2 = {name:'kobe'}

// const info = {
//   [obj1]:'aad',
//   [obj2]:'adef'
// }

// console.log(info);

// 2.Map就是允许我们对象类型来作为key
// 构造方法的使用
const map = new Map()
map.set(obj1,"aaa")
map.set(obj2,"bbb")
map.set(1,'cccc')
console.log(map);

const map2 = new Map([[obj1, "aaa"], [obj2, "bbb"], [2, "ddd"]])
// console.log(map2);

// 3.常见的属性和方法
console.log(map2.size);

// set
map2.set('yushuai','myfdfd')
console.log(map2);

// get(key)
console.log(map2.get('yushuai'));

// has(key)
console.log(map2.has("yushuai"));

// delete(key)
map2.delete(2)
console.log(map2);

// clear
// map2.clear()
console.log(map2);

// 4.遍历map
map2.forEach((item,key) => {
  console.log(item,key);
})

for(const item of map2){
  console.log(item[0],item[1]);
}

for(const [key,value] of map2){
  console.log(key,value);
}