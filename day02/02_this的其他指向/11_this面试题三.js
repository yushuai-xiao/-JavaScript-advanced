var name = 'window'

function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() //person1
person1.foo1.call(person2)  //person2 显示绑定高于隐式绑定

person1.foo2() // person1,还是箭头函数中没有this,会寻找父级作用域的this,构造函数形成了一个函数作用域
person1.foo2.call(person2) //person1

person1.foo3()()  //window.独立函数调用
person1.foo3.call(person2)() //window:独立函数调用
person1.foo3().call(person2) //person2:显式绑定

person1.foo4()()  //person1,箭头函数的绑定规则,this是父级作用域的this指向
person1.foo4.call(person2)() //person2
person1.foo4().call(person2)  //person1


var obj = {
  name: "obj",
  foo: function() {

  }
}


