const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"7bda99bde8abac3501135ca315e76d33","url":"./404.html"},{"revision":"10db206b2f530e4f50233a6aafaf04e8","url":"./archives/2023/03/index.html"},{"revision":"7b5fa9fd9835914a515eea87f949e526","url":"./archives/2023/04/index.html"},{"revision":"00899d2652a1f3ab1c305f16e4020e9b","url":"./archives/2023/index.html"},{"revision":"4c1675ade140efecdf222986a87892d3","url":"./archives/index.html"},{"revision":"9ded3f6a6d0d9d70001b72036e0ec06d","url":"./bangumis/index.html"},{"revision":"a3bbbd1b97045412f3232dee18ca4d39","url":"./bing.json"},{"revision":"ab08c3fc7206cf545fef3e980ee07b02","url":"./categories/index.html"},{"revision":"bb394b5f626885e3a5623059cd5fdf85","url":"./categories/学习/index.html"},{"revision":"43a0e8e5702a69823421dbbe8e31401c","url":"./categories/系统/index.html"},{"revision":"f3bf5448b7cb1bd97234445620eb2108","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f98dc9b1e90c465c0c635df0a13166ea","url":"./feed/atom.xml"},{"revision":"f8a4a67f1f13195eb533afa2462afc74","url":"./feed/rss2.xml"},{"revision":"683d0553b5f85a976bfe85db2ffd9c3a","url":"./index.html"},{"revision":"5643b4af2c5a66aa15ac760f2e9762e4","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"2835b57e4d3a096c300012924e5f8a92","url":"./posts/33107/index.html"},{"revision":"4e9d0a7c5ad9012a43d911b122a59503","url":"./posts/33510/index.html"},{"revision":"333c5ab2ae6a8310361e7369751e1516","url":"./posts/3603/index.html"},{"revision":"8abcaadabdca17e8f8668a0a0e0c1ef7","url":"./posts/50889/index.html"},{"revision":"6f302bcc0befa3920495abee8b33899a","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"d63779351e6864cdbc2b755144a95953","url":"./search.xml"},{"revision":"973b211e5da3fc226cb1641059e56c5d","url":"./sitemap/sitemap.xml"},{"revision":"c081ddf047b2d54bd1f2eba86bcc8d40","url":"./tags/index.html"},{"revision":"ac8c1a63264a550448144b437dacdc29","url":"./tags/Linux/index.html"},{"revision":"843829b05f7728de9ee802b6660ce11c","url":"./tags/windows/index.html"},{"revision":"31130549b2efc4812db162a54ea7271e","url":"./tags/双系统/index.html"},{"revision":"920621c098d49d77f837c02ec607165f","url":"./tags/数据结构/index.html"}], {
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
