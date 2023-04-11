const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"eb87ee161f6b29cc3fda54cc7a7ccc65","url":"./404.html"},{"revision":"44dc79bd7120eee6c96921cecba89a11","url":"./archives/2023/03/index.html"},{"revision":"25a4557245bbd74b9ed1249b35a9e331","url":"./archives/2023/04/index.html"},{"revision":"8905e3049134031afd2bb386101f9218","url":"./archives/2023/index.html"},{"revision":"7c883fb9ca09bfd9305d5f783c06fda8","url":"./archives/index.html"},{"revision":"af73959ff99f0e074ba7b8df1d87213d","url":"./bangumis/index.html"},{"revision":"8f7f7ef34d81a1f7c7146db949d76ff8","url":"./bing.json"},{"revision":"6c474b145cf9700dbc5c31f04991dd69","url":"./categories/index.html"},{"revision":"4e890baa72852d18ef05a068c57b458f","url":"./categories/学习笔记/index.html"},{"revision":"88f186c535984077a432f4f16dee2a68","url":"./categories/工具/index.html"},{"revision":"cdaff5ca2711707c70895857f47ceda5","url":"./categories/系统/index.html"},{"revision":"57f9004ac29fdb76ddb7edaa9de1af07","url":"./cinema/index.html"},{"revision":"53164529b4dd7325ba99d2e159aa14c3","url":"./css/custom/weather.css"},{"revision":"890323c3daa30e20b2699f9199bcad8f","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"b4e07eefe0d885deb7696927bc8a9843","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"ebe7a31127a33fe70ab90de03dc0e439","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"10489bf36ec6ce9aceb5befa544d3354","url":"./posts/19711/index.html"},{"revision":"9ff694892ca40702b48ae7b4e6642892","url":"./posts/21725/index.html"},{"revision":"9deaf3758e324d8a980b44eda10fd2d6","url":"./posts/33107/index.html"},{"revision":"288328f8cdc61495500b3e4c6b34fdad","url":"./posts/33510/index.html"},{"revision":"a9b58c3e44e49505d4e43c337f5289e9","url":"./posts/33511/index.html"},{"revision":"0e94086edf3ac8d11b01a646ac9d769d","url":"./posts/3603/index.html"},{"revision":"438e6c65d299db1ef2f0ce541cb9d855","url":"./posts/50888/index.html"},{"revision":"45d309017d8e2d2aae8ca237e0981505","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"fec8ee441e7a8f03ac5e18592026a218","url":"./search.xml"},{"revision":"c7862b8887896e1c8b6202688c25d10a","url":"./sitemap/sitemap.xml"},{"revision":"0a8741b114279896a5932020f452d2ee","url":"./tags/Arch-Linux/index.html"},{"revision":"9cb80efd5fcfe0b85f64a9594f80865f","url":"./tags/index.html"},{"revision":"1e3145029c9eb34dfa9f1b13c2304a4b","url":"./tags/JavaScript/index.html"},{"revision":"db3264d54c6effe686def3e96be28d3b","url":"./tags/Linux/index.html"},{"revision":"39faec859faa188ab904a65f79157a11","url":"./tags/Windows/index.html"},{"revision":"a0ea1cef19227646a381a07630960888","url":"./tags/双系统/index.html"},{"revision":"04a1f2f8581107856642c9ed92f7c461","url":"./tags/数据结构/index.html"}], {
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
