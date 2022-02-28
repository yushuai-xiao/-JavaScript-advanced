// ES6 ES2015
//Promise实现规范 https://promisesaplus.com/

// 定义在Promise的三种状态
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

// 工具函数
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value);
    resolve(result);
  } catch (err) {
    reject(err);
  }
}

class MyPromise {
  constructor(executor) {
    // 进行执行的前应该是pending状态
    this.status = PROMISE_STATUS_PENDING;

    // resolve和reject传递的参数先进行定义
    this.value = undefined;
    this.reason = undefined;

    // 创建一个数组,可以多次调用then方法
    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (value) => {
      // 当状态为pending时，才进行入resolve,这样是保证resolve,reject,只能调用一个
      if (this.status === PROMISE_STATUS_PENDING) {
        // 当进入resolve是，status应该是fulfilled
        // 这里的queueMicrotask是指，把里面的函数放入微队列中进行执行
        queueMicrotask(() => {
          // 这里需要判断是否是peding，如果不是pending就不执行微队列
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    const defaultOnRejected = (err) => {
      throw err;
    };
    onRejected = onRejected || defaultOnRejected;

    const defaultOnFulfilled = (value) => {
      return value;
    };
    onFulfilled = onFulfilled || defaultOnFulfilled;

    return new MyPromise((resolve, reject) => {
      // 1.如果在then调用的时候，状态已经确定下来,那么就知道调用
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject);
      }
      // 2、将成功回调和失败回调放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject);
        });
        this.onRejectedFns.push(() => {
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject);
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    console.log("111");
    this.then(
      () => {
        onFinally();
      },
      () => {
        onFinally();
      }
    );
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }

  static all(promises) {
    // 问题关键：什么时候要执行resolve,什么时候执行reject
    return new MyPromise((resolve, reject) => {
      const values = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push(res);
            if (values.length === promises.length) {
              resolve(values);
            }
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }
  // allSettled
  static allSettled(promises) {
    return new MyPromise((resolve) => {
      const results = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            results.push({ status: PROMISE_STATUS_FULFILLED, value: res });
            if (results.length === promises.length) {
              resolve(results);
            }
          },
          (err) => {
            results.push({ status: PROMISE_STATUS_REJECTED, value: err });
            if (results.length === promises.length) {
              resolve(results);
            }
          }
        );
      });
    });
  }
}

const p1 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(1111);
  }, 1000);
});
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(2222);
    // resolve(2222);
  }, 2000);
});
const p3 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(3333);
  }, 3000);
});
MyPromise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// MyPromise.allSettled([p1, p2, p3]).then((res) => {
//   console.log(res);
// });
// Promise.allSettled([p1, p2, p3]).then((res) => {
//   console.log(res);
// });
