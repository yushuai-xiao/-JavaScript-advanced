const xname = 'yushuai'
console.log(xname);

function foo(){
  console.log('foo');
}

foo()

function outer(){
  function inner(){
    var inner = "inner"
    console.log(inner);
  }
}
// console.log("object");
outer()