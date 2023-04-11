const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a24ccf9907c51349ba69ed42a0f21710","url":"./404.html"},{"revision":"fdf69834b88c3b6aff02913d4cc829ca","url":"./archives/2023/03/index.html"},{"revision":"2be330f190ff926116e23c5a0274f406","url":"./archives/2023/04/index.html"},{"revision":"6fd1bdd369a2c08ce72c07b2ff53e487","url":"./archives/2023/index.html"},{"revision":"5b7a1f879af6507e90de6073c8e46ced","url":"./archives/index.html"},{"revision":"3e2e808acf6223684aabfb3e2b68d719","url":"./bangumis/index.html"},{"revision":"c41ae9b8bbb76d6e59239d4d1ce9a140","url":"./bing.json"},{"revision":"cbc316aefa5b7d2bb001fb30cd59b6b8","url":"./categories/index.html"},{"revision":"baad8b0072ea82f477ecb963f66a939e","url":"./categories/学习笔记/index.html"},{"revision":"5e20874a5826ac485471153d49f649b6","url":"./categories/工具/index.html"},{"revision":"e6e0224307bd8b4715295139d695eb32","url":"./categories/系统/index.html"},{"revision":"063fc96d538ee4c986d529531a4e1269","url":"./cinema/index.html"},{"revision":"53164529b4dd7325ba99d2e159aa14c3","url":"./css/custom/weather.css"},{"revision":"60b3c248d9c79b50fda884b477a273d0","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fe1872eaa80945d01096566b41ee3390","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"aa9e27b4348e5b5ed0b2c7d1ad9df274","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"ebe7a31127a33fe70ab90de03dc0e439","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"b2befbc932dd80ca042b9c757272737b","url":"./posts/19711/index.html"},{"revision":"63a804146d412f64efe1c3de87841b00","url":"./posts/21725/index.html"},{"revision":"e6dfd3bf2047f92052117a353dcbf588","url":"./posts/33107/index.html"},{"revision":"0ede31b8e3332bcee08b157698223d41","url":"./posts/33510/index.html"},{"revision":"216c00a50ed87d603ada9b8dbad89a0d","url":"./posts/33511/index.html"},{"revision":"3f060fb03024ce9c7edd00f150615641","url":"./posts/3603/index.html"},{"revision":"1cb0e7a82fbdf77151ec081b2fc064c8","url":"./posts/50888/index.html"},{"revision":"d1988e4a834a77451b680469db55a73a","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"c6a28d4b75b75836d958a5179fd01708","url":"./search.xml"},{"revision":"b493da3624f8ea17a2e869c279bbf83e","url":"./sitemap/sitemap.xml"},{"revision":"b01b943d7bb060ad6c08c2f2bd0a058d","url":"./tags/Arch-Linux/index.html"},{"revision":"bd636b5ec51f4ebd549830e5a7f920d0","url":"./tags/index.html"},{"revision":"205d698db7474120d65eeae5ffddc56d","url":"./tags/JavaScript/index.html"},{"revision":"87b7530455893876611c8e4d2ce602ee","url":"./tags/Linux/index.html"},{"revision":"93d2784ddfb2804c57b7a1149156f0e7","url":"./tags/Windows/index.html"},{"revision":"037d4be919e77e0703ed7bd75de39490","url":"./tags/双系统/index.html"},{"revision":"4d3ef4db96b0f8e23fb0a330e97d833b","url":"./tags/数据结构/index.html"}], {
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
