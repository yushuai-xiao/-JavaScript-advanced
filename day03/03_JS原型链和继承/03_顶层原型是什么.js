var obj = {name:'yushuai'}
console.log(obj.adress);
//如果没有会打印出undefined,那么我们会疑惑,不是在原型链上查找么,那么查找到什么结束呢

// 到底是找到哪一层对象之后停止继续查找呢?
// 字面对象obj的原型是[Object:null prototype] {}
// [Object: null prototype] {} 就是顶层的原型
console.log(obj.__proto__)

// obj.__proto__ => [Object:null prototype]{}
console.log(obj.__proto__.__proto__);//null