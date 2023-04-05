let OriginTitle = document.title;
let titleTime;

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.querySelectorAll('link')[0].setAttribute('href', '/kaze-log/img/error.png');
    document.title = '页面失踪了 X_X';
    clearTimeout(titleTime);
  } else {
    document.querySelectorAll('link')[0].setAttribute('href', '/kaze-log/img/trhx2.png');
    document.title = OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 1000);
  }
});
