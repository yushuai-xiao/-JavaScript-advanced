function throttle(fn, interval, options = { leading: true, trailing: false }) {
  // 1.记录上一次开始的事件
  const { leading, trailing } = options
  let lastTime = 0

  // 2.事件触发时，真正执行的函数
  const _throttle = function () {
    // 2.1、获取当前事件触发时的事件
    const nowTime = new Date().getTime()
    console.log(nowTime);
    if (!lastTime && !leading) lastTime = nowTime
    // 2.2、使用当前触发的时间和之前的时间间隔以及上一次开始的时间，计算出还剩余多长时间需要去触发函数
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      // 2.3真正触发函数
      fn()
      // 2.4保留上次触发的时间
      lastTime = nowTime
    }
  }

  return _throttle
}