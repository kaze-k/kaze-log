const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ae886498c188d6bb2d9255ea50b935b6","url":"./404.html"},{"revision":"fd82680c62a127bcb571a5f67b33098c","url":"./archives/2023/03/index.html"},{"revision":"51edef04373272fdbeec80ce0c798927","url":"./archives/2023/04/index.html"},{"revision":"a5fa917bd2a61c3058df2c54d2b6645a","url":"./archives/2023/index.html"},{"revision":"ef17180b812fe09d9fe578325e588de0","url":"./archives/index.html"},{"revision":"b9c335e9150ca398562ce3bc649d9301","url":"./bangumis/index.html"},{"revision":"ffc2810e80746254f0cafa3c982de092","url":"./bing.json"},{"revision":"b632ccab5645acfe56db13b97225547d","url":"./categories/index.html"},{"revision":"ab68c623ce84180367fab92699da2822","url":"./categories/学习笔记/index.html"},{"revision":"8d6ae6d731ff00b0ac97cc8d4ba7536e","url":"./categories/工具/index.html"},{"revision":"35fe5ae4d26e392db35de4ecee4ebd52","url":"./categories/系统/index.html"},{"revision":"93c6922f5dc8debe3b4c58578ff69a18","url":"./cinema/index.html"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"461a0838c947fed49eb0f355e415dd10","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"003e6c281ff39d511f19120e554bbffe","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"aa30e6a684724465371f6824bcee49f4","url":"./js/custom/screenfull.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"4a5133a9e35e8510466acae2b08e5eb0","url":"./js/custom/utils.js"},{"revision":"32a29ac596b31a06d00408eba35c4345","url":"./js/custom/weather.js"},{"revision":"3b504a836a925af946fdcf3a6ce16dc3","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"ddfbd119025a88ad0f423047460664e5","url":"./posts/19711/index.html"},{"revision":"a71fad32c73b92be828b42604d0a9bad","url":"./posts/21725/index.html"},{"revision":"4dd061b9c0d2055e8990193f66ec4073","url":"./posts/33107/index.html"},{"revision":"e147db3c89754e19648f9505ba596b3d","url":"./posts/33510/index.html"},{"revision":"c4ce9c33f604d816d692b399f17dc217","url":"./posts/33511/index.html"},{"revision":"927fdb2599208dcf45caeb56d21e5e27","url":"./posts/3603/index.html"},{"revision":"80db38eb674a0b82d4c4029f30143018","url":"./posts/50888/index.html"},{"revision":"516487e89324e3d288d1526188c93b58","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"fec8ee441e7a8f03ac5e18592026a218","url":"./search.xml"},{"revision":"a76610d24f4ffe4b6bbcf14be8965880","url":"./sitemap/sitemap.xml"},{"revision":"10e235a6e8fd8be28aa8acafb190e822","url":"./tags/Arch-Linux/index.html"},{"revision":"498a8ff3c535442a258c1eceb413786e","url":"./tags/index.html"},{"revision":"b84fd96b26374702cad0b80c4e8caeb1","url":"./tags/JavaScript/index.html"},{"revision":"a0ea0cc0aa43c25b82183d9cb60f09aa","url":"./tags/Linux/index.html"},{"revision":"d91333ba837cd517ef1ca3463d16dbfb","url":"./tags/Windows/index.html"},{"revision":"b50c5681c80d25f3aa33d16328bbaea5","url":"./tags/双系统/index.html"},{"revision":"3f198ad87fb913c0eaaf6595cf76b192","url":"./tags/数据结构/index.html"}], {
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
