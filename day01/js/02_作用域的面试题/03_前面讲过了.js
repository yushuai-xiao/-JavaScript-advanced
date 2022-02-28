var n = 100
function foo1(){
  console.log(n); //2、100
}

function foo2(){
  var n = 200
  console.log(n) //1、 200
  foo1()  
}

foo2()
console.log(n);//3、100