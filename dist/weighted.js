!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Weighted=e()}}(function(){return function e(t,r,n){function o(i,a){if(!r[i]){if(!t[i]){var l="function"==typeof require&&require;if(!a&&l)return l(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var c=r[i]={exports:{}};t[i][0].call(c.exports,function(e){var r=t[i][1][e];return o(r?r:e)},c,c.exports,e,t,r,n)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e,t,r){for(var n=!0;n;){var o=e,u=t,i=r;a=f=l=void 0,n=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var l=a.get;return void 0===l?void 0:l.call(i)}var f=Object.getPrototypeOf(o);if(null===f)return void 0;e=f,t=u,r=i,n=!0}},l=e("react"),f=n(l),c=function(e){var t=function(){o(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)};return u(t,e),i(t,[{key:"render",value:function(){return f["default"].createElement("div",{style:this.props.style,className:"item"},this.props.children)}}]),t}(f["default"].Component);r["default"]=c,t.exports=r["default"]},{react:"react"}],2:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e,t,r){for(var n=!0;n;){var o=e,u=t,i=r;a=f=l=void 0,n=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var l=a.get;return void 0===l?void 0:l.call(i)}var f=Object.getPrototypeOf(o);if(null===f)return void 0;e=f,t=u,r=i,n=!0}},l=e("react"),f=n(l),c=e("./row"),p=n(c),s=e("./column"),d=n(s),v=function(e){function t(){o(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.state={}}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.children,r=void 0===t?[]:t,n=e.column,o=e.reverse,u=(n?"column":"row")+(o?"-reverse":"");return r=r.map(function(e){return f["default"].addons.cloneWithProps(e,{style:{flexGrow:e.props.weight,width:e.props.width}})}),f["default"].createElement("div",{style:{display:"flex",flexDirection:u}},r)}}]),t}(f["default"].Component);r["default"]=v,r.Row=p["default"],r.Column=d["default"]},{"./column":1,"./row":3,react:"react"}],3:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e,t,r){for(var n=!0;n;){var o=e,u=t,i=r;a=f=l=void 0,n=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var l=a.get;return void 0===l?void 0:l.call(i)}var f=Object.getPrototypeOf(o);if(null===f)return void 0;e=f,t=u,r=i,n=!0}},l=e("react"),f=n(l),c=e("."),p=n(c),s=function(e){var t=function(){o(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)};return u(t,e),i(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],null,this.props.children)}}]),t}(f["default"].Component);r["default"]=s,t.exports=r["default"]},{".":2,react:"react"}]},{},[2])(2)});