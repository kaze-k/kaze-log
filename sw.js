const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e9033214b066c9d792d3873e952a6bb9","url":"./404.html"},{"revision":"875fcc406033192b530f687ba51dca24","url":"./archives/2023/03/index.html"},{"revision":"6b147df9b4f9f26b59858db339613a26","url":"./archives/2023/04/index.html"},{"revision":"c98553c069ce0a14d426655fb4e6b916","url":"./archives/2023/index.html"},{"revision":"a74e9a8ba248d4752835d5b48bd5b6f9","url":"./archives/index.html"},{"revision":"88bc9d85908c02b5f229965ec1365a22","url":"./bangumis/index.html"},{"revision":"930e81bec0d619a7cbce3cb1d66a999b","url":"./bing.json"},{"revision":"6684fa376005d8c07af781560bf853f2","url":"./categories/index.html"},{"revision":"aff5af1ccf025b5ae54d55689364626e","url":"./categories/学习笔记/index.html"},{"revision":"706ca9435de9f15780aebbeb31f97b8a","url":"./categories/工具/index.html"},{"revision":"86a4586e686cac392820d5cce1de5de4","url":"./categories/系统/index.html"},{"revision":"1b13500f0649b8938548223cb0331c15","url":"./cinema/index.html"},{"revision":"093bcacf9bff9df0e68675190d533f35","url":"./css/custom/weather.css"},{"revision":"01afdf1a26439da7bb11111005faa356","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fe1872eaa80945d01096566b41ee3390","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"526f91c326e5b9b900af853ac77f2d41","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"aa30e6a684724465371f6824bcee49f4","url":"./js/custom/screenfull.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"f02847d15fb4929333480cc0886b17e8","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"b4790f48beb56ff15750ddde83094348","url":"./posts/19711/index.html"},{"revision":"936cd284f33927e3fa5f04232b55f788","url":"./posts/21725/index.html"},{"revision":"87b3f26ad0dddcd1ce9bc067beeffa81","url":"./posts/33107/index.html"},{"revision":"3c254646bc2062c379c46ccebe425e0a","url":"./posts/33510/index.html"},{"revision":"a840cc350b995558fd08762126eeb638","url":"./posts/33511/index.html"},{"revision":"113039b076ffb6fbc55ef9455f8cb849","url":"./posts/3603/index.html"},{"revision":"f7e80442c8750da26d8749a0039beab7","url":"./posts/50888/index.html"},{"revision":"c7ccdd3cb2d8565182bd573acd8415b9","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"3b2bb423b7a9f3460a11f65fbefb57e3","url":"./search.xml"},{"revision":"9311e1a70bd3ab81aa702945f035354d","url":"./sitemap/sitemap.xml"},{"revision":"e5702336138517abde5e1369fed3854b","url":"./tags/Arch-Linux/index.html"},{"revision":"dc79b621b242b0bc96106c253bd73764","url":"./tags/index.html"},{"revision":"920bf56c04b84ac71a83f2d2e6d1eb68","url":"./tags/JavaScript/index.html"},{"revision":"9070c2fa6f4bfb7dc6e1dbf569089947","url":"./tags/Linux/index.html"},{"revision":"f1109f801d77da3f47b77554c64c256d","url":"./tags/Windows/index.html"},{"revision":"32cf33357f3d45394af818d3bbbc1cfa","url":"./tags/双系统/index.html"},{"revision":"3391fc52307e1de5e4ba72db83741b65","url":"./tags/数据结构/index.html"}], {
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
