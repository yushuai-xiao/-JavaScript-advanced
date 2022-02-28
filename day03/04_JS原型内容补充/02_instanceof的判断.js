function createObject(o){
  function Fn(){}
  Fn.prototype = o
  return new Fn()
}

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = createObject(SuperType.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person(){

}

function Student(){

}

inheritPrototype(Student,Person)

console.log(Person.prototype.__proto__);

var stu = new Student()

/* 
 instanceof运算符用来判断一个构造函数的prototype属性所指向的
 对象是否存在另外一个要检测对象的原型链上
*/
console.log(stu instanceof Student);//true
console.log(stu instanceof Person);//true
console.log(stu instanceof Object);//true