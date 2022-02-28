// 1.测试箭头函数中this的指向
// var name = 'why';

// var foo = ()=>{
//   console.log(this);
// }

// // foo() //window

// var obj = {foo:foo}
// obj.foo() //window
// foo.call('abc') //window

// 2.应用场景
var obj = {
  data:[],
  getData:function(){
    // 发送网络请求,将结果放到上面data属性中
    // 在箭头函数之前的解决方案
    var  _this = this
    console.log(_this);
    setTimeout(function(){
      var result = ['abc','dfd','dsf'];
       _this.data = result
      //  console.log(_this.data);
    },2000)
  //  console.log(this.data);
  }
}

obj.getData()

console.log(obj.data);

setTimeout(function(){
  console.log(obj.data);
},2500)
