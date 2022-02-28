/* 
  发现：基本的实现，this指向的是wiondw，而且参数也没有传入，这里对此进行优化
*/

function debounce(fn, delay) {
  // 1.定义一个定时器，保存上次的定时器
  let timer = null
  function aaa(...args){
    console.log(...args);
  }

  function _debounce(...args) {
    aaa()
    // console.log(...args);
    // 取消上一次的定时器
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn.apply(this, args)
    }, delay)
  }

  return _debounce
} 