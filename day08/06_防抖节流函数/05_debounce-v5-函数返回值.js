/* 
  发现：基本的实现，this指向的是wiondw，而且参数也没有传入，这里对此进行优化
*/

function debounce(fn, delay, immediate = false, resultCallback) {
  // 1.定义一个定时器，保存上次的定时器
  let timer = null
  let isInvoke = false

  //  真正执行的函数
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      // 取消上一次的定时器
      if (timer) clearTimeout(timer)

      // 判断是否需要立即执行
      if (immediate && !isInvoke) {
        const result = fn.apply(this, args)
        if (resultCallback) resultCallback(result)
        resolve(result)
        isInvoke = true
      } else {
        // 延迟执行
        timer = setTimeout(() => {
          // 外部传入的真正要执行的函数
          const result = fn.apply(this, args)
          if (resultCallback) resultCallback(result)
          resolve(result)
          isInvoke = false
          timer = null
        }, delay)
      }
    })

  }

  // 封装取消功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
} 