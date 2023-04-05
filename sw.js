const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"abcdb93ddbae5f3aa3a488db9cf605cb","url":"./404.html"},{"revision":"9ec17f9f12bf85d32b6800c73cae378e","url":"./archives/2023/03/index.html"},{"revision":"6c19fcf116f335c4e64159e4c90cb4c0","url":"./archives/2023/04/index.html"},{"revision":"af92f5594a4faecb3c7112c84788cc6e","url":"./archives/2023/index.html"},{"revision":"6136b3ecfa96ceaa2796223614916f84","url":"./archives/index.html"},{"revision":"b5adcd998d23b52bb2a47dfff34a4707","url":"./bangumis/index.html"},{"revision":"7c6b539ffdb0b4e7723fe13ef45e6888","url":"./bing.json"},{"revision":"7c7eea0efac22a607660c5ab13d03899","url":"./categories/index.html"},{"revision":"8654dd14150833ca6ae89672e36e428b","url":"./categories/学习/index.html"},{"revision":"cb6dda32c5fdc5a43a00238f00d5fdb2","url":"./categories/系统/index.html"},{"revision":"d24abe3bb2bb8f83b06ac3d661a8e166","url":"./categories/项目管理/index.html"},{"revision":"d946c93b2cb3045ec4fec3daacb04938","url":"./cinema/index.html"},{"revision":"7469edfedf70ed8cf6930905dc9350f3","url":"./css/index.css"},{"revision":"f1c442afb181c5d2f9d01d0bb711a727","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"625ac4395aeb8fb575568e6516dfdcca","url":"./feed/atom.xml"},{"revision":"aeb515526569e7173c273692ca50c257","url":"./feed/rss2.xml"},{"revision":"3c9d8ff89afe58be3bc348603322517a","url":"./index.html"},{"revision":"37ea4552f6d5a1baecfbe23d9caed673","url":"./js/custom/animation.js"},{"revision":"054accfc17a50e94cea58991112883bc","url":"./js/custom/title.js"},{"revision":"19178af542654ff076e5a64ba5b5619b","url":"./js/custom/weather.js"},{"revision":"0fa555adf3fa73065411da699913ba58","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"852b74cdc978af6cac0318b2b0c0a248","url":"./posts/19711/index.html"},{"revision":"271902c10f80ad023685a5e324b50263","url":"./posts/33107/index.html"},{"revision":"4d09a8ea1ecbf0e850b77d4f0dcb9ec6","url":"./posts/33510/index.html"},{"revision":"c7a9cb2854d26b3f87e36ba7c73e0fa5","url":"./posts/33511/index.html"},{"revision":"b655804efb27ee05abb0905cca0a83c3","url":"./posts/3603/index.html"},{"revision":"bda1a06c84943ec628ccc6cccae41d78","url":"./posts/50888/index.html"},{"revision":"54d351f70d61365545b7c454f87f5c1a","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"daf233e72c0212461ea3b9598495c254","url":"./search.xml"},{"revision":"3e4821373e2a8226169615895393741c","url":"./sitemap/sitemap.xml"},{"revision":"66cc056e1696e3b7d32795104fb4b64a","url":"./tags/Arch-Linux/index.html"},{"revision":"56850837d1f755e53de56283656bb00f","url":"./tags/index.html"},{"revision":"f26180fc79e823b639539dbc441522fe","url":"./tags/Javascript/index.html"},{"revision":"fef7fadcfbde1470de8250dcb725e1c9","url":"./tags/Linux/index.html"},{"revision":"4a537cb3bf20ae9927b5eb7858a00a4e","url":"./tags/Windows/index.html"},{"revision":"2e9ebbaa047aac916a35248aa724dcce","url":"./tags/双系统/index.html"},{"revision":"fdfb5ec1596ea24c03b1faea072ef5cf","url":"./tags/工具/index.html"},{"revision":"34f52b913c275d839fa5b9ddf5abbf35","url":"./tags/数据结构/index.html"}], {
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
