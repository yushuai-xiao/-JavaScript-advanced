const obj = {
  name: 'yushuai',
  age: 18,
}

// 如果只接听对象中的某一个属性，可以利用Object.defineProperty方法
// Object.defineProperty(obj,'name',{
//   get:function(){
//     console.log("监听到obj对象的name属性被访问了");
//     return this._name
//   },
//   set:function(newValue){
//     console.log("监听到obj对象的name属性被设置值");
//     this._name = newValue
//   }
// })
// console.log(obj.name);
// obj.name = "xs"
// console.log(obj.name);
console.log(Object.keys(obj));
// 如果要监听整个对象上的属性，就需要遍历整个对象
Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    get: function () {
      console.log(`监听到obj对象的${key}属性被访问了`);
      return value
    },
    set: function (newValue) {
      console.log(`监听到obj对象的${key}属性被设置值`);
      value = newValue
    }
  })
})

obj.name = "kobe"
obj.age = 20


console.log(obj.name)
console.log(obj.age)

obj.height = 1.88