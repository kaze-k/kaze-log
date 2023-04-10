let OriginTitle = document.title;
let titleTime;

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    let links = document.querySelectorAll('link');
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === 'shortcut icon') {
        links[i].setAttribute('href', '/kaze-log/img/error.png');
      }
      document.title = '页面失踪了 X_X';
      clearTimeout(titleTime);
    }
  } else {
    let links = document.querySelectorAll('link');
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === 'shortcut icon') {
        links[i].setAttribute('href', '/kaze-log/img/favicon.png');
      }
    }
    document.title = '>‿ㅇ';
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 1000);
  }
});
