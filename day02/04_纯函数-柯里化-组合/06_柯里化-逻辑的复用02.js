function log(date,type,message){
  console.log(`[${date.getHours()}:${date.getMinutes()}] : [${type}] : [${message}]`);
}

log(new Date(),'DEBUG','查找到组件的bug')
log(new Date(),'DEBUG','查找分页的bug')
log(new Date(),'DEBUG','查找菜单的bug')

// 柯里化的优化
var log = date => type => message =>{
  console.log(`[${date.getHours()}:${date.getMinutes()}] : [${type}] : [${message}]`);
}

// 如果我现在打印的都是当前时间
var nowLog = log(new Date())
nowLog('DEBUG')('查找到组件的bug')
nowLog('FETURE')('新增了添加用户的功能')

var nowAndDebugLog = log(new Date())('DEBUG')
nowAndDebugLog("查找到组件的bug")
nowAndDebugLog("查找到分页器的bug")
nowAndDebugLog("查找到轮播图的bug")

var nowAndFetureLog = log(new Date())("FETURE")
nowAndFetureLog("添加新功能~")