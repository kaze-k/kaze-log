const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9b0cf8c34bbd77bf2de409eea826480d","url":"./404.html"},{"revision":"797e791c6a927a1595285a17b32d0623","url":"./archives/2023/03/index.html"},{"revision":"c53b4ead54e801bb8aa5245c35fdc352","url":"./archives/2023/04/index.html"},{"revision":"dd16d9eed1fdd32ba0e3ae9d05b087cd","url":"./archives/2023/09/index.html"},{"revision":"4c9c227d8cc7ec1c76d1b6036a438e50","url":"./archives/2023/index.html"},{"revision":"6ba1b58d8f037ceb3384d500d258ee9a","url":"./archives/index.html"},{"revision":"383eb29d643dccd76e9924431e3fe878","url":"./bangumis/index.html"},{"revision":"76efe884e477fa6c1cedf6a30d8a7f40","url":"./bing.json"},{"revision":"49f6a9651a3605080e6519759ad30199","url":"./categories/index.html"},{"revision":"17abb4f8ca6afb22a99a7e673da16e97","url":"./categories/前端/index.html"},{"revision":"e582dd2aab003332d87e1507276688df","url":"./categories/学习笔记/index.html"},{"revision":"7d3fb92b0e635eda91097fd792840f9d","url":"./categories/工具/index.html"},{"revision":"f3c79c21ebf05dfc03ebc3ad3ef2d45f","url":"./categories/系统/index.html"},{"revision":"0197d8bd2e832f81c0b6fbf62d823f8d","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"80abaeaa6ec94e3d3869a7922eda0691","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"68c5ae62fb475dc86342a4782a4e0ab3","url":"./feed/atom.xml"},{"revision":"f5ac99a9ff8db9f9fa03c33f15196634","url":"./feed/rss2.xml"},{"revision":"e9d197fc08360680e38222887b461a71","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"a2d91495f5ddd2928ff0524c93eb6cb8","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"6ab581a95b1e9d2bf780b63a799094fa","url":"./js/main.js"},{"revision":"04678c982fb4ec46f38c276a1db4feb0","url":"./js/request.js"},{"revision":"767206e399e49a35346b384601df4d25","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"71b1e9ed8919e3dab4cba6414b86bf08","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"cf15d3be56e824da5cb079f0011dc96d","url":"./js/utils.js"},{"revision":"bced20da4a603483f3246599bf7a16be","url":"./posts/19711/index.html"},{"revision":"b32309ff3b302ab80018ae235c14abd8","url":"./posts/21725/index.html"},{"revision":"355e838dffa27d947a4d910f534d5df1","url":"./posts/33107/index.html"},{"revision":"b577c095cfd9cce038c7cad14255934a","url":"./posts/33510/index.html"},{"revision":"2f2cf75a6ae6312659311d99271ee0fa","url":"./posts/33511/index.html"},{"revision":"586634c03b3c55ac5388aa4dc3e4d9c5","url":"./posts/3603/index.html"},{"revision":"c3facedfe2a2444a314d4d889b771eff","url":"./posts/3a68f348/index.html"},{"revision":"a509736ca67185b72de483116b518fe5","url":"./posts/50888/index.html"},{"revision":"e73ab1e33c7fbed8b70770e7cd593776","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"73a8de8ad93ce7a87d5cd5545a6c9584","url":"./search.xml"},{"revision":"7a05296417696b604b41b3bf23176005","url":"./sitemap/sitemap.xml"},{"revision":"6ec495a08cc8c0d5d8b92fcd7b4bd928","url":"./tags/Arch-Linux/index.html"},{"revision":"acda91ef4695dd06c4ded173e799f0f9","url":"./tags/index.html"},{"revision":"7ae58b637df97e2170733bd8df21d31d","url":"./tags/JavaScript/index.html"},{"revision":"1a475512fe59055170d5cf72507c105f","url":"./tags/Linux/index.html"},{"revision":"531cc512699318684041f8101c71bfe4","url":"./tags/Windows/index.html"},{"revision":"67f86dbb3f019e116b737546b8f178d8","url":"./tags/双系统/index.html"},{"revision":"716072339972bb948a97e633ef8bfc75","url":"./tags/数据结构/index.html"}], {
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
