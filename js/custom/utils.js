document.addEventListener('DOMContentLoaded', () => {
  const hide_down = () => {
    var go_down = document.querySelector('#go-down');
    var isbottom =
      Math.abs(document.documentElement.scrollHeight - window.pageYOffset - document.documentElement.clientHeight) <=
      200;

    if (isbottom) {
      go_down.style.display = 'none';
    } else {
      go_down.style.display = 'block';
    }
  };

  const handlerWheel = (el) => {
    if (el) {
      el.addEventListener('wheel', (event) => {
        event.preventDefault();
        el.scrollLeft += event.deltaY;
      });
    }
  };

  const tagBar = document.querySelector('.tagBar-list');
  const categoryBar = document.querySelector('.categoryBar-list');
  const articleList = document.querySelector('.article-list');

  handlerWheel(articleList);
  handlerWheel(tagBar);
  handlerWheel(categoryBar);

  window.addEventListener('scroll', hide_down);
});
