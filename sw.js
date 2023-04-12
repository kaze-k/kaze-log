const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"fce623ddac59f17409a2d60192c58b4d","url":"./404.html"},{"revision":"3a716e6ecec8f47474dcc429b16aeb30","url":"./archives/2023/03/index.html"},{"revision":"fdf28b55fe21b4113538e4843a58b57e","url":"./archives/2023/04/index.html"},{"revision":"63b5ce301ac136c5a106cd70a316983b","url":"./archives/2023/index.html"},{"revision":"e62e15745cf2ccdf6421c0c4093c9e58","url":"./archives/index.html"},{"revision":"1d8c29751afcf9e756fc8e931f47c55e","url":"./bangumis/index.html"},{"revision":"ffc2810e80746254f0cafa3c982de092","url":"./bing.json"},{"revision":"6195f9c16373e68d3935e330ae6273ec","url":"./categories/index.html"},{"revision":"318b208f1199b3250a7c623c161c8846","url":"./categories/学习笔记/index.html"},{"revision":"cd442b9db4159db2ee9f73ba94d1451a","url":"./categories/工具/index.html"},{"revision":"940cc05556facaeaca11e2d17e5acbe0","url":"./categories/系统/index.html"},{"revision":"b011d7b14c604fc68a18fe8c5b647911","url":"./cinema/index.html"},{"revision":"093bcacf9bff9df0e68675190d533f35","url":"./css/custom/weather.css"},{"revision":"dd4e9aadb14d8d27906272901d80066c","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fe1872eaa80945d01096566b41ee3390","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"f1b1ad7db2011d7b636af88957ebbd3b","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"aa30e6a684724465371f6824bcee49f4","url":"./js/custom/screenfull.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"44aabb8a60075e7a5e4a258685044d2a","url":"./js/custom/utils.js"},{"revision":"f02847d15fb4929333480cc0886b17e8","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"5c9227e159224eb73203a380de151cb6","url":"./posts/19711/index.html"},{"revision":"ca81429753041c6ecb99f9c116f88c18","url":"./posts/21725/index.html"},{"revision":"868b51b0dbbbbe38fd045d6f9eaf659d","url":"./posts/33107/index.html"},{"revision":"6a4a40d5d4692c6e8a480c8fac2d8c10","url":"./posts/33510/index.html"},{"revision":"b822967f2acba69120786a112e83af0d","url":"./posts/33511/index.html"},{"revision":"4e6f3f0bf97d3759a6cfec949c395c58","url":"./posts/3603/index.html"},{"revision":"4012c5e75800101a669330aa428f324e","url":"./posts/50888/index.html"},{"revision":"1cf250c8e6c65e5532624c8a9bfc965e","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"c6a28d4b75b75836d958a5179fd01708","url":"./search.xml"},{"revision":"7ce66fe0e942699dfe88e2b1f939b5f4","url":"./sitemap/sitemap.xml"},{"revision":"4a1f1bb884da708ced9362cb5a95d522","url":"./tags/Arch-Linux/index.html"},{"revision":"6211dee60d0d402b252ada21517c9e60","url":"./tags/index.html"},{"revision":"9e180206d7d40f41482dcd2547b6b2e4","url":"./tags/JavaScript/index.html"},{"revision":"29ab4f63d8671c69cc585399195baed3","url":"./tags/Linux/index.html"},{"revision":"0501f155fd0ddd70b994c56b7ac057f5","url":"./tags/Windows/index.html"},{"revision":"b2b3c6e0932f9c1766a8dd8188b06963","url":"./tags/双系统/index.html"},{"revision":"c950cb305a655d4cab0e03e149778d14","url":"./tags/数据结构/index.html"}], {
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
