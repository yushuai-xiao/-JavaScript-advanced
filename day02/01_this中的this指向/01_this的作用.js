// 在某些角度来说，开发中如果没有this,很多的问题我们也是有解决方案
// 但是没有this,会让我们编写代码变得非常不方便
var obj = {
  name:'xs',
  eating:function(){
    console.log(this.name + '在吃东西');
  },
  running:function(){
    console.log(this.name + '在跑步');
  },
  studing:function(){
    console.log(this.name + '在学习');
  }
}

var info = {
  name:'xhsu',
  eating:function(){
    console.log(this.name + '在吃东西');
  },
  running:function(){
    console.log(this.name + '在跑步');
  },
  studing:function(){
    console.log(this.name + '在学习');
  }
}

var obj1 = {
  name:'xij',
  eating:function(){
    console.log(obj.name + '在吃东西');
  },
  running:function(){
    console.log(this.name + '在跑步');
  },
  studing:function(){
    console.log(this.name + '在学习');
  }
}
// this可以很好的帮助拿到当前对象中的属性
obj.eating()
obj.running()
obj.studing()


obj1.eating()