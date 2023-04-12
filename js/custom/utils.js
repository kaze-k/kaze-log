document.addEventListener('DOMContentLoaded', function () {
  const hide_down = () => {
    var go_down = document.querySelector('#go-down')
    var isbottom = Math.abs(document.documentElement.scrollHeight - window.pageYOffset - document.documentElement.clientHeight) <= 50

    if (isbottom) {
      go_down.style.display = "none"
    } else {
      go_down.style.display = "block"
    }
  }

  window.addEventListener('scroll', hide_down)
})
