function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === "object" || valueType === "function")
}

function deepClone(originValue) {
  // 判断是否是一个Set类型
  if (originValue instanceof Set) {
    return new Set(...originValue)
  }

  // 判断是否是一个Map类型
  if (originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 判断如果是Symbol的value,那么创建一个新的Symbol
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description)
  }

  // 判断如果是函数类型,那么直接使用同一个函数
  if (typeof originValue === "function") {
    return originValue
  }

  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) {
    return originValue
  }

  // 判断传入的对象时数组，还是对象
  const newObject = Array.isArray(originValue) ? [] : {}
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key])
  }

  // 对Symbol的key进行特殊处理
  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for (const skey of symbolKeys) {
    newObject[skey] = deepClone(originValue[skey])
  }

  return newObject
}

// 测试代码
let s1 = Symbol("aaa")
let s2 = Symbol("bbb")

const obj = {
  name: "xs",
  age: 18,
  friend: {
    name: 'james',
    address: {
      city: "广州"
    }
  },
  // 数组类型
  hobbies: ['agdg', 'tennis', 'bask'],
  // 函数类型
  foo: function (m, n) {
    console.log("foo function");
    console.log("100代码逻辑");
    return 123
  },

  // Symbol作为key和value
  [s1]: 'abc',
  s2: s2,

  // Set/Map
  set: new Set(['aaa', 'vvv', 'ccc']),
  map: new Map([['aaa', 'vvvv'], ['cccc', 'ffff']])
}

const newObj = deepClone(obj)
console.log(newObj === obj);

obj.friend.name = 'kobe'
obj.friend.address.city = '成都'
console.log(newObj);
console.log(newObj.s2 === obj.s2);
