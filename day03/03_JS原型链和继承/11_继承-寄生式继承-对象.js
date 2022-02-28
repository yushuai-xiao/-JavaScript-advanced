var personObj = {
  running:function(){
    console.log("running");
  }
}

function createStudent(name){
  var stu = Object.create(personObj)
  stu.name = name
  stu.studying = function(){
    console.log("studying");
  }
  return stu
}

var stuObj = createStudent('why')
var stuObj = createStudent('kobe')
var stuObj = createStudent('james')