!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(e){e.events={},e.guid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},e.judgeIsNotNull=function(e,t,n){return!!(e&&t&&n)},Array.prototype.contains=function(e){for(i in this)if(this[i]==e)return!0;return!1},n(2)}).call(this,n(0))},function(module,exports,__webpack_require__){(function(global){function loadPage(pageId){if(pageId){var pageObj=new RealPage(pageId);cachePage(pageId,pageObj)}function CC(e){this.pageId=e,this.requestData={},this.onNetworkResult=function(e,t,n){var a=this.requestData[e];a&&("success"===t?a.success(JSON.parse(n)):a.fail(JSON.parse(n)),a.complete())}}function RealPage(pageId){this.pageId=pageId,this.cc=new CC(pageId);var cc=this.cc;this.__native__evalInPage=function(jsContent){jsContent||console.log("js content is empty!"),eval(jsContent)},this.__native__getExpValue=function(e){var t=(e=>new Function("","with(this){"+e+"}").bind(this.data)())(e);return t instanceof Object?JSON.stringify(t):t instanceof Array?JSON.stringify(t):t},this.__native__handleRepeat=function(e){var t=(e=>new Function("","with(this){"+e+"}").bind(this.data)())(e);return t?t.length:0},this.setData=function(dataObj){for(var key in console.log("setData"),console.log(JSON.stringify(this.data)),dataObj){var str="this.data."+key+" = dataObj['"+key+"']";eval(str)}this.__native__refresh()}}}function cachePage(e,t){t?global.pages[e]=t:console.log("page: <"+e+"> is empty")}global.pages={},global.getPage=function(e){return global.pages[e]},global.Page=function(e){global.page=e},global.loadPage=loadPage}).call(this,__webpack_require__(0))}]);