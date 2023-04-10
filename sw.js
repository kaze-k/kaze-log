const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f74b6f06974fbd22201d57571bd65316","url":"./404.html"},{"revision":"23d637619c68ba217a7ae8137755a751","url":"./archives/2023/03/index.html"},{"revision":"c91ebf8e6bb5e50168db56066fa2fdb2","url":"./archives/2023/04/index.html"},{"revision":"265362db1898b7046f5a80e3324a5594","url":"./archives/2023/index.html"},{"revision":"4e708e9f066948fdafb3d39e7508eb99","url":"./archives/index.html"},{"revision":"8d6a223b7b4ffb925c4c7653807e3fa7","url":"./bangumis/index.html"},{"revision":"930e81bec0d619a7cbce3cb1d66a999b","url":"./bing.json"},{"revision":"1297fa5d6a16e4456b5c9382f0f6cdd1","url":"./categories/index.html"},{"revision":"c939bd13b3d62f2c2b72128c47e6e49f","url":"./categories/学习笔记/index.html"},{"revision":"6fa12814df89d8e7c6167e8d6f628f56","url":"./categories/工具/index.html"},{"revision":"1362953858e77bd5aeabfb284aa7ebf7","url":"./categories/系统/index.html"},{"revision":"46a955de8b0ae09aaad62b9c75cee56e","url":"./cinema/index.html"},{"revision":"1273de40b80975cef32a2a35a8e62cdb","url":"./css/custom/weather.css"},{"revision":"514103f349a25772013d4bc0567ae80c","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fe1872eaa80945d01096566b41ee3390","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"4676ca4bf8551c83193f7efef36ef63a","url":"./index.html"},{"revision":"1b8532b09255e11105417087abe1c333","url":"./js/custom/animation.js"},{"revision":"779fe091f456b25679960d384f7fb6c1","url":"./js/custom/title.js"},{"revision":"5ac1ac05903c748253d805c3943e7681","url":"./js/custom/weather.js"},{"revision":"856ad5b79a88f5da2fef10a51aa4a195","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"9684259a7ad0dc1b885368977f4574b4","url":"./posts/19711/index.html"},{"revision":"2bd49db02346ea46a9541f566a6da030","url":"./posts/21725/index.html"},{"revision":"69ecda9977434d3f1c0af72cf09205c8","url":"./posts/33107/index.html"},{"revision":"820c2c410cd11e52c7b0afd34c5423dc","url":"./posts/33510/index.html"},{"revision":"78a436f45e1c389dd9fd7a0fcc970952","url":"./posts/33511/index.html"},{"revision":"a422d31c72e552b81a3d8979c11ee482","url":"./posts/3603/index.html"},{"revision":"efe617024ac1721a57937de6cb1e9936","url":"./posts/50888/index.html"},{"revision":"223f823991b758702815b89c77a960c9","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"c6a28d4b75b75836d958a5179fd01708","url":"./search.xml"},{"revision":"4bb2d0a7418dace7b2f429e7d71f9680","url":"./sitemap/sitemap.xml"},{"revision":"c4573beddfaf7d9187397d3eea5d45ab","url":"./tags/Arch-Linux/index.html"},{"revision":"42283e8bde29975556e1b632ea87e96b","url":"./tags/index.html"},{"revision":"eda4d5b7dafa257a065cbd9645259d38","url":"./tags/JavaScript/index.html"},{"revision":"fe9aaad1f4a7772a4b6daa11ddf6bfe9","url":"./tags/Linux/index.html"},{"revision":"804f39c318c0ac055f4c8d62f0a22768","url":"./tags/Windows/index.html"},{"revision":"97a3691134db7848e36a21fa5cf1dcb9","url":"./tags/双系统/index.html"},{"revision":"bf6d0066c20e0939ab93ef28bf512334","url":"./tags/数据结构/index.html"}], {
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
