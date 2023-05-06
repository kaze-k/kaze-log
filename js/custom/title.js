const ErrorIcon = document.location.origin + '/img/error.png';
let OriginTitle = document.title;
let OriginIcon;
let titleTime;

let links = document.querySelectorAll('link');
for (let i = 0; i < links.length; i++) {
  if (links[i].rel === 'shortcut icon') {
    OriginIcon = links[i].href;
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    let links = document.querySelectorAll('link');
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === 'shortcut icon') {
        // links[i].setAttribute('href', '/img/error.png');
        links[i].href = ErrorIcon;
      }
      document.title = '页面失踪了 X_X';
      clearTimeout(titleTime);
    }
  } else {
    let links = document.querySelectorAll('link');
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === 'shortcut icon') {
        // links[i].setAttribute('href', '/img/favicon.png');
        links[i].href = OriginIcon;
      }
    }
    document.title = OriginIcon === ErrorIcon ? 'X_X' : '>‿ㅇ';
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 1000);
  }
});
