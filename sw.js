const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"0008e8f3d0cfeea4cdaa9aa882f85ac2","url":"./404.html"},{"revision":"dd7cd234604aa1ab1e1d866ef378911f","url":"./archives/2023/03/index.html"},{"revision":"7fdaf4e2ceb8ee9cbe235eab657d55ed","url":"./archives/2023/index.html"},{"revision":"6dd20057f5b8f4d2b3b108686f7d8be6","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"e0bb688fdf20a0354665fcd8b58b3ae8","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"81c4074fd04fc3c678d1763432d76f3d","url":"./categories/index.html"},{"revision":"990591ae497c4bca7a4cf776a5a8ab56","url":"./categories/学习/index.html"},{"revision":"9adcf3a45d6ea0cf5a777259aebe4e6b","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"ae74b910c062b51c3c885f5407660766","url":"./feed/rss2.xml"},{"revision":"13d7514787ad1f8292a945831f7a2786","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"f2059cd3b2628ce740b4fc3df111c949","url":"./posts/33107/index.html"},{"revision":"3bd9f75357c14a1f303f8c80c8dc3f29","url":"./posts/3603/index.html"},{"revision":"2b842149868c6405c8f3101fc96ca015","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"8cfb3107c7482f6ce6f54b5f40229e6c","url":"./sitemap/sitemap.xml"},{"revision":"fd73da6e5504e7a42c5fa92571036812","url":"./tags/index.html"},{"revision":"5ddf4f625befa39d4985ce5220f44004","url":"./tags/Linux/index.html"},{"revision":"5eed44a2f438e0ea28920311b3fd04d5","url":"./tags/数据结构/index.html"}], {
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
  })
)

workbox.googleAnalytics.initialize();