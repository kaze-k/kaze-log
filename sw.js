const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"2fe404173446c1fb79e16fc1da470498","url":"./404.html"},{"revision":"9c0f09cf4bc823c9d3b57c5b2eee4b08","url":"./archives/2023/03/index.html"},{"revision":"c0602ff58a4daf9c3690df64f64c9564","url":"./archives/2023/04/index.html"},{"revision":"f65a4733e9bafed3bc2e4b24c8c5dc69","url":"./archives/2023/index.html"},{"revision":"c891937587db2e6b85d822b58e8fa5c5","url":"./archives/index.html"},{"revision":"0d101e88b0702ae5dc4c94cfff714317","url":"./bangumis/index.html"},{"revision":"9bddd4078dcf8ddf69f0547caec560a1","url":"./bing.json"},{"revision":"5c6c7322bd944d22da7656b2296767ea","url":"./categories/index.html"},{"revision":"90b67630379605234ac3345cbe0090aa","url":"./categories/学习/index.html"},{"revision":"3b11bf678ad64adade0799a1f17705f2","url":"./categories/系统/index.html"},{"revision":"ba8e24c5bc09173bf5ec254828beecb8","url":"./categories/项目管理/index.html"},{"revision":"1d9c1253d19ec3d5f32acab8b843e88b","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"feb19507261b14ab6c837d31ac176b83","url":"./feed/atom.xml"},{"revision":"fb0283b763a157fefcc95e7d521fd9f8","url":"./feed/rss2.xml"},{"revision":"8e169e7433a5a543c8a135832cf08677","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"c2eb70cad7dc19f111da0e1f285d75f2","url":"./posts/19711/index.html"},{"revision":"310bde8b1b394f512083049a886361e5","url":"./posts/21725/index.html"},{"revision":"6b5a90d0ef90a8cb2f987de902dc55ef","url":"./posts/33107/index.html"},{"revision":"56c6284ccad5c16a4ac63a74704d16fa","url":"./posts/33510/index.html"},{"revision":"f96ce7d1c3b32f7a6a89a93ec240f965","url":"./posts/33511/index.html"},{"revision":"a182c6cc02068f15937da8520cd01af3","url":"./posts/3603/index.html"},{"revision":"92558fe1118a0af68db47cd9be9d6f1c","url":"./posts/50888/index.html"},{"revision":"029d874e408c0639e567291371108af2","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"345bf3ff6ece25b21b8a7fddea9c260f","url":"./search.xml"},{"revision":"fb05f244b87e84777f68bb5d67346e28","url":"./sitemap/sitemap.xml"},{"revision":"b4ef5896b7eefd33159392a7216dd8cf","url":"./tags/Arch-Linux/index.html"},{"revision":"5e5a12c450b858956749c52f81a2ddd5","url":"./tags/index.html"},{"revision":"cbbbfbc1f2d6be67000cf37e1bbfa82a","url":"./tags/javascript/index.html"},{"revision":"588d4ce374311131289aa5ecec89e4ac","url":"./tags/Javascript/index.html"},{"revision":"d996e8db82c65b476e633ef922ea138c","url":"./tags/Linux/index.html"},{"revision":"cbfe0bbbda9ca02c65c09f0d4ebc5682","url":"./tags/Windows/index.html"},{"revision":"9162958473c295aabc073657d40744c2","url":"./tags/双系统/index.html"},{"revision":"0e2578f87eba242c5ee30877f95ce9cf","url":"./tags/工具/index.html"},{"revision":"303904bfe39c284ae48ab2082443e82e","url":"./tags/数据结构/index.html"}], {
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
