// 1.setTimeout
function xsSetTimeout(fn, duration) {
  fn.call('abc')
}

xsSetTimeout(function () {
  console.log(this);
}, 3000)

setTimeout(function () {
  console.log(this);   //window
}, 2000)

// 2.监听点击  this指向的是当前dom
// const boxDiv = document.querySelector('.box')
// boxDiv.onclick = function(){
//   console.log(this);
// }
// boxDiv.addEventListener('click',function(){
//   console.log(this);
// })
// boxDiv.addEventListener('click',function(){
//   console.log(this);
// })

// 3.数组forEach/map/filter/find
var names = ['abc', 'cvb', 'nbd']
names.forEach(function (item) {
  console.log(item, this);
}) //this指向abc

names.map(function (item) {
  console.log(item, this);
}, 'cde') //this指向cde