// 1.生成器替代迭代器
function* createArrayIterator(arr) {

  // 1. 第一种写法
  // yield "amn"  //{ value: 'amn', done: false }
  // yield "dfg"  //{ value: 'dfg', done: false }
  // yield "acg" // { value: 'acg', done: false }

  // 2.第二种写法
  // for (const item in arr) {
  //   yield item
  // }

  // 3.第三种写法
  yield* arr
  console.log(yield);

}

// const names = ['amn', 'dfg', 'acg']
// const namesIterator = createArrayIterator(names)

// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());

// 2.创建一个函数,这个函数可以迭代一个范围内的数字
// 10 , 20

function* createRangeIterator(start, end) {
  let index = start
  while (index < end) {
    yield index++
  }

  // let index = start
  // return {
  //   next: function () {
  //     if (index < end) {
  //       return { done: false, value: index++ }
  //     } else {
  //       return { done: true, value: undefined }
  //     }
  //   }
  // }
}

const rangeIterator = createRangeIterator(10, 20)
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

// 3.class案例
class Classroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  entry(newStudent) {
    this.students.push(newStudent)
  }

  foo = () => {
    console.log("foo function");
  }

  [Symbol.iterator] = function* () {
    yield* this.students
  }
}

const classroom = new Classroom("36幢", '606', ['anc', 'nfd'])
for (const item of classroom) {
  console.log(item);
}