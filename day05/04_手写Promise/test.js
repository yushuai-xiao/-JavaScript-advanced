//定义promise的三种状态
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fufilled'
const PROMISE_STATUS_REJECTED = 'rejected'

//工具函数
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (error) {
    reject(error)
  }
}
class MyPromise {
  constructor(executor) {
    //改变promise的状态
    this.status = PROMISE_STATUS_PENDING

    //定义resolve和reject回调函数的参数
    this.value = undefined
    this.reason = undefined

    //定义then的函数多次调用的数组
    this.onfufilledFns = []
    this.onRejectedFns = []

    //定义resolve回调
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onfufilledFns.forEach(fn => {
            fn(this.value)
          })
        })
      }
    }

    //定义reject回调
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }
    // executor(resolve, reject)
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  //定义then方法
  then(onfufilled, onRejected) {
    //定义onfufilled和onRejected的默认值
    const defaultOnFulfilled = (value) => {
      return value
    };
    onfufilled = onfufilled || defaultOnFulfilled

    const defaultOnrejected = (err) => {
      throw err
    }
    onRejected = onRejected || defaultOnrejected

    return new MyPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_FULFILLED && onfufilled) {
        // onfufilled(this.value)
        execFunctionWithCatchError(onfufilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        // onRejected(this.reason)
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_PENDING) {
        // this.onfufilledFns.push(onfufilled)
        this.onfufilledFns.push(() => {
          execFunctionWithCatchError(onfufilled, this.value, resolve, reject)
        })
        // this.onRejectedFns.push(onRejected)
        this.onRejectedFns.push(() => {
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }

  //定义catch方法
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  //定义finally方法
  finally(onFinally) {
    this.then(
      onFinally, onFinally
    )
  }

  //类方法resolve
  static resolve(value) {
    return new MyPromise((resolve) => resolve(value))
  }

  //类方法reject
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }

  //类方法all
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const values = []
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push(res)
            if (values.length === promises.length) {
              resolve(values)
            }
          },
          (err) => {
            reject(err)
          })
      })
    })
  }

  //类方法allSettled
  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      const results = []
      promises.forEach((promise) => {
        promise.then((res) => {
          results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
          if (results.length === promises.length) {
            resolve(results)
          }
        }, (err) => {
          results.push({ status: PROMISE_STATUS_REJECTED, value: err })
          if (results.length === promises.length) {
            resolve(results)
          }
        })
      })
    })
  }

  //类方法race
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then((res) => {
          resolve(res)
        }, (err) => {
          reject(err)
        })
      })
    })
  }

  //类方法any
  static any(promises) {
    const reasons = []
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then((res) => {
          resolve(res)
        }, err => {
          reasons.push(err)
          if (reasons.length === promises.length) {
            console.log("test 111");
            reject(new AggregateError(reasons, "All promises were rejected"))
          }
        })
      })
    })
  }

}

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1111);
    reject(1111)
  }, 1000);
});

const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(2222);
    // resolve(2222);
  }, 2000);
});

const p3 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve(3333);
    reject(3333)
  }, 3000);
});

// MyPromise.all([p1, p2, p3]).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

// MyPromise.allSettled([p1, p2, p3]).then(res => {
//   console.log(res);
// })

// MyPromise.race([p1, p2, p3]).then(res => {
//   console.log(res);
// })

MyPromise.any([p1, p2, p3]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

// Promise.race([p1, p2, p3]).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })


// const promise1 = new MyPromise((resolve, reject) => {
//   resolve("test 111")
//   // reject("test 222")
// })


// promise1.then((res) => {
//   console.log("res2", res);
//   return "111"
// }).catch(err => {
//   console.log("catch", err);
// }).finally(() => {
//   console.log("finally 调用成功");
// })

// MyPromise.resolve("类方法resolve").then((res) => {
//   console.log(res);
// })

// MyPromise.reject("类方法reject").catch((err) => {
//   console.log(err);
// })
