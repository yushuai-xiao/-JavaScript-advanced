// 保存当前需要收集的响应式函数
let activeReactiveFn = null


/* 
 * Depend优化：
 * 1.depend方法
 * 2.使用Set来保存依赖函数，而不是数组
*/
class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  // addDepend(reactiveFn) {
  //   this.reactiveFns.push(reactiveFn)
  // }
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }

  notify() {
    // console.log(this.reactiveFns)
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式函数
function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  // 根据target获取对应的map
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key获取depend
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }

  return depend
}


// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18 // depend对象
}


// 监听对象的属性变量: Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // 根据target.key获取对应的depend
    const depend = getDepend(target, key)

    // 给depend对象中添加响应函数
    depend.depend()

    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key)
    depend.notify()
  }
})



// watchFn
watchFn(() => {
  console.log(objProxy.name, "-------")
  console.log(objProxy.name, "+++++++")
})

objProxy.name = "kobe"