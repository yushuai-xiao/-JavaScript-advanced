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
  depend(){
    if(activeReactiveFn){
      this.reactiveFns.add(activeReactiveFn)
    }
  }

  notify() {
    console.log(this.reactiveFns)
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式函数
function watchFn(fn){
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target,key){
  // 根据target获取对应的map
  let map = targetMap.get(target)
  if(!map){
    map = new Map()
    targetMap.set(target,map)
  }

  // 根据key获取depend
  let depend = map.get(key)
  if(!depend){
    depend = new Depend()
    map.set(key,depend)
  }

  return depend
}


// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18 // depend对象
}


// 监听对象的属性变量: Proxy(vue3)/Object.defineProperty(vue2)

function reactive(obj){
  // {name: "why", age: 18}
  // ES6之前, 使用Object.defineProperty
  Object.keys(obj).forEach(key =>{
    let value = obj[key]
    Object.defineProperty(obj,key,{
      get:function(){
        const depend = getDepend(obj,key)
        depend.depend()
        return value
      },
      set:function(newValue){
        value = newValue
        const depend = getDepend(obj,key)
        depend.notify()
      }
    })
  })
  return obj
}

const objProxy = reactive({
  name:'xs',
  age:18
})

const infoProxy = reactive({
  address: "广州市",
  height: 1.88
})

watchFn(()=>{
  console.log(infoProxy.address);
})
infoProxy.address = "合肥市"

const foo = reactive({
  name: "foo"
})

watchFn(() => {
  console.log(foo.name)
})

foo.name = "bar"