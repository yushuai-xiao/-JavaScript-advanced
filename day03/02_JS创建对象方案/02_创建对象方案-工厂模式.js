// 工厂模式：工厂函数
function createPerson(name,age,height,address){
  var p = {}
  p.name = name
  p.age = age
  p.height = height
  p.address = address

  p.eating = function(){
    console.log(this.name + '在吃东西');
  }
  p.running = function(){
    console.log(this.name + '在跑步~');
  }
  return p
}

var p1 = createPerson('张三',18,1.75,'北京市')
var p2 = createPerson('李磊',21,1.80,'上海市')
var p3 = createPerson('yusshuai',20,1.88,'合肥市')

// 工厂模式的缺点(获取不到对象最真实的类型)
console.log(p1,p2,p3);