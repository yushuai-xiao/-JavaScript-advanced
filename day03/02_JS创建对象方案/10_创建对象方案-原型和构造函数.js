function Person(name,age,height,address){
  this.name = name 
  this.age = age
  this.height = height
  this.address = address
}

Person.prototype.eating = function(){
  console.log(this.name + "在吃东西~");
}
Person.prototype.running = function(){
  console.log(this.name + '在跑步lala');
}

var p1 = new Person('yushuai',18,1.88,"北京市")
var p2 = new Person('kobe',20,1.88,"上海市")

p1.eating()
p2.eating()