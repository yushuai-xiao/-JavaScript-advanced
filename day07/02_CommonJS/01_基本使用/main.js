// 使用另一个模块导出的对象，那么就要进行导入require
const { name, age, sum } = require('./test.js')

console.log(name);
console.log(age);
console.log(sum(20, 30));