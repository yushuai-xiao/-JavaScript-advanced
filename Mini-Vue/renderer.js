const h = (tag,props,children) => {
  // vnode ->> javascipt对象 ==》 {}
  return {
    tag,
    props,
    children
  }
}

const mount = (vnode,container) => {
  // vnode -> element
  // 1.创建出真实的的元素，并且在vnode上保留el
  const el = vnode.el = document.createElement(vnode.tag)

  // 2.处理props
  if(vnode.props){
    for(const key in vnode.props){
      const value = vnode.props[key]

      if(key.startsWith('on')){
        // 如果是事件，利用addEventLitener添加事件
        el.addEventListener(key.slice(2).toLowerCase(),value)                      
      }else{
        // 如果是属性，添加属性
        el.setAttribute(key,value)
      }
    }
  }
  // 3.处理children
  if(vnode.children){
    if(typeof vnode.children === "string"){
      el.textContent = vnode.children
    }else{
      vnode.children.forEach(item => {
        mount(item,el)
      });
    }
  }
  // 4.将el挂载在container上
  container.appendChild(el)
}

// 创建patch
const patch = (n1,n2) => {
  // 如果两个元素不同，移除原来的元素，挂载新元素
  if(n1.tag !== n2.tag){
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2,n1ElParent)
  }else{
    // 1.取出element对象，并且在n2中保存
    const el = n2.el = n1.el
    // 2.处理props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
      // 2.1 获取所有的newProps添加到el
      for(const key in newProps){
        const oldValue = oldProps[key]
        const newValue = newProps[key]
        // 判断props中的内容是否不一样
        if(newValue !== oldValue){
          // 1.判断是事件还是属性
          if(key.startsWith("on")){
            el.addEventListener(key.slice(2).toLowerCase(),newValue)
          }else{
            el.setAttribute(key,newValue)
          }
        }
      }

      // 2.2 删除旧的props
      for(const key in oldProps){
        if(key.startsWith("on")){
          const value = oldProps[key]
          el.removeEventListener(key.slice(2).toLowerCase(),value)
        }
        if(!(key in newProps)){
          el.removeAttribute(key)
        }
      }

      // 2.3 处理children
      const oldChildren = n1.children || []
      const newChildren = n2.children || []
      // 情况一：newChildren本身是一个String
      if(typeof newChildren === "string"){
        // 边界情况
        if(typeof oldChildren === "string"){
          if(newChildren !== oldChildren){
            el.textContent = newChildren
          }
        }else{
            el.innerHTML = newChildren
        }
      }else{
        // 情况二：newchildren本身是一个数组
        // 判断oldChildren是否是一个string，如果是，直接调用mount,挂在你newChildren
        if(typeof oldChildren === "string"){
          el.innerHTML = ''
          newChildren.forEach(item => {
            mount(item,el)
          })
        }else{
          // 两个都是数组的情况
            // oldChildren:[v1,v2,v3,v8.v9]
            // newChildren:[v1,v5,v6]
            
            // (1) 前面有相同的节点的元素进行patch操作
            const commentLength = Math.min(oldChildren.length,newChildren.length)
            for(let i = 0; i< commentLength ; i++){
              patch(oldChildren[i],newChildren[i])
            }
            
            // (2) newChildren.length > oldChildren.length
            if(newChildren.length > oldChildren.length){
              // 新元素直接挂载
              newChildren.slice(oldChildren.length).forEach(item => {
                mount(item,el)
              })
            }
            // (3) newChildren.length < oldChildren.length
            if(newChildren.length < oldChildren.length){
              oldChildren.slice(newChildren.length).forEach(item => {
                el.removeChild(item.el)
              })
            }

        }
      }
  }
}