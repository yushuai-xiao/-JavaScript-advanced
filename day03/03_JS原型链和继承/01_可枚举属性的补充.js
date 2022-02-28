var obj = {
  name:'yushuai',
  age:18
}

Object.defineProperty(obj,"address",{
  value:'北京市'
})

console.log(obj);

// 在node环境下会打印{ name: 'yushuai', age: 18 },而在浏览器环境下,会显出不可枚举的属性
// 但颜色和其他可枚举的属性不一样,这是因为浏览器内部做了处理,帮助我们调试