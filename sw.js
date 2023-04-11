const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"779fdff860136ccb5ff55bc2063641a2","url":"./404.html"},{"revision":"b05ae0e26b5b478f17690752c5feadcc","url":"./archives/2023/03/index.html"},{"revision":"55438a526ec5d3c631b8959f5dad0970","url":"./archives/2023/04/index.html"},{"revision":"011dfed14c42d795fc2e405f0db18a3b","url":"./archives/2023/index.html"},{"revision":"d2be6a4a0ed9ddefd68c308116ce8fec","url":"./archives/index.html"},{"revision":"9bdfa694b8b58484f1eaaff5b2d07346","url":"./bangumis/index.html"},{"revision":"c41ae9b8bbb76d6e59239d4d1ce9a140","url":"./bing.json"},{"revision":"e4b975a1433017510fcc5308409b395b","url":"./categories/index.html"},{"revision":"3d8665537a6fe33216adf4991a5140dc","url":"./categories/学习笔记/index.html"},{"revision":"837b4e184762cfd8df84aebd97e76059","url":"./categories/工具/index.html"},{"revision":"b02ef2d54492a628c5da130a4abed420","url":"./categories/系统/index.html"},{"revision":"30e05d2c8a91ec51e00e68837c136f5e","url":"./cinema/index.html"},{"revision":"7ca356f9c8aac4253cb8c73c32b940be","url":"./css/custom/weather.css"},{"revision":"362203ff269491b0ab5b244b91876545","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"0b1ffaba3d1e753b1ca8bc0f44a8a30d","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"ebe7a31127a33fe70ab90de03dc0e439","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"52cf185a24c46518e257dc4a19831076","url":"./posts/19711/index.html"},{"revision":"a4f8f0c856db67be649d4a0ed2b996ae","url":"./posts/21725/index.html"},{"revision":"9a6f08200ecbed8c8182f3f8fa7dbfe0","url":"./posts/33107/index.html"},{"revision":"3dfe0c6de3aedabc74725ffdf07c1f17","url":"./posts/33510/index.html"},{"revision":"86d33f4b07cdb1a28317dfe8b7408d33","url":"./posts/33511/index.html"},{"revision":"dd1d2c51e6c5b45b2c0faa7b5fb53a8d","url":"./posts/3603/index.html"},{"revision":"6d1c9cab3851f8f33d2dc0205ef63276","url":"./posts/50888/index.html"},{"revision":"c9dee4d3aa9ae2a9a54e2de943d5c731","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"fec8ee441e7a8f03ac5e18592026a218","url":"./search.xml"},{"revision":"c7862b8887896e1c8b6202688c25d10a","url":"./sitemap/sitemap.xml"},{"revision":"aa94c83ebf78db87a32f019bc34175d7","url":"./tags/Arch-Linux/index.html"},{"revision":"a0a75c53a5cb1a6dd47fd15cb52162db","url":"./tags/index.html"},{"revision":"eedadcf251bcb6397e8aa55ecff7ed26","url":"./tags/JavaScript/index.html"},{"revision":"3fd9fae7c1a4baed5bceb2d4450d776f","url":"./tags/Linux/index.html"},{"revision":"3c89b843e0776ea5f182ee1a3ca3a220","url":"./tags/Windows/index.html"},{"revision":"2206f39f497850cf312843ba535bdcd4","url":"./tags/双系统/index.html"},{"revision":"c0b4484ea42bce0709bef1b5ad0253f8","url":"./tags/数据结构/index.html"}], {
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
