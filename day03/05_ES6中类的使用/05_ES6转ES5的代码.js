class Person{
  constructor(name,age){
    this.name = name
    this.age = age
  }

  eating(){
    console.log(this.name + ' eating--');
  }
}

// babel转换过后代码
"use strict";
// 做了一个处理，不能直接执行函数
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// 在函数的原型中，添加属性方法
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    // 添加属性
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  // 判断是是否有原型属性,如果有,直接放到构造函数的原型上
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  // 判断是否有静态方法,对静态方法的处理
  /* 
   如果有静态方法,直接把静态方法添加到类上(构造函数上)
  */
  if (staticProps) _defineProperties(Constructor, staticProps);
  // 定义构造函数的原型,做了一些处理
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [
    {
      key: "eating",
      value: function eating() {
        console.log(this.name + " eating--");
      }
    }
  ]);

  return Person;
})();