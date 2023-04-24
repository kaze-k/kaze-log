const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"0d272ad0c1327d1b965da06bd66f0730","url":"./404.html"},{"revision":"292b58b93b385b1df47d0e5ff6c57d6f","url":"./archives/2023/03/index.html"},{"revision":"266e0438b1951de02eb86522dc7e2d84","url":"./archives/2023/04/index.html"},{"revision":"8b1d1a9e2f7ecdcaf13f037472c33b93","url":"./archives/2023/index.html"},{"revision":"8b7de9d2acfaab479789e81946023b0c","url":"./archives/index.html"},{"revision":"a2ab947bfecaac3558c0a84e6ccf60d5","url":"./bangumis/index.html"},{"revision":"71d4af95c15b46def2e8411feaf3b144","url":"./bing.json"},{"revision":"42451a4e73ae608d8417b9eb27acc1c4","url":"./categories/index.html"},{"revision":"b107197313514fe03ab26b9ce155de56","url":"./categories/前端/index.html"},{"revision":"a007089684dac282eea7c2c06cd6fb1e","url":"./categories/学习笔记/index.html"},{"revision":"e2535b34b68c4e990cf64241a05de229","url":"./categories/工具/index.html"},{"revision":"6a6a34282ebbfbaef94502e009a04e6f","url":"./categories/系统/index.html"},{"revision":"94357439e01599fc3f2527f858d96c1a","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"078b95196f361b9586417869f85193a8","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f35b56605b8707855762ab6bde679324","url":"./feed/atom.xml"},{"revision":"150a9b3ad8cdbfe3daa1789fed746b92","url":"./feed/rss2.xml"},{"revision":"7220c5a7e461f2104d2355d03015ae9f","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"844806f40f2b092eb9b93bbc5fe026ea","url":"./posts/19711/index.html"},{"revision":"a736fa6682da1456df89b4d94f6c5094","url":"./posts/21725/index.html"},{"revision":"23b4a951abb0a99c075fa4385dbdf772","url":"./posts/33107/index.html"},{"revision":"846a4c3b0d988959c08cdcf670a02da9","url":"./posts/33510/index.html"},{"revision":"071b2fe515280609efb90aa481bfde14","url":"./posts/33511/index.html"},{"revision":"277ba6f899ee8fe414c580cbc5ba135c","url":"./posts/3603/index.html"},{"revision":"39d7e46747b7bcb1cc3b90e679b83745","url":"./posts/3a68f348/index.html"},{"revision":"29adefbdee6be9e00fc5374dbada85c7","url":"./posts/50888/index.html"},{"revision":"aff4157e105a1fce12354c0c878ac2c8","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"4872d15e0bc1511a45a1392a022c8e3a","url":"./search.xml"},{"revision":"1522ba9eb31ea1945237b99d5a603f69","url":"./sitemap/sitemap.xml"},{"revision":"fe3ff54c39170f3549d7a72e0cf98b18","url":"./tags/Arch-Linux/index.html"},{"revision":"f8c7aebea7db9687c6a34ef541f92654","url":"./tags/index.html"},{"revision":"f9d8d2e3542da5933fc62dea7077816c","url":"./tags/Javascript/index.html"},{"revision":"cd8e11a75f3c2b2d24060c58fa383a43","url":"./tags/JavaScript/index.html"},{"revision":"67135280904a7fda4a6cf96b8dfa960d","url":"./tags/Linux/index.html"},{"revision":"641d692fc0f82b44103f28e420d97214","url":"./tags/Windows/index.html"},{"revision":"12fe79166846f964767942b6652ed724","url":"./tags/双系统/index.html"},{"revision":"1a401b6f21589722c7962082f48e425e","url":"./tags/数据结构/index.html"}], {
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
