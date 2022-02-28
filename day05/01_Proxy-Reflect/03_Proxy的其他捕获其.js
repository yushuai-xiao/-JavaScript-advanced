const obj = {
  name:'yushuai',//数据属性描述符
  age : 20
}

// 变成一个访问属性描述符
Object.defineProperty(obj,'name',{})

const objProxy = new Proxy(obj,{
  // 获取值时的捕获器
  get:function(target,key){
    console.log(`监听到对象的${key}属性被设置值`,target);
    return target[key]
  },
  set:function(target,key,newValue){
    console.log(`监听到对象的${key}属性被设置值`,target);
    target[key] = newValue
  },
  // 监听in的捕获器
  has:function(target,key){
    console.log(`监听到对象${key}属性in操作`,target);
    return key in target
  },

  // 监听delete的捕获器
  deleteProperty:function(target,key){
    console.log(`监听到对象${key}属性delete操作`,target);
    delete target[key]
  }
})

// in操作
console.log('name' in objProxy);

// delete操作
delete objProxy['name']
