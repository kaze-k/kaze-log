const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"1e2f5b8511b8cd86045d53acf30e6534","url":"./404.html"},{"revision":"86da0e07bf469ed2febc412deeeee102","url":"./archives/2023/03/index.html"},{"revision":"ae51d22ecbcf0cd0be7e133b80bc64ee","url":"./archives/2023/04/index.html"},{"revision":"df9db4aa9c565fe0a8a2683edb309ff4","url":"./archives/2023/index.html"},{"revision":"e000ae63cdea15732d439da803c78719","url":"./archives/index.html"},{"revision":"b7a5a6666effebefeea121e687fc049a","url":"./bangumis/index.html"},{"revision":"eb3002983883da5251fb5e70513df184","url":"./bing.json"},{"revision":"5e5ec0e8fbbdcd6796669f75e35e8caf","url":"./categories/index.html"},{"revision":"fb5443942981d056efa59200da1f78c4","url":"./categories/学习/index.html"},{"revision":"27141767b5c8bf927d201083dc2c271f","url":"./categories/系统/index.html"},{"revision":"06860840741fc4d50baae10a964fd7fb","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"dcab71941ff10d7cd193fd1d720d0c1f","url":"./feed/atom.xml"},{"revision":"53bbfc969111af76d3d55c9bcecc763b","url":"./feed/rss2.xml"},{"revision":"ce852801fd8aebcfae6a6b24fbfdbacf","url":"./index.html"},{"revision":"5643b4af2c5a66aa15ac760f2e9762e4","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"314679e48107cda05d2582530c0c32ad","url":"./posts/33107/index.html"},{"revision":"a0b311ccdad74fb6325cfe2fd3593b25","url":"./posts/33510/index.html"},{"revision":"2af9388d519cfdfe298df0b0b4ca6c7c","url":"./posts/3603/index.html"},{"revision":"76b8b8da0a50a93afd1509abf3e48791","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"5c78609317f7258e56402029fe262b23","url":"./search.xml"},{"revision":"ea0051f6b0a2d045a8e6c7f88f781535","url":"./sitemap/sitemap.xml"},{"revision":"0886e8f8715be18797aa7c5bb5fe30f7","url":"./tags/index.html"},{"revision":"f4496c7275feff4ec57b1a40aa99a618","url":"./tags/Linux/index.html"},{"revision":"e8136d73fe18a626c7579f11c6125c02","url":"./tags/数据结构/index.html"}], {
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
