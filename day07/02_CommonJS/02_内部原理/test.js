const info = {
  name: 'xs',
  age: 18,
  foo: function () {
    console.log('foo函数');
  }
}

setTimeout(() => {
  console.log(info);
  console.log(info.name);
}, 2000)

// 1.导出方案 module.exports
module.exports = info