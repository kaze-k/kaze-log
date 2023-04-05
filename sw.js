const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"193687c8653f923fe6b91ba1569df9bb","url":"./404.html"},{"revision":"ecbf2670fd1e26a4584c2b257e34cde4","url":"./archives/2023/03/index.html"},{"revision":"1bb7dfed3ece9b4a03308731d840ffda","url":"./archives/2023/04/index.html"},{"revision":"e9f0f24a249cfc3d8a510f0393f91ff6","url":"./archives/2023/index.html"},{"revision":"0070258c2257c929acace63855791431","url":"./archives/index.html"},{"revision":"e8303232cabcc4734c442173031f1216","url":"./bangumis/index.html"},{"revision":"de23f73019cc11b6efe50fa3793c3a4f","url":"./bing.json"},{"revision":"d8159469e572124256e6e801e79675de","url":"./categories/index.html"},{"revision":"33cc2ba604eddf6769ced75535bab6e8","url":"./categories/学习/index.html"},{"revision":"89b0917aca4b9c4380a100145f0d64d4","url":"./categories/系统/index.html"},{"revision":"1021e9b67812edeee9f600851047528e","url":"./categories/项目管理/index.html"},{"revision":"293603a189dbcc041f993b9883717877","url":"./cinema/index.html"},{"revision":"7469edfedf70ed8cf6930905dc9350f3","url":"./css/index.css"},{"revision":"f1c442afb181c5d2f9d01d0bb711a727","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a7646c86789c107ed803c2e97af2c508","url":"./feed/atom.xml"},{"revision":"5a9ad4633bde3990e445f83d15bfab56","url":"./feed/rss2.xml"},{"revision":"ecb05b974bc6bd5d5115ade9163bd18a","url":"./index.html"},{"revision":"37ea4552f6d5a1baecfbe23d9caed673","url":"./js/custom/animation.js"},{"revision":"054accfc17a50e94cea58991112883bc","url":"./js/custom/title.js"},{"revision":"19178af542654ff076e5a64ba5b5619b","url":"./js/custom/weather.js"},{"revision":"0fa555adf3fa73065411da699913ba58","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"4fedd004e4e6fd2e0e207973a477621d","url":"./posts/0/index.html"},{"revision":"dcafbf488ca58336f1fa37f47d2289e0","url":"./posts/19711/index.html"},{"revision":"84b92a43ba6c5235e46adde1ad5e84de","url":"./posts/33107/index.html"},{"revision":"8327221a23bd2f8bbf3a66c999b4d95b","url":"./posts/33510/index.html"},{"revision":"a7d7531d3592c0b3c802fcf44c9a82e5","url":"./posts/33511/index.html"},{"revision":"b9e3fef5f90ca13190ebc9b5b7fe08f0","url":"./posts/3603/index.html"},{"revision":"6c9e1aa5e0342598d74da8e3661e205e","url":"./posts/50888/index.html"},{"revision":"5e43f6038629fb2f2314e3fbfee51a7a","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"37e99269f91fa440977285a7ca0707f9","url":"./search.xml"},{"revision":"80a303edbee9e57e3987e7ad0ecb74aa","url":"./sitemap/sitemap.xml"},{"revision":"44045cd3313fc9bae1a3c2616e30edcb","url":"./tags/Arch-Linux/index.html"},{"revision":"5d213ad03e2f333b1b50813cd02f8ab9","url":"./tags/index.html"},{"revision":"a18384447a2a7bdc130766a0a3a3d2ed","url":"./tags/Javascript/index.html"},{"revision":"e7a2a644d678cca2911d1470ee0a71c6","url":"./tags/Linux/index.html"},{"revision":"232b8b5598dd999d3a37c87dd102b192","url":"./tags/Windows/index.html"},{"revision":"ca370a18ffdee2d592e89de392378a50","url":"./tags/双系统/index.html"},{"revision":"265719a9ecb7ece2cde746f5d4ea5e61","url":"./tags/工具/index.html"},{"revision":"cdf3f7d52dfc5114dcd9bea415c86bca","url":"./tags/数据结构/index.html"}], {
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
