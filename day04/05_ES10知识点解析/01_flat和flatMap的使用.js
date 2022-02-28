// 1.flat的使用
// const nums = [10,20,[2,9],[[30,40],[10,20]],66,[25,45]]
// const newNums = nums.flat() //默认降维一层
// console.log(newNums);

// const newNums2 = nums.flat(2)
// console.log(newNums2);

// 2.flatMap的使用
// const nums2 = [10,20,30]
// const newNums3 = nums2.flatMap(item =>{
//   return item * 2
// })
// const newNums4 = nums2.map(item => {
//   return item * 2
// })

// console.log(newNums3)
// console.log(newNums4)

// 3.flatMap的应用场景
const message =["Hello World",'hello yxs','hello xj']
// 利用flatMap会自动降维一级
const words = message.flatMap(item => {
  return item.split( " ")
})

// 如果只利用map,只能得到一个二维数组
const words2 = message.map(item => {
  return item.split( " ")
})
console.log(words);
console.log(words2);