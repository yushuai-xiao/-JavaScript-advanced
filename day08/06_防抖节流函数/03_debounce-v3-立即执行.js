/* 
  发现：基本的实现，this指向的是wiondw，而且参数也没有传入，这里对此进行优化
*/

function debounce(fn, delay, immediate = false) {
  // 1.定义一个定时器，保存上次的定时器
  let timer = null
  let isInvoke = false

  //  真正执行的函数
  const _debounce = function (...args) {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer)

    // 判断是否需要立即执行
    if (immediate && !isInvoke) {
      fn.apply(this, args)
      isInvoke = true
    }
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn.apply(this, args)
      isInvoke = false
    }, delay)
  }

  return _debounce
} 