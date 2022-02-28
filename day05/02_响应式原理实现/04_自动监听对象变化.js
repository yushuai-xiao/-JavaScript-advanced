class Depend{
  constructor(){
    this.reactiveFns = []
  }
  addDepend(reactiveFn){
    this.reactiveFns.push(reactiveFn)
  }

  notify(){
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式函数
const depend = new Depend()

function watchFn(fn){
  depend.addDepend(fn)
}

// 对象的响应式
const obj = {
  name:'yushuai',//depend对象
  age:18
}

// 监听对象的属性变化：Proxy(vue3)/Object.defineProperty(vue2)

const objProxy = new Proxy(obj,{
  get:function(target,key,receiver){
    return Reflect.get(target,key,receiver)
  },
  set:function(target,key,newValue,receiver){
    Reflect.set(target,key,newValue,receiver)
    depend.notify()
  }
})

watchFn(function() {
  const newName = objProxy.name
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(objProxy.name) // 100行
})

watchFn(function() {
  console.log(objProxy.name, "demo function -------")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----1")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----2")
})

objProxy.name = "kobe"
objProxy.name = "james"
objProxy.name = "curry"

objProxy.age = 100


/* 
 这样做到了自动田监听对象变化，那么这里有个问题，该变了一个对象的属性，响应函数都进行
 了响应，那么如何做到，改变了某一个对象，只对这个对象有依赖的函数响应就行了
*/