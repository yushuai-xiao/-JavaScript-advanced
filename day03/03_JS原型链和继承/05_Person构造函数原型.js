function Person(){

}
console.log(Person.prototype);
console.log(Object.getOwnPropertyDescriptors(Person.prototype));

console.log(Person.prototype.__proto__); //[Object:null prototype]{}
console.log(Person.prototype.__proto__.__proto__); //null