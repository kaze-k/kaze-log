const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"db8cf47c8339306a8ae6a2a7e2179792","url":"./404.html"},{"revision":"86066a2005eeb0cc6d9ea2f7a187ba08","url":"./archives/2023/03/index.html"},{"revision":"50cc7af6b1ba6d2401868a8a1abd6a72","url":"./archives/2023/04/index.html"},{"revision":"8bf4a91838a57755577c6d4a8c8d82a8","url":"./archives/2023/index.html"},{"revision":"50808cd98476e5f06f7d8971aac3144b","url":"./archives/index.html"},{"revision":"74033caa7c0eba99945899dc25bc5223","url":"./bangumis/index.html"},{"revision":"c41ae9b8bbb76d6e59239d4d1ce9a140","url":"./bing.json"},{"revision":"08a1e6b6367d59c63420d6484afc871b","url":"./categories/index.html"},{"revision":"d418a0c242c6e199fdf688c103be9479","url":"./categories/学习笔记/index.html"},{"revision":"fba1b4d852aabea3b6a330cf47953c78","url":"./categories/工具/index.html"},{"revision":"96c1aae9888129435ff1d449890f74eb","url":"./categories/系统/index.html"},{"revision":"01a32ebb255786bc44cd1cb0dc0623cf","url":"./cinema/index.html"},{"revision":"09ed3c484f47af6eee4134157708c3ae","url":"./css/custom/weather.css"},{"revision":"839779f0a64ede219b78636a008bb41d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"2e1b7835adb39087166c3c133853f5e0","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"ebe7a31127a33fe70ab90de03dc0e439","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"44462ba75ef799788a96e17cd45f9a3d","url":"./posts/19711/index.html"},{"revision":"865680851bcac22d83c14d797301304b","url":"./posts/21725/index.html"},{"revision":"a99037e595d02b340e0f4d0cdaa4b238","url":"./posts/33107/index.html"},{"revision":"733c742fab70a9ce883991bd0acc49ac","url":"./posts/33510/index.html"},{"revision":"27c9ed8c6b589c5666dc94c0d84fe78d","url":"./posts/33511/index.html"},{"revision":"705937a89b36b1e069a8df91b7df3520","url":"./posts/3603/index.html"},{"revision":"ddf888c965f1c683e04db502593c66e5","url":"./posts/50888/index.html"},{"revision":"78947da2cb4c4f10ce43cb25c7b95380","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"1cfa950c9e4d240fa060ce2d23f524eb","url":"./search.xml"},{"revision":"7ece4e17a59b35d446f76b2237537a25","url":"./sitemap/sitemap.xml"},{"revision":"e524dbe7c2baf80388575606522d61de","url":"./tags/Arch-Linux/index.html"},{"revision":"108cd3d4af56a2d786548722ee3d5e42","url":"./tags/index.html"},{"revision":"96b23dedf8971be59125446d9bcd2d8c","url":"./tags/JavaScript/index.html"},{"revision":"247b78519d4a3e5c46ff4663d40f576d","url":"./tags/Linux/index.html"},{"revision":"fcc24c95416fa1d311265c29e026cc72","url":"./tags/Windows/index.html"},{"revision":"c0e19a95227bfaf46395d0ee0a2e6e54","url":"./tags/双系统/index.html"},{"revision":"f80cc0ff6a2af38adfb2e9e69b8f7080","url":"./tags/数据结构/index.html"}], {
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
