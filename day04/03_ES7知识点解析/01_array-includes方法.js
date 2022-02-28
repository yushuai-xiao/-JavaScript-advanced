const names = ['avd','vdf','abdf','fdfd',NaN]

if(names.indexOf("vdf")){
  console.log("包含了vdf元素");
}

// ES7 ES2016
if(names.includes('avd',2)){
  console.log("包含了vdf元素");
}

if (names.indexOf(NaN) !== -1) {
  console.log("包含NaN")
}

if (names.includes(NaN)) {
  console.log("包含NaN")
}