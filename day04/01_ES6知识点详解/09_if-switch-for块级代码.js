{

}

// if语句的代码就是块级作用域
// if (true) {
//   var foo = "foo"
//   let bar = "bar"
// }

// console.log(foo) // foo
// console.log(bar) // bar is not defined

// switch语句的代码也是块级作用域
var color = "red"

switch (color) {
  case "red":
    var foo = "foo"
    let bar = "bar"
}

// console.log(foo) //foo
// console.log(bar) //bar is not defined

// for语句的代码也是块级作用域
for (var i = 0; i < 10; i++) {
  // console.log("Hello World" + i)
}

console.log(i) //10

for (let i = 0; i < 14; i++) {
}

console.log(i) //10
