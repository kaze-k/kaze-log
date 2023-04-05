const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f003889cc65ec0cae6c6fe08efe148c3","url":"./404.html"},{"revision":"45efb3a363b0a63ec14659ea54feaf0a","url":"./archives/2023/03/index.html"},{"revision":"1987049db759915b8c34224dbef459d9","url":"./archives/2023/04/index.html"},{"revision":"e3ecea19c08a47c44e1b6e9e8d225fe8","url":"./archives/2023/index.html"},{"revision":"2a4795c413c1593ff47242302ccf8c25","url":"./archives/index.html"},{"revision":"f9faf9c8ab36ee73c063da684467248d","url":"./bangumis/index.html"},{"revision":"9bddd4078dcf8ddf69f0547caec560a1","url":"./bing.json"},{"revision":"bd6dd3e417b256349a7ee17d24dc968b","url":"./categories/index.html"},{"revision":"9718fe96861ec569088b2410ece099a2","url":"./categories/学习/index.html"},{"revision":"e5d1a145b216a85cbb73469fbacd202f","url":"./categories/系统/index.html"},{"revision":"1007fe1338e8f230ced1bb1a21e66c24","url":"./categories/项目管理/index.html"},{"revision":"e524c49835d45e2c2a265201a7005cc9","url":"./cinema/index.html"},{"revision":"7469edfedf70ed8cf6930905dc9350f3","url":"./css/index.css"},{"revision":"f1c442afb181c5d2f9d01d0bb711a727","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"721806d1f8904ec59269d7bdd93deb55","url":"./feed/atom.xml"},{"revision":"d6f0b99b11648518412bf19a4093ae99","url":"./feed/rss2.xml"},{"revision":"e54450ea1c6a807800e2edcb4618748f","url":"./index.html"},{"revision":"37ea4552f6d5a1baecfbe23d9caed673","url":"./js/custom/animation.js"},{"revision":"054accfc17a50e94cea58991112883bc","url":"./js/custom/title.js"},{"revision":"19178af542654ff076e5a64ba5b5619b","url":"./js/custom/weather.js"},{"revision":"0fa555adf3fa73065411da699913ba58","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"ec03fc5b7c194684d12b863589358565","url":"./posts/19711/index.html"},{"revision":"48a1fd6d677f09a535886098229e8273","url":"./posts/21725/index.html"},{"revision":"7da19196a9348741ab1d8c8a06555304","url":"./posts/33107/index.html"},{"revision":"c195c8a567f61514f99d771cfa1ec779","url":"./posts/33510/index.html"},{"revision":"1a7953ef7bd8f16c4aa737fe7e79866a","url":"./posts/33511/index.html"},{"revision":"5f94273695a5ecd7bc55f7225304b454","url":"./posts/3603/index.html"},{"revision":"06cb42199790887623ba718b893b2985","url":"./posts/50888/index.html"},{"revision":"006a1001f6e77146704a125040c8289c","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"4acb21f5b5774290fd986b5b98a47e4d","url":"./search.xml"},{"revision":"3cf9acb5890a05f8e490fdb632e54264","url":"./sitemap/sitemap.xml"},{"revision":"648e7e78a9042cff039890188ff693c1","url":"./tags/Arch-Linux/index.html"},{"revision":"dbbe625cfe589ec5300d3d9c1ecf5185","url":"./tags/index.html"},{"revision":"714608432ded14c0d58ba5e6bd1b535b","url":"./tags/javascript/index.html"},{"revision":"a1d287368f79c10435c9fdfe0461f54e","url":"./tags/Javascript/index.html"},{"revision":"37453981fb6c184401b260c370d7599e","url":"./tags/Linux/index.html"},{"revision":"38017cd2dc3a692f3f62e2472f52b9e5","url":"./tags/Windows/index.html"},{"revision":"36ecc4fc657356c712f2c8d506ee61ef","url":"./tags/双系统/index.html"},{"revision":"4d6c8cdad97f69f04394fb681a4cc956","url":"./tags/工具/index.html"},{"revision":"e01f9225e7bd6942d0624a821512b1a1","url":"./tags/数据结构/index.html"}], {
  directoryIndex: null,
});

workbox.precaching.cleanupOutdatedCaches();

// jsdelivr的CDN资源
workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  new workbox.strategies.CacheFirst({
    cacheName: 'static-libs',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

workbox.googleAnalytics.initialize();
