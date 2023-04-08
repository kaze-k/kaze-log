const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b6b43daa73f9fd3caaef1943c0913a60","url":"./404.html"},{"revision":"65b9a6524c9a526fa8ab8528609ed18a","url":"./archives/2023/03/index.html"},{"revision":"4eeee7001a8a5db749764dd652bd512c","url":"./archives/2023/04/index.html"},{"revision":"65409fb01a49d153e01d688618464f09","url":"./archives/2023/index.html"},{"revision":"0b672306f3615ae2edea020a5226b080","url":"./archives/index.html"},{"revision":"0f875e59828b346028445a87cd02698f","url":"./bangumis/index.html"},{"revision":"32d712759bbf33b150ab723d27ec8933","url":"./bing.json"},{"revision":"9a663e30fdbffac818ca3d618122b75b","url":"./categories/index.html"},{"revision":"2c00967f43674c0bd2807e6793e942a0","url":"./categories/学习笔记/index.html"},{"revision":"242c6b62239eb18bd197bdcf3e050478","url":"./categories/工具/index.html"},{"revision":"462f6501cb7ae9f403c50f1be23fb238","url":"./categories/系统/index.html"},{"revision":"a42b55ecb0694bcfb21bf8b87d026c0c","url":"./cinema/index.html"},{"revision":"6de68f64d82ca708e0e056c50a45ff0c","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5050a977d6bd7c10b4e489f191e78c97","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"7e9f18817f63206188403d909eee1a1b","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"8433faf1ade65e4dd7765032572404c3","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"5cddf61ca85268e220a8c417b685175d","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"a3d28800711cceb97164e3c7bd873dd4","url":"./posts/19711/index.html"},{"revision":"bc22613ca86435cce2b255e46e9422d2","url":"./posts/21725/index.html"},{"revision":"356d60254133b1cde3fd65103995f7e9","url":"./posts/33107/index.html"},{"revision":"37db313d89bc8c232f9d1e1a63201351","url":"./posts/33510/index.html"},{"revision":"7df8786b4630d4421dab586d6d7136dc","url":"./posts/33511/index.html"},{"revision":"45812b3b909421c5592725e0ff67d429","url":"./posts/3603/index.html"},{"revision":"937db7718420af1e08c0b21efbe2f294","url":"./posts/50888/index.html"},{"revision":"9753c6dfc44b3480d98c2f0ea6939854","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"3b2bb423b7a9f3460a11f65fbefb57e3","url":"./search.xml"},{"revision":"9f1803d95011b4fda130a63739ca08e6","url":"./sitemap/sitemap.xml"},{"revision":"5c5da7d3c13bd19dfa4c8120683166cc","url":"./tags/Arch-Linux/index.html"},{"revision":"e33aeb9e7572d3da69dd4f3157d9f502","url":"./tags/index.html"},{"revision":"f70671de20d8f1b0c4303da3fed46ea4","url":"./tags/JavaScript/index.html"},{"revision":"9a63f81f62f907843ea48ab66e0a6771","url":"./tags/Linux/index.html"},{"revision":"611be6ede59b1e2cee9cdcc1666b229f","url":"./tags/Windows/index.html"},{"revision":"36d57efeacb9c080df51ba149aea0563","url":"./tags/双系统/index.html"},{"revision":"d10574ad2c24280adcc5be2394a7d32e","url":"./tags/数据结构/index.html"}], {
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
