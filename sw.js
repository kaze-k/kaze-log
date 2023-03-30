const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"77361c84372aaab447e705ca267cea86","url":"./404.html"},{"revision":"56dbec2e56550a4029f008854f4d5df7","url":"./archives/2023/03/index.html"},{"revision":"a4b55f8342b2ded4324c8c9a966bad62","url":"./archives/2023/index.html"},{"revision":"5bc92a4e3e7cc41dba1cc4884b019d44","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"f6625ad4c4e1aa9fb6d61810c546f34b","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"1354b6b38f6a062072d522173f213fd9","url":"./categories/index.html"},{"revision":"5946d67814ac4fcf465d037751bcd788","url":"./categories/学习/index.html"},{"revision":"f34cd96b57a4466f846f4e5b70b4029d","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"3f55b668de2eea81b9df35c951739010","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"26561f819305149238ea836b7d3c8789","url":"./posts/33107/index.html"},{"revision":"9997612286cb73decb8e887a90aa6022","url":"./posts/3603/index.html"},{"revision":"c287ab9b6a0745c82c7266dcf2b30342","url":"./pwa/manifest.json"},{"revision":"c3762491a9b44f2673967a890820d71b","url":"./search.xml"},{"revision":"cef3eb26a1bd6adbc08780ca45671799","url":"./sitemap/sitemap.xml"},{"revision":"ad7878ad59f0ac4be44a081e6697a85c","url":"./tags/index.html"},{"revision":"2614cb9dfcfd5c843f1808715c974e3f","url":"./tags/Linux/index.html"},{"revision":"a0203324b1220379b4fbe24df2fd162d","url":"./tags/数据结构/index.html"}], {
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