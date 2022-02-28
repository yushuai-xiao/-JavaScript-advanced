// 1.第一种方式：export声明语句
// export const name = 'xs'
// export const age = 18

// export function foo(){
//   console.log("foo functioin");
// }

// export class Person{

// }

// 2.第二种方式：export导出和声明分开
const name = 'xs'
const age = 18
function foo() {
  console.log("foo function");
}

export {
  name,
  age,
  foo
}

// 第三种方式：第二种导出时起别名
// export {
//     name as fName,
//     age as fAge,
//     foo as fFoo
//   }