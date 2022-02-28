function sum(m,n){
  return m + n
}

// 假如在程序中，我们经常需要把数字5和另外一个数字进行相加
// console.log(sum(5,10));
// console.log(sum(5,20));
// console.log(sum(5,25));
// console.log(sum(5,45));

function makeAdder(count){
  count = count * count
  return function(num){
    return count + num
  }
}

var result = makeAdder(5)(10)
console.log(result);

var adder5 = makeAdder(5)
adder5(10)
adder5(20)
adder5(25)
adder5(45)