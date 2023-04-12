document.addEventListener('scroll', function () {
  var go_down = document.querySelector('#go-down')
  var isbottom = Math.abs(document.documentElement.scrollHeight - window.pageYOffset - document.documentElement.clientHeight) <= 1

  if (isbottom) {
    go_down.style.display = "none"
  } else {
    go_down.style.display = "block"
  }
})
