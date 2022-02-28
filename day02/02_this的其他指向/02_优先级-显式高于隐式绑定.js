var obj = {
  name:'obj',
  foo:function(){
    console.log(this);
  }
}

obj.foo(); //obj

// 1.call/apply的显式绑定高于隐式绑定
obj.foo.apply('abc') //abc
obj.foo.call('abc')

// 2.bind的优先级高于隐式绑定
var bar = obj.foo.bind('cba')
bar() //cba

// 3.更明显的绑定
function foo(){
  console.log(this);
}

var  obj = {
  name:'obj',
  foo:foo.bind('aaaa')
}

obj.foo()//aaaa