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
//封装一个响应式函数
function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}
//封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}

//一个需要相应的对象
const obj = {
  name: "yushuai",
  age: 18
}

//监听对象的属性变化
const objProxy = new Proxy(obj, {
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
watchFn(() => {
  console.log(objProxy.name);
})
objProxy.name = "xs"