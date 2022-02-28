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

// 封装一个响应式的函数
const depend = new Depend()

function watchFn(fn){
  depend.addDepend(fn)
}

// 对象的响应式
const obj = {
  name:'yushuai', //depend对象
  age : 18 //depened对象
}

watchFn(function(){
  const newName = obj.name
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(obj.name) // 100行
})

watchFn(function(){
  console.log(obj.name,"demo function----");
})

obj.name = 'kobe'
depend.notify()

// 对象变化，需要手动进行调用,如何做到自动监听对象的变化呢？