const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ab00278a59f7ae28cbeefcf4ee9336ea","url":"./404.html"},{"revision":"e5fe42533a857468c35024f8d48160c2","url":"./archives/2023/03/index.html"},{"revision":"fdbf899baccbe178204282433f8a48a2","url":"./archives/2023/04/index.html"},{"revision":"574d2dd4c18273c4b7607c855fc5d7ca","url":"./archives/2023/index.html"},{"revision":"2e71a9e9f5411623cbc64c8bc71bbae5","url":"./archives/index.html"},{"revision":"3796089ebc0f93e6fac75d3c84fd277a","url":"./bangumis/index.html"},{"revision":"a3bbbd1b97045412f3232dee18ca4d39","url":"./bing.json"},{"revision":"3aca120804e0e91cd467364e58e994da","url":"./categories/index.html"},{"revision":"65c73c80b4b99b39c4940ec1892617ef","url":"./categories/学习/index.html"},{"revision":"07cab08325499edb1692501dfa21dbc6","url":"./categories/系统/index.html"},{"revision":"3a2d42574d46f21ef07cdd0a5b4f1096","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"75d8180917ba79191a503ed62675b7e0","url":"./feed/atom.xml"},{"revision":"cddc1e7ec68f75fe7dfc736e58a7de69","url":"./feed/rss2.xml"},{"revision":"a686d99e37f3a37623feace501fc8fd8","url":"./index.html"},{"revision":"5643b4af2c5a66aa15ac760f2e9762e4","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"ae8de8d7f2a7d0df0e14eed0b6ca8303","url":"./posts/33107/index.html"},{"revision":"f10488867993f06dbf0dbdd81261bf3f","url":"./posts/33510/index.html"},{"revision":"9783dc708003bc1b4da7df41f3d732dd","url":"./posts/3603/index.html"},{"revision":"49bdca3e9a3cd2cdd31a960e40f8cf07","url":"./posts/50889/index.html"},{"revision":"42f78c74bbdcf6c1b26bf72e0931bf13","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"8b0d3cf9c49b3b21bd798608473f72c5","url":"./search.xml"},{"revision":"513dac517772c0000bb729621d1b3095","url":"./sitemap/sitemap.xml"},{"revision":"5a4fd5343536c11fdb536ac52edc8f51","url":"./tags/index.html"},{"revision":"81333fddd1f1c3fad22be1c038e3abde","url":"./tags/Linux/index.html"},{"revision":"89fcf021095ab9653c3ead14d4d10374","url":"./tags/数据结构/index.html"}], {
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
