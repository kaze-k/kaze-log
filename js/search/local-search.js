function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new I(n||[]);return o(i,"_invoke",{value:O(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",y="suspendedYield",p="executing",d="completed",v={};function m(){}function g(){}function w(){}var b={};l(b,i,(function(){return this}));var L=Object.getPrototypeOf,_=L&&L(L(T([])));_&&_!==r&&n.call(_,i)&&(b=_);var x=w.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==_typeof(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function O(e,r,n){var o=h;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=A(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?d:y,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function A(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(_typeof(e)+" is not iterable")}return g.prototype=w,o(x,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(S.prototype),l(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),l(x,u,"Generator"),l(x,i,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function asyncGeneratorStep(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){asyncGeneratorStep(a,n,o,i,c,"next",t)}function c(t){asyncGeneratorStep(a,n,o,i,c,"throw",t)}i(void 0)}))}}window.addEventListener("load",(function(){var t=!1,e=[],r=document.getElementById("search-mask"),n=function(){var e=document.body.style;e.width="100%",e.overflow="hidden",btf.animateIn(r,"to_show 0.5s"),btf.animateIn(document.querySelector("#local-search .search-dialog"),"titleScale 0.5s"),setTimeout((function(){document.querySelector("#local-search-input input").focus()}),100),t||(c(),t=!0),document.addEventListener("keydown",(function t(e){"Escape"===e.code&&(o(),document.removeEventListener("keydown",t))}))},o=function(){var t=document.body.style;t.width="",t.overflow="",btf.animateOut(document.querySelector("#local-search .search-dialog"),"search_close .5s"),btf.animateOut(r,"to_hide 0.5s")},a=function(){document.querySelector("#search-button > .search").addEventListener("click",n)},i=function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function t(e){var r,n,o,a,i,c;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,fetch(e);case 3:if(n=t.sent,!/\.json$/.test(e)){t.next=10;break}return t.next=7,n.json();case 7:r=t.sent,t.next=20;break;case 10:return t.next=12,n.text();case 12:return o=t.sent,t.next=15,(new window.DOMParser).parseFromString(o,"text/xml");case 15:return a=t.sent,t.next=18,a;case 18:i=t.sent,r=_toConsumableArray(i.querySelectorAll("entry")).map((function(t){return{title:t.querySelector("title").textContent,content:t.querySelector("content")&&t.querySelector("content").textContent,url:t.querySelector("url").textContent}}));case 20:return n.ok&&((c=document.getElementById("loading-database")).nextElementSibling.style.display="block",c.remove()),t.abrupt("return",r);case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){GLOBAL_CONFIG.localSearch.preload||(e=i(GLOBAL_CONFIG.localSearch.path));var t=document.querySelector("#local-search-input input"),r=document.getElementById("local-search-results"),n=document.getElementById("loading-status");t.addEventListener("input",(function(){var t=this,o=this.value.trim().toLowerCase().split(/[\s]+/);if(""!==o[0]){n.innerHTML='<i class="fas fa-spinner fa-pulse"></i>';var a='<div class="search-result-list">';if(!(o.length<=0)){var i=0;e.then((function(e){e.forEach((function(t){var e=!0,r=t.title?t.title.trim().toLowerCase():"",n=t.content?t.content.trim().replace(/<[^>]+>/g,"").toLowerCase():"",c=t.url.startsWith("/")?t.url:GLOBAL_CONFIG.root+t.url,u=-1,l=-1,s=-1;if(""!==r||""!==n?o.forEach((function(t,o){u=r.indexOf(t),l=n.indexOf(t),u<0&&l<0?e=!1:(l<0&&(l=0),0===o&&(s=l))})):e=!1,e){if(s>=0){var f=s-30,h=s+100,y="",p="";f<0&&(f=0),0===f?h=100:y="...",h>n.length?h=n.length:p="...";var d=n.substring(f,h);o.forEach((function(t){d=d.replaceAll(t,'<span class="search-keyword">'+t+"</span>"),r=r.replaceAll(t,'<span class="search-keyword">'+t+"</span>")})),a+='<div class="local-search__hit-item"><a href="'+c+'"><span class="search-result-title">'+r+"</span>",i+=1,""!==n&&(a+='<p class="search-result">'+y+d+p+"</p>")}a+="</a></div>"}})),0===i&&(a+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,t.value.trim())+"</div>"),a+="</div>",r.innerHTML=a,""!==o[0]&&(n.innerHTML=""),window.pjax&&window.pjax.refresh(r)}))}}else r.innerHTML=""}))};a(),document.querySelector("#local-search .search-close-button").addEventListener("click",o),r.addEventListener("click",o),GLOBAL_CONFIG.localSearch.preload&&(e=i(GLOBAL_CONFIG.localSearch.path)),window.addEventListener("pjax:complete",(function(){!btf.isHidden(r)&&o(),a()}))}));