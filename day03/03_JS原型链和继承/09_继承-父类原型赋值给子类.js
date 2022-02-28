// 父类：公共属性和方法
function Person(name,age,friends){
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.eating = function(){
  console.log(this.name + '--eating');
}

// 子类：特有属性和方法
function Student(name,age,friends,sno){
  Person.call(this,name,age,friends)

  this.sno = 111
}

// 直接将父类的原型赋值给子类，作为子类的原型
Student.prototype = Person.prototype

Student.prototype.studying = function(){
  console.log(this.name + '--studying');
}

var stu = new Student('yushuai',18,['kobe'],111)
console.log(stu);
stu.eating()

// 为什么不好呢，因为子类和父类的prototype指向的是一个对象，如果子类更改了原型上的属性
// 那么就是更改了父类的原型，所有的继承子类都会出现问题