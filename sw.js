const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"3913a852f754606342c4a8ec8bb58d46","url":"./404.html"},{"revision":"45d5e0ff4793543859f28fdbc439a616","url":"./archives/2023/03/index.html"},{"revision":"dfa9920ed7d78814168cbf49ab8c47a7","url":"./archives/2023/04/index.html"},{"revision":"c5bbd2064dead61afaa42bf10a6d0d2f","url":"./archives/2023/index.html"},{"revision":"eda75e067411a920fa8a5bad2f343ed3","url":"./archives/index.html"},{"revision":"01c7ae0a2b1349bcd6a9df3499cedc6e","url":"./bangumis/index.html"},{"revision":"9bddd4078dcf8ddf69f0547caec560a1","url":"./bing.json"},{"revision":"e17b1df63c27a36a2ec5c81bf3328361","url":"./categories/index.html"},{"revision":"e04d320ff1ec287edbda2529078ad5e8","url":"./categories/学习/index.html"},{"revision":"037d79fb7963307774cc79678b9cc92a","url":"./categories/系统/index.html"},{"revision":"0bff445c8ed92b1046bc01dd944df4d9","url":"./categories/项目管理/index.html"},{"revision":"3289f03777ebfd095ca8e07f08b6c972","url":"./cinema/index.html"},{"revision":"7469edfedf70ed8cf6930905dc9350f3","url":"./css/index.css"},{"revision":"f1c442afb181c5d2f9d01d0bb711a727","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a887c1a3a82f5c92396d47274769415c","url":"./feed/atom.xml"},{"revision":"ef4c68d8afa62a22fe1f14e91ecc60c9","url":"./feed/rss2.xml"},{"revision":"e5dbebf1ff513aea229bf587f5945823","url":"./index.html"},{"revision":"37ea4552f6d5a1baecfbe23d9caed673","url":"./js/custom/animation.js"},{"revision":"054accfc17a50e94cea58991112883bc","url":"./js/custom/title.js"},{"revision":"19178af542654ff076e5a64ba5b5619b","url":"./js/custom/weather.js"},{"revision":"0fa555adf3fa73065411da699913ba58","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"367f5abbf0b05a749623e9e25b9f0c69","url":"./posts/19711/index.html"},{"revision":"3c8478eb080647651f0d1d1907d2b447","url":"./posts/21725/index.html"},{"revision":"28109992d1fbe104abf6728aa0e4dd92","url":"./posts/33107/index.html"},{"revision":"6bf9caf5bacba24ca7a2e45dd4396f8c","url":"./posts/33510/index.html"},{"revision":"5dcf1966c681f76148a68df758ebac4f","url":"./posts/33511/index.html"},{"revision":"210774a8f0ad52714a208ccf2d897efd","url":"./posts/3603/index.html"},{"revision":"cc3ac2d6264fe30f6f9802aa082f5171","url":"./posts/50888/index.html"},{"revision":"917a3d5aefd5c77322e3324fc3bf1756","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"1d4d2db2f3230cbc83d6e6f09674a4ae","url":"./search.xml"},{"revision":"18a76d1881156475ff9bdfb96055ebef","url":"./sitemap/sitemap.xml"},{"revision":"22cda0444d258bbe18f2730693a9ba1c","url":"./tags/Arch-Linux/index.html"},{"revision":"3b0054bd3eb37651a5bd7b07094f8bb0","url":"./tags/index.html"},{"revision":"25f4fa6bbd48a69910f20f756abdf53c","url":"./tags/javascript/index.html"},{"revision":"56bbc11ec5795fe602ed038cbc4b9fc4","url":"./tags/Javascript/index.html"},{"revision":"6cfe16769c3003dc0e917d4596c338e6","url":"./tags/Linux/index.html"},{"revision":"672dc2fe2a104b18cf800845083823dd","url":"./tags/Windows/index.html"},{"revision":"38915ad7bb0ea3f343e9e5223c22e0ae","url":"./tags/双系统/index.html"},{"revision":"cf6a40a9b42fe0c2d3f3beee79358f68","url":"./tags/工具/index.html"},{"revision":"e5b88c299926dd63a797363051d865df","url":"./tags/数据结构/index.html"}], {
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
