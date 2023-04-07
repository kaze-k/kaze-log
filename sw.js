const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"7bec8ad88e7bef60180124c663913123","url":"./404.html"},{"revision":"62aaeacbd583838eeaaee37b602e754c","url":"./archives/2023/03/index.html"},{"revision":"c9097ddea183c4c093622176358b1c7f","url":"./archives/2023/04/index.html"},{"revision":"8285c457f1ebfbfc34ac9ffe754c53a0","url":"./archives/2023/index.html"},{"revision":"6a6a89966214d0f88dd496c2918d0355","url":"./archives/index.html"},{"revision":"631616560eb68de2009eb53bc5ddb14e","url":"./bangumis/index.html"},{"revision":"d7885514b6f86233433ec0247aa91efc","url":"./bing.json"},{"revision":"645aa91670ab2309038a5ac8e1bb1eac","url":"./categories/index.html"},{"revision":"554a6a6c9fc3f899ab04b3d7270b1b2a","url":"./categories/学习笔记/index.html"},{"revision":"5d6c40679c7ede5d23a17d55dce4207f","url":"./categories/工具/index.html"},{"revision":"2f13d3df731497b7537bb30fa5d1c7d4","url":"./categories/系统/index.html"},{"revision":"fdc61dd817b370557674125abb3d24f9","url":"./cinema/index.html"},{"revision":"e1d95e2ebd7741e69664e6cd229574a5","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5050a977d6bd7c10b4e489f191e78c97","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"d515c7ef84817e8e2fdfdc68a32c9247","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"35a8c645b58226982c778a384a0a5567","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"d7898183e7b30a6449bf41bb57928d04","url":"./posts/19711/index.html"},{"revision":"192bb9540798a52f6bb9354f4b9fbdb5","url":"./posts/21725/index.html"},{"revision":"0c2776b0d33b87c3a881dfa527d811a0","url":"./posts/33107/index.html"},{"revision":"d77c2397abe34e71870799087b3df0ec","url":"./posts/33510/index.html"},{"revision":"99edc8c2f8c745c91267c8cff495df8b","url":"./posts/33511/index.html"},{"revision":"68690b08ff66f13401b3355f57283183","url":"./posts/3603/index.html"},{"revision":"7e61b289a34afce18e0d28676107a16f","url":"./posts/50888/index.html"},{"revision":"f2ab7845741868efb824c3796a48c71d","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"3b2bb423b7a9f3460a11f65fbefb57e3","url":"./search.xml"},{"revision":"6d5e2b13d0a1f8f0d35dd521a06fcb2f","url":"./sitemap/sitemap.xml"},{"revision":"9d31cf527e1294e18378648590dabd7b","url":"./tags/Arch-Linux/index.html"},{"revision":"5120461434815c15a5490c1cb84c5939","url":"./tags/index.html"},{"revision":"530b67b7c51ec80e637482b29d3bf107","url":"./tags/JavaScript/index.html"},{"revision":"3e40df0157335c32f9881a2567995ce6","url":"./tags/Linux/index.html"},{"revision":"d1a60021824b22ab1d45d3361a82ce80","url":"./tags/Windows/index.html"},{"revision":"c2c574e0676c25a61249b2b624d55eb9","url":"./tags/双系统/index.html"},{"revision":"d8ace547685de11c68b3357ae8ce1b40","url":"./tags/数据结构/index.html"}], {
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
