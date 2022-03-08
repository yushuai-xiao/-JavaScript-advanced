class Dep{
  constructor(){
    this.subscribers = new Set()
  }

  // 把effect加入创建的集合中
  // 依赖收集
  depend(){
    if(activeEffect){
      this.subscribers.add(activeEffect)
    }
  }

  // 通知
  notify(){
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

let activeEffect = null
function watchEffect(effect){
  activeEffect = effect
  effect()
  activeEffect = null
}

const targetMap = new WeakMap()
function getDep(target,key){
  let depsMap = targetMap.get(target)
  if(!depsMap){
    depsMap = new Map()
    targetMap.set(target,depsMap)
  }

  let dep = depsMap.get(key)
  if(!dep){
    dep = new Dep()
    depsMap.set(key,dep)
  }
  return dep
}
// vue3响应式
function reactive(raw){
  return new Proxy(raw,{
    get(target,key){
      const dep = getDep(target,key)
      dep.depend()
      return target[key]
    },
    set(target,key,newValue){
      const dep = getDep(target,key)
      target[key] = newValue
      dep.notify()
    }
  })
}

// 测试代码
// const info = reactive({counter:100,name:"xs"})
// const foo = reactive({height:1.88})

// watchEffect(function(){
//   console.log("effect1",info.counter * 2, info.name);
// })

// watchEffect(function(){
//   console.log("effect2",info.counter *  info.counter);
// })

// info.counter++