function createObject(o){
  function Fn(){}
  Fn.prototype = o
  return new Fn()
}


// 创建继承工具函数
function inheritPrototype(SubType,SuperType){
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype,'constructor',{
    enumerable:false,
    configurable:true,
    writable:true,
    value:SubType
  })
}



// 父类共有的属性和方法
function Person(name,age,friends){
  this.name = name
  this.age = age
  this.friends =friends
}

Person.prototype.running = function(){
  console.log("---running11");
}

Person.prototype.eating = function(){
  console.log("eating");
}

function Student(name,age,friends,sno,score){
  Person.call(this,name,age,friends)
  this.sno = sno
  this.score = score
}

inheritPrototype(Student,Person)

Student.prototype.studying = function(){
  console.log("studying");
}

var stu = new Student('yushuai',18,['kobe'],111,100)
console.log(stu);
stu.studying()
stu.running()
stu.eating()

console.log(stu.constructor.name);