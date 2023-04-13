const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c9c2dbb3125554f0833b61921ac02b98","url":"./404.html"},{"revision":"93b7388af7870f822ccac0675ed8fcbf","url":"./archives/2023/03/index.html"},{"revision":"59d85feb54172dc7eaa8cd5ffd5b968c","url":"./archives/2023/04/index.html"},{"revision":"15ca13327c1b28cfdb9a2696710f6075","url":"./archives/2023/index.html"},{"revision":"a3b6f556da47f3a2ba57965d7edd8bba","url":"./archives/index.html"},{"revision":"fa5e8c0e871a3fd8f775c77ef226c68a","url":"./bangumis/index.html"},{"revision":"930e81bec0d619a7cbce3cb1d66a999b","url":"./bing.json"},{"revision":"d8db30206d07d1acd24ce21bb4f30027","url":"./categories/index.html"},{"revision":"b14f2362343394d975fadad1b072198e","url":"./categories/学习笔记/index.html"},{"revision":"ea22805c880aee55c2c042b59c414388","url":"./categories/工具/index.html"},{"revision":"472bb9a8313399d0e8d9f2be6ca88004","url":"./categories/系统/index.html"},{"revision":"1c00b832569abbc3a74603bcbbf7be1d","url":"./cinema/index.html"},{"revision":"093bcacf9bff9df0e68675190d533f35","url":"./css/custom/weather.css"},{"revision":"dd4e9aadb14d8d27906272901d80066c","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fe1872eaa80945d01096566b41ee3390","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"123f1d218e2447a7c077f690e10560ae","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"aa30e6a684724465371f6824bcee49f4","url":"./js/custom/screenfull.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"4a5133a9e35e8510466acae2b08e5eb0","url":"./js/custom/utils.js"},{"revision":"f02847d15fb4929333480cc0886b17e8","url":"./js/custom/weather.js"},{"revision":"3b504a836a925af946fdcf3a6ce16dc3","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"0ae0b0fdc421be1607d54ef569d385b8","url":"./posts/19711/index.html"},{"revision":"9871e6c91786280c0ad8b0244ca2bb2e","url":"./posts/21725/index.html"},{"revision":"3e675c5b5155a81a5e1a62adf4f92f5d","url":"./posts/33107/index.html"},{"revision":"e2e3b9624c5a81fee864f04b77f168f7","url":"./posts/33510/index.html"},{"revision":"7ee7818e64b6bd904377fc4f241bfaaa","url":"./posts/33511/index.html"},{"revision":"5a41f946ca9d36385925a13464f1cd5b","url":"./posts/3603/index.html"},{"revision":"6d4abc17a8746f4d252051b33beb1d02","url":"./posts/50888/index.html"},{"revision":"44f2372aa2e945d3cf79212622a3ca0f","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"c6a28d4b75b75836d958a5179fd01708","url":"./search.xml"},{"revision":"f3994103ce664b1cbed1688f71f9fbd5","url":"./sitemap/sitemap.xml"},{"revision":"43262fe3aa97b971d5469ef2dc890a17","url":"./tags/Arch-Linux/index.html"},{"revision":"0890eecf489236af4fc6e043408eba17","url":"./tags/index.html"},{"revision":"1b97fd37ae0d664d3d1f000569b6fd40","url":"./tags/JavaScript/index.html"},{"revision":"37f603a25a012996fd08ed2c4723c79b","url":"./tags/Linux/index.html"},{"revision":"b77f304508dcd5cda923c08b1fd169ee","url":"./tags/Windows/index.html"},{"revision":"6d75341110883e3326332634e1f963c7","url":"./tags/双系统/index.html"},{"revision":"e3d3dcc705259ea2a9f7a0a1a54ab1a9","url":"./tags/数据结构/index.html"}], {
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
