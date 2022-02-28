const weakSet = new WeakSet()

// 1.区别一:只能存放对象类型
//  TypeError: Invalid value used in weak set
// weakSet.add(10)

// 强引用和弱引用的概念(看图)

/* 
比喻:
强引用就是一个小孩A牵着一条狗，他们之间通过狗链儿连着

弱引用就是，旁边有个小孩B指着A牵的狗，说：嘿，那有条狗，B指向那条狗，但他们之间没有是指绑在一起的东西

当A放开狗链，狗就会跑掉（被垃圾回收），无论B是不是还指着

但是，当B不再指着那条狗，狗还被A牵着，不会影响它是否跑掉
*/

// 2.区别二:对对象是一个弱引用
let obj = {
  name:'yushuai'
}

// weakSet.add(obj)

const set = new Set()
// 建立的是强引用
set.add(obj)

// 建立的是弱引用
weakSet.add(obj)

// 3.WeakSet的应用场景
const personSet = new WeakSet()
class Person{
  constructor(){
    personSet.add(this)
  }

  running(){
    if(!personSet.has(this)){
      throw new Error("不能通过非构造方法创建出来的对象调用running方法")
    }
    console.log('running_',this);
  }
}

let p = new Person()
p.running()
p.null

p.running.call({name: "why"})//这里就会报错