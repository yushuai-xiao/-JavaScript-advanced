// request.js
function requestData(url){
  // 异步请求的代码会被放入到executor中
  return new Promise((resolve,reject) => {
    // 模拟网络请求
    setTimeout(() =>{
      // 拿到请求的结果
      //url传入的时xs,请求成功
      if(url === 'xs'){
        // 成功
        let names = ['avc','abc','nbs']
        resolve(names)
      }else{
        // 失败
        let errMessage = "请求失败,url错误"
        reject(errMessage)
      }
    },3000)
  })
}
// main.js
const promise = requestData("xs")
promise.then((res) => {
  console.log("请求成功：",res);
},(err) => {
  console.log("请求失败",err);
})