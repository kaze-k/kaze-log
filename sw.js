const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a974bb8d3856e772d9545b95c91a91d3","url":"./404.html"},{"revision":"8d254c928d0d9ecf586c3d468080c54d","url":"./archives/2023/03/index.html"},{"revision":"4fd444f29a3c6e234cb55fd7d2e5c985","url":"./archives/2023/04/index.html"},{"revision":"eedc4730883edde62275d4648b30da98","url":"./archives/2023/index.html"},{"revision":"0a9b3ac655aa082024f4933b25b3cb59","url":"./archives/index.html"},{"revision":"7227d22aa53c7740fc03e359b8046886","url":"./bangumis/index.html"},{"revision":"5df340a654e9fca9721046194d67d2bc","url":"./bing.json"},{"revision":"dd576901fb0bf8e64ecaac86ac396d15","url":"./categories/index.html"},{"revision":"b0164c95d483fdc2631f83d539a7c162","url":"./categories/前端/index.html"},{"revision":"036eb59fc9d47ce7525ecd3ae7c9abae","url":"./categories/学习笔记/index.html"},{"revision":"57ed68b32d1b4159af16cf2e05955f90","url":"./categories/工具/index.html"},{"revision":"f40c573528376171fcf0107f9ba3e72b","url":"./categories/系统/index.html"},{"revision":"74cc9579bf9aa9b277e3b52679cb7005","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"64b610a83c71493fe9ce90cb460f4e40","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"2270020e94fbb4e72eef4b85d1f406de","url":"./feed/atom.xml"},{"revision":"91cd0a51c676a250ea9ce1357d5b67f4","url":"./feed/rss2.xml"},{"revision":"cede3bee408a2fcfb1a821e936b87fe1","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"c19eefa6e468eafade1dffa63df7f17f","url":"./posts/19711/index.html"},{"revision":"6a5033a3899c7e80ec7f6d782c10ecee","url":"./posts/21725/index.html"},{"revision":"b03bd5b0c425b0415c0aa72fe40a7c33","url":"./posts/33107/index.html"},{"revision":"1b92d9d57fd9fbbd304a658909c8c8ae","url":"./posts/33510/index.html"},{"revision":"5cb78bfa71dbd350235a0d3a05e74773","url":"./posts/33511/index.html"},{"revision":"b450fa27727ff0b840edcd5fdf870957","url":"./posts/3603/index.html"},{"revision":"cd79ca6a0f8b1b19529a48aac6a4a712","url":"./posts/3a68f348/index.html"},{"revision":"2bd0f25db53487730d101d9a1858df43","url":"./posts/50888/index.html"},{"revision":"efd65deccefbcb41276df275b3fb7129","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"f611f4d114c09393e2aae6788b749f6c","url":"./search.xml"},{"revision":"1522ba9eb31ea1945237b99d5a603f69","url":"./sitemap/sitemap.xml"},{"revision":"34710d2014593e88c1e52d941bbee785","url":"./tags/Arch-Linux/index.html"},{"revision":"24fc2e3dcdefc0fc01c22e1c63119ca3","url":"./tags/index.html"},{"revision":"9986ee76c048918afa6a380fb5b4b91e","url":"./tags/Javascript/index.html"},{"revision":"f1ed1dcc4304a7f70f38e980b7a463c6","url":"./tags/JavaScript/index.html"},{"revision":"8aabc749cda1427697b1ad63f6e916f2","url":"./tags/Linux/index.html"},{"revision":"076a28413a2193ffb2521c67209b50e1","url":"./tags/Windows/index.html"},{"revision":"f109fae53bd0020026c33b0914218d4a","url":"./tags/双系统/index.html"},{"revision":"774ab70b4f3ea810afb1b123db473308","url":"./tags/数据结构/index.html"}], {
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
