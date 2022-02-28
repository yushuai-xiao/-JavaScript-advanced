// 默认绑定:独立函数调用
// 1.案例一：
function foo(){
  console.log(this);
}

foo()//window

// 2.案例二
function foo1(){
  console.log(this);//window
}

function foo2(){
  console.log(this);//window
  foo1()
}

function foo3(){
  console.log(this);//window
  foo2()
}

foo3() 

// 3.案例三
var obj = {
  name:'why',
  foo:function(){
    console.log(this);
  }
}
var bar = obj.foo;
bar()//window

// 4.案例四：
function foo(){
  console.log(this);
}

var obj = {
  name:'why',
  foo:foo
}

var bar = obj.foo;
bar() //window

// 5.案例五：
function foo(){
  function bar(){
    console.log(this);
  }
  return bar
}

var fn = foo();
fn()//window

var obj = {
  name:'why',
  eating:fn
}

obj.eating();//obj隐式绑定