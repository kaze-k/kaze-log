const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9afd3828354fb24d8d168666edae45f8","url":"./404.html"},{"revision":"0afdc02857c318413b5242bee01eeb74","url":"./archives/2023/03/index.html"},{"revision":"831c5fd93be03d8e25bee61aa3d77f47","url":"./archives/2023/index.html"},{"revision":"e0c71022acf61275b0c15e00911727c3","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"ad3d83315adfcefca213f951b3199ac6","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"8c6156da1fc4bfe62152e217b62cdc89","url":"./categories/index.html"},{"revision":"d858c3b32d3da59d1a7d94f3eec021e2","url":"./categories/学习/index.html"},{"revision":"93087fbae9ff1dfe8597768b4af79602","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"7e8c18fb2009a57e605ba68bf7bbb8b5","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"962db641957e80d730d415d7643aa7b2","url":"./posts/33107/index.html"},{"revision":"48baef74ed8f8696003e77f9faf25529","url":"./posts/3603/index.html"},{"revision":"4ca2cb07ad009fcc574c98d7dc99d70f","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"8cfb3107c7482f6ce6f54b5f40229e6c","url":"./sitemap/sitemap.xml"},{"revision":"505d85928629cc2002000096f1190a0e","url":"./tags/index.html"},{"revision":"8dc28bf3cc93e2d87a52f93fbff81f49","url":"./tags/Linux/index.html"},{"revision":"f8fd2a7986fc11a75acfdb602fb6d7a1","url":"./tags/数据结构/index.html"}], {
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