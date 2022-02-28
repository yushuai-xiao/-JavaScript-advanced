// 隐式绑定：object.fn()
// Object对象会被js引擎绑定到fn函数中的this里面

function foo(){
  console.log(this);
}

// 独立函数调用
foo() //window

// 1.案例一
var obj = {
  name:'xs',
  foo:foo
}
obj.foo() //obj对象

// 2.案例二：
var obj = {
  name:'xs',
  eating:function(){
    console.log(this.name + '在吃东西');
  },
  running:function(){
    console.log(obj.name + '在跑步');
  }
}
obj.eating(); //xs在吃东西
obj.running()

var fn = obj.eating

fn() //在吃东西

// 3.案例三：
var obj1 = {
  name:'objs',
  foo:function(){
    console.log(this);
  }
}

var obj2 = {
  name:'obj2',
  bar:obj1.foo
}

obj2.bar() //obj2