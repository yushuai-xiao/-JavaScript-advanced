function foo(){
 console.log("foo函数处理",this);
}

const fooProxy = new Proxy(foo,{
  apply:function(target,thisArg,argArray){
    console.log("对foo函数进行了apply调用");
    return target.apply(thisArg,argArray)
  },
  construct:function(target,argArray,newTarget){
    console.log("对fooh函数进行了new调用");
    return new target(...argArray)
  }
})

// fooProxy.apply({},['acv','fdfd'])
new fooProxy('abc','cdg')