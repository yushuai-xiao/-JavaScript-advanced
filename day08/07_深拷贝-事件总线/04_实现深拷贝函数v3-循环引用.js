function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === "object" || valueType === "function")
}

function deepClone(originValue, map = new WeakMap()) {
  //  如果是Set类型返回一个新 Set
  if (originValue instanceof Set) {
    return new Set([...originValue])
  }
  // 如果是Map类型直接返回一个新Map
  if (originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 如果是Symbol的value直接返回新的Symbol
  if (typeof originValue === 'symbol') {
    return Symbol(originValue.description)
  }

  // 如果是函数直接返回
  if (typeof originValue === "function") {
    return originValue
  }

  // 如果不是Object类型直接返回值
  if (!isObject(originValue)) {
    return originValue
  }

  if (map.has(originValue)) {
    return map.get(originValue)
  }

  const newObject = Array.isArray(originValue) ? [] : {}

  map.set(originValue, newObject)

  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key], map)
  }

  // 如果是Symob类型的key,进行处理
  const SymbolKeys = Object.getOwnPropertySymbols(originValue)

  for (const skey of SymbolKeys) {
    newObject[skey] = deepClone(originValue[skey], map)
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

obj.info = obj

const newObj = deepClone(obj)
console.log(newObj === obj);

obj.friend.name = 'kobe'
obj.friend.address.city = '成都'
console.log(newObj);
console.log(newObj.s2 === obj.s2);
