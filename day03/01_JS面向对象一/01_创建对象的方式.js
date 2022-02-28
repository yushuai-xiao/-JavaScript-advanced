// 创建一个对象，对某一个人进行抽象(描述)
// 1.创建方式一:通过new Object()创建
var obj = new Object()
obj.name = 'yushuai'
obj.age = 18
obj.height = 1.78
obj.eating = function(){
  console.log(this.name + '在吃饭');
}

// 2.创建方式二:字面量形式
var info = {
  name: "kobe",
  age: 40,
  height: 1.98,
  eating: function() {
    console.log(this.name + "在吃东西~")
  }
}
