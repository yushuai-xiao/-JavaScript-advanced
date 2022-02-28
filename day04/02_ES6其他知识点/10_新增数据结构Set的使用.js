// 10 ,20 ,30 ,40 
// 1.创建Set解构
const set = new Set()
set.add(10)
set.add(20)
set.add(10)
set.add(30)
set.add(40)
// set会自动去掉重复值
// console.log(set);

// 2.添加对象时要特别注意：
set.add({})
set.add({})
// 因为对象时引用类型，每次新建的对象地址是不一样的
// console.log(set);

// 3.对数组去重(去除重复的元素)
const arr = [30,10,26,45,26]
// 普通的做法
// const newArr = []
// for(const item of arr){
//   if(newArr.indexOf(item) == -1){
//     console.log(item);
//     newArr.push(item)
//   }
// }

const arrSet = new Set(arr)

// const ewAnrr = Array.from(arrSet)
// const newArr = [...arrSet]

// console.log(newArr);

// 4.size属性
console.log(arrSet.size);

// 5.Set的方法
// 5.1 add
arrSet.add(100)
console.log(arrSet);

// 5.2 delete
arrSet.delete(100)
console.log(arrSet);

// 5.3 has
console.log(arrSet.has(26));

// 5.4 clear
// arrSet.clear()
console.log(arrSet);

// 6 对Set进行遍历
arrSet.forEach(item =>{
  console.log(item);
})

for (const item of arrSet) {
  console.log(item)
}

