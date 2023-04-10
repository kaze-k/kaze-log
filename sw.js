const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5b203cd7f9b52c01acfd4b9048ce2bf9","url":"./404.html"},{"revision":"b24c8e920e17c90c4f1f71bd7f1fad9c","url":"./archives/2023/03/index.html"},{"revision":"85a9fc223033b9229050df5c4935d575","url":"./archives/2023/04/index.html"},{"revision":"9782014b94baa22db77ad70a7c063578","url":"./archives/2023/index.html"},{"revision":"9f19314c0d294c5abde6caf80de0fccf","url":"./archives/index.html"},{"revision":"c947d0ea37cdc1a1c33ae1fb523e14c6","url":"./bangumis/index.html"},{"revision":"c41ae9b8bbb76d6e59239d4d1ce9a140","url":"./bing.json"},{"revision":"25fee7d7e32c3d13ec37049c5f4c885c","url":"./categories/index.html"},{"revision":"0358c4f65c8ac60d379692414c22f27b","url":"./categories/学习笔记/index.html"},{"revision":"9a7bf4d25579d5d8200f18363bfb46b2","url":"./categories/工具/index.html"},{"revision":"83ab46dec3330c4e9894275da337a504","url":"./categories/系统/index.html"},{"revision":"5ebb668e088b147a0048497f27d7f1e2","url":"./cinema/index.html"},{"revision":"53164529b4dd7325ba99d2e159aa14c3","url":"./css/custom/weather.css"},{"revision":"cebf64448846062d35b1560afa3f074f","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fe1872eaa80945d01096566b41ee3390","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"fa545a7f0c5ba302adffc944bbe16767","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"6390360ff920e79caabab2ce9d5ac0f7","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"6b85df71c4b452a7904805699bb2645b","url":"./posts/19711/index.html"},{"revision":"a327deb7540c6bc9a0543b689f139b1d","url":"./posts/21725/index.html"},{"revision":"b2d52bff0ca836893d19578d8eb55bfa","url":"./posts/33107/index.html"},{"revision":"dafebeec0068bd091499309d357a6c86","url":"./posts/33510/index.html"},{"revision":"624bff6345ae2489f843ce140416920c","url":"./posts/33511/index.html"},{"revision":"ae27e6b66456f0e9e57451ee1c435cee","url":"./posts/3603/index.html"},{"revision":"8cd66d4621a0b2290b46f13d55857026","url":"./posts/50888/index.html"},{"revision":"61253569899978ef0f51e50f41e3ddf0","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"3b2bb423b7a9f3460a11f65fbefb57e3","url":"./search.xml"},{"revision":"94196916aa793b6cbd707b06b371c79a","url":"./sitemap/sitemap.xml"},{"revision":"9b21b77b5310bc9026febba74548efa1","url":"./tags/Arch-Linux/index.html"},{"revision":"fff35f63d3e412bd6c73d968ed2aa3ea","url":"./tags/index.html"},{"revision":"5493121639863001c68cec287401abad","url":"./tags/JavaScript/index.html"},{"revision":"f006d988fd66b30ed9e1ec1e6f926f0e","url":"./tags/Linux/index.html"},{"revision":"d5cc43a62062a66218603bba36a1d26c","url":"./tags/Windows/index.html"},{"revision":"1f651628625d679bd0fcaf28f0a09d71","url":"./tags/双系统/index.html"},{"revision":"9dd4df20c9ee5dbdc031213a7e273c75","url":"./tags/数据结构/index.html"}], {
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
