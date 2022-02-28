var name = 'yushuai'
var age = 18

var obj = {
  // 1.property shorthand(属性的简写)
  name,
  age,

  // 2.method shorthand(方法的简写)
  foo: function () {
    console.log(this);
  },
  bar() {
    console.log(this);
  },
  baz: () => {
    console.log(this);
  },
  // 3.computed property name(计算属性名)
  [name + 123]: 'hahaha'

}

obj.baz()
obj.bar()
obj.foo()

// obj[name + 123] = "hahaha"
console.log(obj)

// babel转成ES5
"use strict";

var _this = void 0;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var name = "yushuai";
var age = 18;

var obj = _defineProperty(
  {
    // 1.property shorthand(属性的简写)
    name: name,
    age: age,
    // 2.method shorthand(方法的简写)
    foo: function foo() {
      console.log(this);
    },
    bar: function bar() {
      console.log(this);
    },
    baz: function baz() {
      console.log(_this);
    }
  },
  // 计算属性名
  name + 123,
  "hahaha"
);