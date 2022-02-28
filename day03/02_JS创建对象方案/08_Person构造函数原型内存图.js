function Person(){

}
var p1 = new Person()
var p2 = new Person()

// 都是true
console.log(p1.__proto__ === Person.prototype); //true
console.log(p2.__proto__ === Person.prototype);

// p1.name = 'yushuai'
// p1.__proto__.name = "kobe"
// Person.prototype.name = "james"
p2.__proto__.name = "curry"

console.log(p1.name);