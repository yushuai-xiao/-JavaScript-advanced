function foo(){
  console.log(this);
}

// 默认绑定和显式绑定bin冲突:优先级(显式绑定)

var newFoo = foo.bind('aaa')

newFoo() //aaa
newFoo()
newFoo()

var bar = foo
console.log(bar === foo); //true
console.log(newFoo === foo);//false