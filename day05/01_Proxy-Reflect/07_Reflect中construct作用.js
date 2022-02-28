function Student(name,age){
  this.name = name
  this.age  = age
}

function Teacher(){

}

// const stu = new Student('xs',18)
// console.log(stu);//Student { name: 'xs', age: 18 }
// console.log(stu.__proto__ === Student.prototype);//true

// 执行Student函数中的内容，但是创建出来对象是Teacher对象
const teacher = Reflect.construct(Student,['xs',18],Teacher)
console.log(teacher);
console.log(teacher.__proto__ === Student.prototype);//false
console.log(teacher.__proto__ === Teacher.prototype);//true