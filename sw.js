const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"3937ee4999522cdbfdd4773a0a254ef7","url":"./404.html"},{"revision":"c37ed6d9d00fddf91824dc49388b0cf4","url":"./archives/2023/03/index.html"},{"revision":"4192f3954a1e252b5129eccb7dd3bdc3","url":"./archives/2023/04/index.html"},{"revision":"5cb7afa2d1f725a1cb8d5ad2c884f615","url":"./archives/2023/index.html"},{"revision":"2bfbff1fe8ff0f2b8a5b53609db138cd","url":"./archives/index.html"},{"revision":"aecf837692882de54cf0f1b25c47c6f6","url":"./bangumis/index.html"},{"revision":"b95d5be204ea140476d27c2defc65632","url":"./bing.json"},{"revision":"0944a755b4383bc7b7a64a3b55f065ab","url":"./categories/index.html"},{"revision":"2e95b317284e743f54a604c6cd0dc896","url":"./categories/学习/index.html"},{"revision":"56dec1f8a2c3b1ad6640910606670810","url":"./categories/系统/index.html"},{"revision":"33e806dc56eecd182cb1e74d2ca86832","url":"./categories/系统/工具/index.html"},{"revision":"5356e02d6dba0dc0d4f01352932e27a0","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"67348e188b6a3f7a19c1fcdb2eeaa132","url":"./feed/atom.xml"},{"revision":"e91ead4d8d8f983406e359c1480111a2","url":"./feed/rss2.xml"},{"revision":"bc48ce202fee78172e18efb59419d91c","url":"./index.html"},{"revision":"5643b4af2c5a66aa15ac760f2e9762e4","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"3c27081990070ea5aa8a14e1cd91b07a","url":"./posts/33107/index.html"},{"revision":"f71352cbe5f7eded6377b0f131474002","url":"./posts/33510/index.html"},{"revision":"db11415075c7594da0fd6718b87095b0","url":"./posts/33511/index.html"},{"revision":"7d8e1734ccbbc62450fce64f2e3fbd30","url":"./posts/3603/index.html"},{"revision":"887848bd4aa896bdd58bf180f1e14bed","url":"./posts/50888/index.html"},{"revision":"a4ab2bdd8ee2d15da56f46019e9f3c82","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"33e59d3940ffd1c59e99814517d10066","url":"./search.xml"},{"revision":"5f7fcf62f70d39162d597a3d8294905b","url":"./sitemap/sitemap.xml"},{"revision":"43a1f6757e8501b8b840eaa038f0c6d8","url":"./tags/Arch-Linux/index.html"},{"revision":"9cf6f6ab876fcb53c2fac652503b13e3","url":"./tags/index.html"},{"revision":"18fee1fb7b01926c3f1ae8ed983ed790","url":"./tags/Linux/index.html"},{"revision":"353b9d813b055703f3ec2941c3125574","url":"./tags/Windows/index.html"},{"revision":"64cf0b2e44ea8b253058998baaa307c6","url":"./tags/双系统/index.html"},{"revision":"06c590b6423dc4669df8a3c595a73f10","url":"./tags/数据结构/index.html"}], {
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
