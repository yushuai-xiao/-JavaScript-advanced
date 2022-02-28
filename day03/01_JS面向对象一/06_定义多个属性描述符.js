var obj = {
  // 私有属性(js里面没有严格意义的私有属性)
  _age:18,
  _eating:function(){},
  set age(value){
    this._age = value
  },
  get age(){
    return this._age
  }
}

Object.defineProperties(obj,{
  name:{
    configurable:true,
    enumerable:true,
    writable:true,
    value:'yushuai'
  },
  age:{
    configurable:true,
    enumerable:true,
    get:function(){
      return this._age
    },
    set:function(value){
      this._age = value
    }
  }
})

obj.age = 21
console.log(obj.age);
console.log(obj);