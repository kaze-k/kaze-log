const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"1ba81c305e77e8ce30c44938482df0ee","url":"./404.html"},{"revision":"4127e0bbc21104461efaed42e504679f","url":"./archives/2023/03/index.html"},{"revision":"ff6500558c6341969b1f04d1ec50bd44","url":"./archives/2023/04/index.html"},{"revision":"113098c59d498719c5d69c512c4c4667","url":"./archives/2023/index.html"},{"revision":"c2037fdcdc07717cdeedc19d8b09f28b","url":"./archives/index.html"},{"revision":"1fbf494c3592849d0ddd74d8eb476c19","url":"./bangumis/index.html"},{"revision":"8f7f7ef34d81a1f7c7146db949d76ff8","url":"./bing.json"},{"revision":"ecf89c4af217017c02e885bedc6968b1","url":"./categories/index.html"},{"revision":"cf22cd1f52d0cc8211a159717aeb66ff","url":"./categories/学习笔记/index.html"},{"revision":"27c80124c483922b45838f5306ba07b7","url":"./categories/工具/index.html"},{"revision":"7e04fdb6d928c34020e63c373894cc28","url":"./categories/系统/index.html"},{"revision":"61f97622fa10d1e06cdd27c985f23e4c","url":"./cinema/index.html"},{"revision":"093bcacf9bff9df0e68675190d533f35","url":"./css/custom/weather.css"},{"revision":"dd4e9aadb14d8d27906272901d80066c","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1bd0d65ebdf3fecdb82342d3278638e3","url":"./feed/atom.xml"},{"revision":"e3c00bd3dc8808c9291b79f86c401ad1","url":"./feed/rss2.xml"},{"revision":"3e81954f998d10eb1358aba56da2d11e","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"aa30e6a684724465371f6824bcee49f4","url":"./js/custom/screenfull.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"7fae568af629c04c97bdf6c491f22928","url":"./js/custom/utils.js"},{"revision":"f02847d15fb4929333480cc0886b17e8","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"36c2d1e3c30033375654a21e8cbee0f2","url":"./posts/19711/index.html"},{"revision":"8dd1c278bcee3eeab86aecf912c8fdfc","url":"./posts/21725/index.html"},{"revision":"92bc8ae197e7e398410d760c3352c62b","url":"./posts/33107/index.html"},{"revision":"668f2c69554d487627028837477236eb","url":"./posts/33510/index.html"},{"revision":"1d009758ad70d80c7d760f25c218f799","url":"./posts/33511/index.html"},{"revision":"9d026fee7494ee5d530fe4bb337bba43","url":"./posts/3603/index.html"},{"revision":"1f984d6c794b9a6ad89bb06c9f7bc543","url":"./posts/50888/index.html"},{"revision":"ed33215440184244e9e93e1c4e1945ad","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"e918a96402eb253d6c363a66da1a2d55","url":"./search.xml"},{"revision":"1fae0294508107fda19012200df813ba","url":"./sitemap/sitemap.xml"},{"revision":"ab66c379224b54368b2509f83d7ea973","url":"./tags/Arch-Linux/index.html"},{"revision":"5206f71aa7d1c9802b1772545f202c36","url":"./tags/index.html"},{"revision":"a275d8659544b299578c2475e07cf439","url":"./tags/JavaScript/index.html"},{"revision":"afe09176a5b8f92f2a16057649bc217b","url":"./tags/Linux/index.html"},{"revision":"55d677efcb66b845b333bf057c5fd878","url":"./tags/Windows/index.html"},{"revision":"6065a57adea58c3deec7c2075851f35e","url":"./tags/双系统/index.html"},{"revision":"8d125a2db766aa9c84903b0a5c956b18","url":"./tags/数据结构/index.html"}], {
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
