var go_down = document.querySelector('#go-down')

document.addEventListener('DOMContentLoaded', function () {
  const scrollTask = () => {
    var isbottom = window.pageYOffset + document.documentElement.clientHeight === document.documentElement.scrollHeight
    console.log('sh', document.documentElement.scrollHeight)
    console.log('ch', document.documentElement.clientHeight)
    console.log('p', window.pageYOffset)

    if (isbottom) {
      go_down.style.display = "none"
    } else {
      go_down.style.display = "block"
    }
  }
  window.scrollCollect = scrollTask;
  window.addEventListener('scroll', scrollCollect)
})
