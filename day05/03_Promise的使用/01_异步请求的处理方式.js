
/* 
 * 这种回调方式有很多的弊端；
 * 1> 如果是我们自己封装的requestData，那么我们在封装的时候必须要自己设计好callback名称，并且使用好
 * 2> 如果我们使用的是别人封装的requestData或者一些第三方库，那么必须去看鄙人的源码或者文档，才知道
 * 这个函数需要怎么去获取结果
*/
// request.js
function requestData(url,successCallback,failtureCallback){
  // 模拟网络请求
  setTimeout(()=>{
    // 拿到请求的结果
    // url传入的是xs，请求成功
    if(url === 'xs'){
    //  成功
      let names = ['abc','fdfd','xssx']
      successCallback(names)
    }else{
      // 否则请求失败
      let errMessage = "请求失败，url错误"
      failtureCallback(errMessage)
    }
  },3000)
}

// main.js
requestData("kobe",(res)=>{
  console.log(res);
},(err) =>{
  console.log(err);
})

// 更规范/更好的方案Promise(规范了所有的代码编写逻辑)
function requestData2(){
  return "承诺"
}

const chengnuo = requestData2()