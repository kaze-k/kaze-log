const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"37d9473a1054156a6240200adeef2d04","url":"./404.html"},{"revision":"7f0c311a24d7400afa63a3fb2f98f8c3","url":"./archives/2023/03/index.html"},{"revision":"aade31016ab9c96c13fdafcf0b2b2d61","url":"./archives/2023/index.html"},{"revision":"72c0c0c93f3cf94e00f51c556fcd7143","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"f0c43586a0dd5c88669c73674d6516ca","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"3213d177a07729eb0a791b1ca5a04536","url":"./categories/index.html"},{"revision":"bb180113cc92a34b3501281c0840f4bb","url":"./categories/学习/index.html"},{"revision":"b059b430ac514d36cfbe7bc29f9ca0f8","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"ae74b910c062b51c3c885f5407660766","url":"./feed/rss2.xml"},{"revision":"ee6a334c90dd3045bfa309b61a4f0a7f","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"1635e7468b8eef79100d7078df26aaff","url":"./posts/33107/index.html"},{"revision":"163bfc1e1b6c63ebb0e9e0c3e6a64481","url":"./posts/3603/index.html"},{"revision":"2b842149868c6405c8f3101fc96ca015","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"8cfb3107c7482f6ce6f54b5f40229e6c","url":"./sitemap/sitemap.xml"},{"revision":"68fbcf42bf44eb9ff10887c0a9980243","url":"./tags/index.html"},{"revision":"d87d54646ecaea997a168c65e5529833","url":"./tags/Linux/index.html"},{"revision":"35c452cf9454fb0ec2ebdaa4da24f2f0","url":"./tags/数据结构/index.html"}], {
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