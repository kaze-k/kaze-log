const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b9440c67fa4236172301520c93e53fb8","url":"./404.html"},{"revision":"f18c1bdc49c4f7372e51f67bc08678fa","url":"./archives/2023/03/index.html"},{"revision":"fcb9b9f6f7b2eeada3028cdef03df5c0","url":"./archives/2023/04/index.html"},{"revision":"2866ed78db97feeeed18199db5da1630","url":"./archives/2023/index.html"},{"revision":"9054b72f1cebfb0272ae9ef68aeb1c3f","url":"./archives/index.html"},{"revision":"858e0773d7446b623c82da0e96f73edd","url":"./bangumis/index.html"},{"revision":"a1c0d3dc76639bb8d0814e333119acb3","url":"./bing.json"},{"revision":"22ffb249e76f20a913e6366a9fb1355d","url":"./categories/index.html"},{"revision":"2b49cb53a7ea679516fb1d098b6347b1","url":"./categories/学习/index.html"},{"revision":"a7d03c5a3beda7663f1c7ddd557ed17e","url":"./categories/系统/index.html"},{"revision":"a702383b75ccf8f5e0707ce7eaa422c2","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3d0149b65fdcc0ef214a92751f80f17b","url":"./feed/atom.xml"},{"revision":"c1780abb7b46e96e80ee6efd6c45dcaf","url":"./feed/rss2.xml"},{"revision":"c2c5808c58798ee92d42faa7307832c6","url":"./index.html"},{"revision":"5643b4af2c5a66aa15ac760f2e9762e4","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"25f720b0fd208dc98f96aad746cf456c","url":"./posts/33107/index.html"},{"revision":"9acb8e969733aa031be89963fdf95461","url":"./posts/33510/index.html"},{"revision":"9afef50590b870aa5486ba2e39a32ca3","url":"./posts/3603/index.html"},{"revision":"ec217d64bd9cf3f042ea57d96949de5b","url":"./posts/50888/index.html"},{"revision":"a6ae0298a74da1d1537018ae318416a9","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"dafa5c318299c44afc32fd9bcdcf2b76","url":"./search.xml"},{"revision":"080570d7e58b998850f81d346ec1776f","url":"./sitemap/sitemap.xml"},{"revision":"bba55b603d4c4231316407736b8c19aa","url":"./tags/index.html"},{"revision":"c45edb2d21d39115a874b7a23a76fb54","url":"./tags/Linux/index.html"},{"revision":"e2b7fa16572f9a5a457a0a9082494a83","url":"./tags/windows/index.html"},{"revision":"f8ae38f7966f7bb4c1b33998fcc53646","url":"./tags/双系统/index.html"},{"revision":"9673bdf2c789d2f6321ab5d8487fa2f0","url":"./tags/数据结构/index.html"}], {
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
