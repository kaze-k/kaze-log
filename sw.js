const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"dc50b877c5d3c20f264fcd0e037e20cb","url":"./404.html"},{"revision":"c798f5add5ebd0420d9a4ec2ec06fe5f","url":"./archives/2023/03/index.html"},{"revision":"f5b3d37a954edc3f872992a25ac35536","url":"./archives/2023/04/index.html"},{"revision":"a83a19a7dfa1f5f45849f05f1f9fb75b","url":"./archives/2023/index.html"},{"revision":"c4e79761928f98d90dc20e6350d8214d","url":"./archives/index.html"},{"revision":"41346c4997894b080c15b3d8915ea83b","url":"./bangumis/index.html"},{"revision":"8f7f7ef34d81a1f7c7146db949d76ff8","url":"./bing.json"},{"revision":"ca967af644fcfeafd8181043a1b3723b","url":"./categories/index.html"},{"revision":"d12bfa5efaaa5f8f4522224afb27070f","url":"./categories/学习笔记/index.html"},{"revision":"01253605387f3cba1d1ddd508de09155","url":"./categories/工具/index.html"},{"revision":"b5353735bff4d6f8f2d97bda552a0a2f","url":"./categories/系统/index.html"},{"revision":"39f0ef9aaa52c99893e410cc0bb3980f","url":"./cinema/index.html"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"461a0838c947fed49eb0f355e415dd10","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1bd0d65ebdf3fecdb82342d3278638e3","url":"./feed/atom.xml"},{"revision":"e3c00bd3dc8808c9291b79f86c401ad1","url":"./feed/rss2.xml"},{"revision":"2233e68f2bcfef8b2941aa87444a59b5","url":"./index.html"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"a3b7f4a4f93b3bfe93baed97be4672de","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"0c1af8f772ee47ffb9e79ac23cbed265","url":"./posts/19711/index.html"},{"revision":"fd898f028a4f003648bce9bf20e7d78f","url":"./posts/21725/index.html"},{"revision":"4d9d265509d0889c0e17628f09734196","url":"./posts/33107/index.html"},{"revision":"cddc9e44a05d71deb09675d37464a79a","url":"./posts/33510/index.html"},{"revision":"326dbc9d2f265984c6f5ebafe2d39f02","url":"./posts/33511/index.html"},{"revision":"846fd0690e8fc6a41776fe5596bca7f3","url":"./posts/3603/index.html"},{"revision":"d0108afabddbea64a6bcb24351522a5a","url":"./posts/50888/index.html"},{"revision":"c2bd4387d326e2f755494cd83212a58a","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"e96635107c6aeffecdafd7524a2f379b","url":"./search.xml"},{"revision":"2e31573341825d6502f87b562e44833a","url":"./sitemap/sitemap.xml"},{"revision":"4762b3bf497b6fd10108ecac9e3b22e1","url":"./tags/Arch-Linux/index.html"},{"revision":"99a2d8b8ad0dd7afd7fd876d2e051a97","url":"./tags/index.html"},{"revision":"91c0b1b25ad66673f3847e3018f3fa2b","url":"./tags/JavaScript/index.html"},{"revision":"5eb4ad9527731d214c8f48879c74c22a","url":"./tags/Linux/index.html"},{"revision":"95896bcbe8238132c3bc66e3de09753d","url":"./tags/Windows/index.html"},{"revision":"6987b90ab4e081b2f8b6ebb24c2b8d9c","url":"./tags/双系统/index.html"},{"revision":"492afc84d70b79c28440cc3b1c007eed","url":"./tags/数据结构/index.html"}], {
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
