const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ba5a2062272354491f92e3c8aa1d9b90","url":"./404.html"},{"revision":"191ce85cf7dc3d18da5b9ec931a85376","url":"./archives/2023/03/index.html"},{"revision":"54df5b91736dd37d3c0285181cfabe71","url":"./archives/2023/04/index.html"},{"revision":"c5738e288df535fc874e95c760d0ef25","url":"./archives/2023/index.html"},{"revision":"cf0ab8a647ddfac7f149c626b10bea45","url":"./archives/index.html"},{"revision":"5092eedbbf5fb02d189b783f877f9259","url":"./bangumis/index.html"},{"revision":"303f8c329cc588a1fad8ee7a170094a0","url":"./bing.json"},{"revision":"83ba39f22e88a3eeda987e86fc8e38f2","url":"./categories/index.html"},{"revision":"07e39399ff9a82a911f2b15422ed2166","url":"./categories/学习/index.html"},{"revision":"cc0695ae865ff43dcab7101ad69ec740","url":"./categories/工具/index.html"},{"revision":"8127870275ef1b398be50e78aa8a5dd8","url":"./categories/系统/index.html"},{"revision":"24f2d60ba3807476a059318762097489","url":"./categories/系统/工具/index.html"},{"revision":"1997597263ad1056a5443e0d83e2ca26","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f4209aaf699241176f7d897a72487686","url":"./feed/atom.xml"},{"revision":"29e4212f484b8e6a2a3b4857889ca22a","url":"./feed/rss2.xml"},{"revision":"884668df5b922ddf9a75c879e39198b5","url":"./index.html"},{"revision":"5643b4af2c5a66aa15ac760f2e9762e4","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"c4ec9018d336bf9ecb3467157e2980a2","url":"./posts/19711/index.html"},{"revision":"f1f789afa97ff0026d8182098d3f9857","url":"./posts/33107/index.html"},{"revision":"616f71bd76b3420300ef78ffa9b32a0a","url":"./posts/33510/index.html"},{"revision":"46b00ceb91ca30524bfe700eafa88662","url":"./posts/33511/index.html"},{"revision":"f81628561ec38fbfc8d5c1d864e72333","url":"./posts/3603/index.html"},{"revision":"bde172e4b793e4d6485a6cfa083711a1","url":"./posts/50888/index.html"},{"revision":"35b320154e1f1351d104e146353344f5","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"7baf97ca64c1f9a80176eb3c8df41d26","url":"./search.xml"},{"revision":"3ec8f842e78fa415575c1422ad7b8156","url":"./sitemap/sitemap.xml"},{"revision":"339bd5bc99b56300078e83f3fdceb197","url":"./tags/Arch-Linux/index.html"},{"revision":"949f5d7f466f639b52706bc08d960ca9","url":"./tags/index.html"},{"revision":"db1e42e871f89a61397524458d7c0c13","url":"./tags/Javascript/index.html"},{"revision":"e00f36e7cf7487ed8c6f50390472cb66","url":"./tags/Linux/index.html"},{"revision":"98bdb53dfa930495093e49383c8ff8fa","url":"./tags/Windows/index.html"},{"revision":"8d248a2e09340f102f4d0dc3f52c1498","url":"./tags/双系统/index.html"},{"revision":"0798fb9dd639c08dd7795e68844a77b2","url":"./tags/数据结构/index.html"},{"revision":"c368da29057bc356c1874459769379da","url":"./tags/项目管理/index.html"}], {
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
