var name = "window";

var person1 = {
  name:'person1',
  foo1:function(){
    console.log(this.name);
  },
  foo2:()=>console.log(this.name),
  foo3:function(){
    return function(){
      console.log(this.name);
    }
  },
  foo4:function(){
    return () =>{
      console.log(this.name);
    }
  }
}

var person2 = {name:'person2'}

person1.foo1();  //person1,隐式绑定
person1.foo1.call(person2);  //person2,显式绑定优先级大于隐式绑定

person1.foo2();  //winidow,箭头函数绑定规则,到上层作用域中查找
person1.foo2.call(person2); //window:因为箭头函数没有this,无法改变this的指向

person1.foo3()(); //window,独立函数调用
person1.foo3.call(person2)(); //window,独立函数调用
person1.foo3().call(person2); //隐式绑定,person2

person1.foo4()();  //person1,因为箭头函数中没有this,this的指向回去找父级作用域中的this,父级的this指向person1
person1.foo4.call(person2)();  //person2
person1.foo4().call(person2);  //person1,因为箭头函数没有this,绑定不了call