// 编写一个迭代器
const iterator = {
  next: function () {
    return { done: true, value: 123 };
  },
};

// 数组
const names = ["abc", "acv", "nba"];

// 创建一个迭代器对象来访问数组
let index = 0;

const namesIterator = {
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] };
    } else {
      return { dono: true, value: undefined };
    }
  },
};

console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
/* 
{ done: false, value: 'abc' }
{ done: false, value: 'acv' }   
{ done: false, value: 'nba' }   
{ dono: true, value: undefined }
{ dono: true, value: undefined }
{ dono: true, value: undefined }
*/