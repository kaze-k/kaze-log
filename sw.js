const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5079589426d008e4d6b3008bce6e33d9","url":"./404.html"},{"revision":"4b09fd2273d493c37d63ad4deafcac3f","url":"./archives/2023/03/index.html"},{"revision":"8954047747acd2d3327daa47dd4c0cfa","url":"./archives/2023/04/index.html"},{"revision":"69d29012a0502a3c544d56d1e7824ead","url":"./archives/2023/index.html"},{"revision":"342cde83f52871fe504f363da53b6dda","url":"./archives/index.html"},{"revision":"cd4269a31bcf15596238f085ae9175c9","url":"./bangumis/index.html"},{"revision":"c41ae9b8bbb76d6e59239d4d1ce9a140","url":"./bing.json"},{"revision":"65e5760332dbecc1494f911882e9ad60","url":"./categories/index.html"},{"revision":"75eb68d7ccbe1d9f23dbcfc3a85a40fc","url":"./categories/学习笔记/index.html"},{"revision":"a96ecbde47ffb56bc0ee7d4a60ae8cd2","url":"./categories/工具/index.html"},{"revision":"17876b83730af3d77f94e8c2af83d59c","url":"./categories/系统/index.html"},{"revision":"8087792da33d859bdfd172280c1cf145","url":"./cinema/index.html"},{"revision":"093bcacf9bff9df0e68675190d533f35","url":"./css/custom/weather.css"},{"revision":"dd4e9aadb14d8d27906272901d80066c","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1bd0d65ebdf3fecdb82342d3278638e3","url":"./feed/atom.xml"},{"revision":"e3c00bd3dc8808c9291b79f86c401ad1","url":"./feed/rss2.xml"},{"revision":"db3ed8409a57fa9970236eb96e552c3b","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"aa30e6a684724465371f6824bcee49f4","url":"./js/custom/screenfull.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"ad49198110353331a78c27be96204c51","url":"./js/custom/utils.js"},{"revision":"f02847d15fb4929333480cc0886b17e8","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"af6630d2a6f70827391e9749db189575","url":"./posts/19711/index.html"},{"revision":"598d13d1b263483d92fdf35d472afdbe","url":"./posts/21725/index.html"},{"revision":"ea370299c0e41f2faa78c4b3a89b2a46","url":"./posts/33107/index.html"},{"revision":"e7bfe9771bfcb1765086bb4c701ac92c","url":"./posts/33510/index.html"},{"revision":"aef240a291186e4ced6e6b91968fcd13","url":"./posts/33511/index.html"},{"revision":"5f1fab739844c454ace5922f40b202b7","url":"./posts/3603/index.html"},{"revision":"3aac9116fea3097de277a84ade101a96","url":"./posts/50888/index.html"},{"revision":"f7f570a355c3e782e71ea5b6503dde75","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"e918a96402eb253d6c363a66da1a2d55","url":"./search.xml"},{"revision":"1fae0294508107fda19012200df813ba","url":"./sitemap/sitemap.xml"},{"revision":"63f20ca691ac025e3318fd512d7e10bf","url":"./tags/Arch-Linux/index.html"},{"revision":"738039befd212e1fa958cdb2dc33064b","url":"./tags/index.html"},{"revision":"8b1bf3bd16b3773aaa37e4dd18717898","url":"./tags/JavaScript/index.html"},{"revision":"4079b63efe6f4437181ef837425fd4f7","url":"./tags/Linux/index.html"},{"revision":"7833075b2c6e04d07ae93ff1acd9980c","url":"./tags/Windows/index.html"},{"revision":"b84b7903975d51c4640f73618e9c336a","url":"./tags/双系统/index.html"},{"revision":"964447af949206905d7b98e69cc12f16","url":"./tags/数据结构/index.html"}], {
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
