var swiper = new Swiper('.blog-slider', {
  direction: 'horizontal',
  passiveListeners: true,
  spaceBetween: 0,
  effect: 'slide',
  loop: true,
  autoplay: {
    disableOnInteraction: true,
    delay: 3000,
  },
  mousewheel: true,
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

swiper.el.onmouseenter = function () {
  swiper.autoplay.stop();
};
swiper.el.onmouseleave = function () {
  swiper.autoplay.start();
};
