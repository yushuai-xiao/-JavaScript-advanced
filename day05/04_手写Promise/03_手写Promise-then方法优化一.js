// ES6 ES2015
// https://promisesaplus.com/
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;

    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 添加微任务
        queueMicrotask(() => {
          // console.log(value, 'out');
          //保证从微任务队列中拿出时，状态为pending,只能处于一个状态
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach((fn) => {
            console.log('testFn');
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

    executor(resolve, reject);
  }

  // then方法
  then(onFulfilled, onRejected) {
    // 1.如果在then调用的时候，状态已经确定下来
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
      console.log('testFn2');
      onFulfilled(this.value);
    }

    if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason);
    }
    // console.log(this.status);
    // 2.将成功回调和失败的回调方到数组中
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled);
      this.onRejectedFns.push(onRejected);
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve("aaaa");
  reject("bbbbb");
});

promise.then(
  (res) => {
    console.log("res1:", res);
  },
  (err) => {
    console.log("err1:", err);
  }
);

promise.then(
  (res) => {
    console.log("res2:", res);
  },
  (err) => {
    console.log("err2:", err);
  }
);

// 在确定Promise状态之后, 再次调用then;
setTimeout(() => {
  promise.then(
    (res) => {
      console.log("res3:", res);
    },
    (err) => {
      console.log("err3:", err);
    }
  );
}, 1000);
