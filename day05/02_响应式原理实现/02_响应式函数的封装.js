// 封装一个响应式的函数
let reactiveFns = []
function watchFn(fn){
  reactiveFns.push(fn)
}

// 对象的响应式
const obj = {
  name:'xs',
  age:18
}

watchFn(function(){
  const newName = obj.name
  console.log("你好啊，李银河");
  console.log("efefef");
  console.log(obj.name);
})

watchFn(function(){
  console.log(obj.name,"demo function----------");
})

function bar(){
  console.log('普通的其他函数');
  console.log("这个函数不需要有任何响应式");
}

obj.name = "kobe"
reactiveFns.forEach(fn => {
  fn()
})

// 虽然能够收集响应的函数，但是时手动自行的，那么如何才能自动执行呢