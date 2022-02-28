// 创建一个迭代器对象来访问数组
const iterableObj = {
  names: ['name', 'age', 'height'],
  [Symbol.iterator]: function () {
    let index = 0
    return {
      next: () => {
        // console.log(this);
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}
// iterableObj对象就是一个可迭代对象
console.log(iterableObj[Symbol.iterator]);

// 1.第一次调用iterableObj[Symbol.iterator]
const iterator = iterableObj[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// // 2.第二次调用iterableObj[Symbol.iterator]函数
const iterator1 = iterableObj[Symbol.iterator]()
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())


// 3.for...of可以遍历的东西必须是一个可迭代对象
const obj = {
  name: 'xs',
  age: 18
}

// for (const item of obj) {
//   console.log(item);
// }
// console.log(Object.getOwnPropertyDescriptors(obj.__proto__));
for (const item of iterableObj) {
  console.log(item);
}
/* 
  name 
  age
  height
*/
const nums = [10, 250, 30, 40]
// console.log(Object.getOwnPropertyDescriptors(nums.__proto__));
