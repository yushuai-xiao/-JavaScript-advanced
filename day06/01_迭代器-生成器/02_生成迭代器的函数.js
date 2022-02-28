function createArrayIterator(arr) {
  let index = 0
  return {
    next: function () {
      if (index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined }
      }
    }
  }
}

const names = ['acv', 'abc', 'nba']
const nums = [110, 125, 015, 125]

const namesIterator = createArrayIterator(names)
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log("-----------------");

/* 
 { done: false, value: 'acv' }
 { done: false, value: 'abc' }
 { done: false, value: 'nba' }
 { done: true, value: undefined }
*/
const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
/* 
 { done: false, value: 110 }
 { done: false, value: 125 }
 { done: false, value: 13 }
 { done: false, value: 125 }
 { done: true, value: undefined }
*/

// 创建一个无限的迭代器
function createNumerIterator() {
  let index = 0
  return {
    next: function () {
      return { done: false, value: index++ }
    }
  }
}

const numberIterator = createNumerIterator()
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());