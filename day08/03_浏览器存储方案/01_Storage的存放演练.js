const loginBtn = document.querySelector("button")

loginBtn.onclick = function () {
  localStorage.setItem("name", "yushuai")
  sessionStorage.setItem('name', 'yushuai')
}