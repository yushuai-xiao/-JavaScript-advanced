//保存当前需要收集的依赖函数
let activeReactiveFn = null

class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

//创建收集响应式函数
function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

//创建获得依赖的函数
let targetMap = new WeakMap()
function getDepend(target, key) {
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }
  //通过key获取依赖
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }

  return depend
}

//创建响应式监听:Proxy(vue3)/Object.defineProperty(vue2)
function reactive(obj) {
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      const depend = getDepend(target, key)
      depend.depend()
      return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      const depend = getDepend(target, key)
      depend.notify()
    }
  })
}

const objProxy = reactive({
  name: 'xs',
  age: 18
})

const infoProxy = reactive({
  address: "广州市",
  height: 1.88
})

watchFn(() => {
  console.log(objProxy.age)
})

objProxy.age = 22
