function debounce(fn, delay) {
  // 1.定义一个定时器，保存上次的定时器
  let timer = null
  function _debounce() {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn()
    }, delay)
  }

  return _debounce
}