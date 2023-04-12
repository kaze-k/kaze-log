const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5b4ccc4f372a6604cd5a8ae3e8e27955","url":"./404.html"},{"revision":"0b9120a12cfd62e34b556036fc02617d","url":"./archives/2023/03/index.html"},{"revision":"19803bcd6b3e4532ef350a92ad2a9d4a","url":"./archives/2023/04/index.html"},{"revision":"d3bf3c7d8e4cf33efa33ddec464b9b70","url":"./archives/2023/index.html"},{"revision":"d3997e53ecf1d4d1ce9ca6cfa102af5e","url":"./archives/index.html"},{"revision":"fc1d4f0e7eb457fce06840147d52bd77","url":"./bangumis/index.html"},{"revision":"930e81bec0d619a7cbce3cb1d66a999b","url":"./bing.json"},{"revision":"c73bdea6c0ee311e0707e4d55cf77ca6","url":"./categories/index.html"},{"revision":"bdb2cb6863b139bdaadd63be00e42991","url":"./categories/学习笔记/index.html"},{"revision":"07d0b515d4cf0a81670bf807887c26c5","url":"./categories/工具/index.html"},{"revision":"be8c863a5588aece242350935688807a","url":"./categories/系统/index.html"},{"revision":"53128e2ce5a9ae2e20d57ed99bd737ae","url":"./cinema/index.html"},{"revision":"093bcacf9bff9df0e68675190d533f35","url":"./css/custom/weather.css"},{"revision":"dd4e9aadb14d8d27906272901d80066c","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fe1872eaa80945d01096566b41ee3390","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"ac587455ac3ac8eede9bd45848c6aad1","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"aa30e6a684724465371f6824bcee49f4","url":"./js/custom/screenfull.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"4a5133a9e35e8510466acae2b08e5eb0","url":"./js/custom/utils.js"},{"revision":"f02847d15fb4929333480cc0886b17e8","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"273532e105e65a7b43a0e83f63de5fa6","url":"./posts/19711/index.html"},{"revision":"d752d08e7a03b22938a5869d56382a71","url":"./posts/21725/index.html"},{"revision":"8ada0cf2670686c2eb99040a45c7b0bc","url":"./posts/33107/index.html"},{"revision":"cb23ca5241250d0698a763b17e139e24","url":"./posts/33510/index.html"},{"revision":"8cb9d8a58059ac43c403b9615fad6faf","url":"./posts/33511/index.html"},{"revision":"c6ec9d7140a90baaeabc4654438477e5","url":"./posts/3603/index.html"},{"revision":"f2cd34aa54f47e31749f01145f15f5ce","url":"./posts/50888/index.html"},{"revision":"823804365fb2aaab6435301d21f8fbbc","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"c6a28d4b75b75836d958a5179fd01708","url":"./search.xml"},{"revision":"77ce7ac7fc0f23e405932d76e5c5e0a6","url":"./sitemap/sitemap.xml"},{"revision":"4d8573b942f4bf4477f7a8a28359b179","url":"./tags/Arch-Linux/index.html"},{"revision":"a47a4266d792cdaad8d29767bc3c529b","url":"./tags/index.html"},{"revision":"64e3faf02e388b645aba176f51b2adba","url":"./tags/JavaScript/index.html"},{"revision":"0e037a79f73356b127207eebefcf4d4b","url":"./tags/Linux/index.html"},{"revision":"09642b42b148d35007b42654012844bf","url":"./tags/Windows/index.html"},{"revision":"2a0378f1e5df52725b504ec32d0b4e2a","url":"./tags/双系统/index.html"},{"revision":"6f51e8c25caf858015139c257b8561e7","url":"./tags/数据结构/index.html"}], {
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
