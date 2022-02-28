// 使用另一个模块导出的对象，那么就要进行导入require
const xs = require('./test.js')

console.log(xs);

setTimeout(() => {
  xs.name = "james"
}, 1000)