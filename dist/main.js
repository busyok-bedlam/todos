!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hideInput=t.showInput=t.renderList=t.setProgresssStyle=t.calcSelectProc=t.addItemToList=void 0;var r=n(3),a=n(2);var i=t.addItemToList=function(e){var t=document.getElementsByClassName("buy-list")[0],n=document.getElementsByClassName("add-input")[0],a=(0,r.createNewLi)(n.value);t.appendChild(a),n.value=""},o=t.calcSelectProc=function(){var e=document.getElementsByClassName("buy-list")[0],t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.childNodes)).map(function(e){return e.childNodes[0]}),n=t.filter(function(e){return e.checked}),r=t.length;return n.length/r||0};t.setProgresssStyle=function(){var e=document.getElementsByClassName("scale-value")[0],t=o();e.style.width=100*t+"%"},t.renderList=function(){var e=!0,t=!1,n=void 0;try{for(var r,o=a.database[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var s=r.value;s&&i(s)}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}},t.showInput=function(e,t){e.value=t.innerText,e.style.display="block",e.focus(),t.style.display="none"},t.hideInput=function(e,t){var n=e.value;t.innerText=n,e.style.display="none",t.style.display="block"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createElemWithClass=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=document.createElement(e),i=!0,o=!1,s=void 0;try{for(var l,c=n[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var u=l.value;a.classList.add(u)}}catch(e){o=!0,s=e}finally{try{!i&&c.return&&c.return()}finally{if(o)throw s}}return a},t.createElem=function(e){var t=document.createElement(e.tagname);return t.className=e.classes||null,e.text&&(t.innerText=e.text),e.attr&&!0===Array.isArray(e.attr)&&function(){var n=!0,r=!1,a=void 0;try{for(var i,o=e.attr[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value,l=s.name,c=s.value;t.setAttribute(l,c)}}catch(e){r=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw a}}}(),e.styles&&!0===Array.isArray(e.styles)&&function(){var n=!0,r=!1,a=void 0;try{for(var i,o=e.styles[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value,l=s.name,c=s.value;t.style[l]=c}}catch(e){r=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw a}}}(),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.database=[]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createNewLi=void 0;var r=n(0),a=n(1);t.createNewLi=function(e){var t=document.createDocumentFragment(),n=(0,a.createElem)({tagname:"li",classes:"list-group-item"}),i=(0,a.createElem)({tagname:"div",classes:"table",text:e}),o=(0,a.createElem)({tagname:"input",classes:"check-button",attr:[{name:"type",value:"checkbox"}]}),s=(0,a.createElem)({tagname:"div",classes:"toggle-div"}),l=(0,a.createElem)({tagname:"input",classes:"hide-input",attr:[{name:"type",value:"text"}],styles:[{name:"display",value:"none"}]});s.appendChild(i),s.appendChild(l),o.addEventListener("click",function(e){(0,r.setProgresssStyle)()});var c=document.createElement("i");c.className="fas fa-edit";var u=document.createElement("i");return u.className="fas fa-times",u.addEventListener("click",function(e){var t=e.target.parentElement;!0===confirm("are you sure ?")&&function e(t){"li"!==t.localName?e(t.parentElement):t.remove()}(t),(0,r.setProgresssStyle)()}),n.appendChild(o),n.appendChild(u),n.appendChild(c),n.appendChild(s),t.appendChild(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createCard=void 0;var r=n(0),a=n(1);t.createCard=function(){var e=document.createDocumentFragment(),t=(0,a.createElemWithClass)("div","wrapper"),n=(0,a.createElemWithClass)("h1","title");n.innerHTML="ПОКУПКИ";var i=document.createElement("ul");i.className="buy-list";var o=(0,a.createElemWithClass)("div","input-field"),s=(0,a.createElem)({tagname:"input",classes:"add-input",attr:[{name:"placeholder",value:"Enter text"}]}),l=(0,a.createElemWithClass)("i","fas","fa-plus");t.addEventListener("click",function(e){var t,n,a,i=e.target;console.log(i),i.className.indexOf("fa-plus")>=0&&((0,r.addItemToList)(i),(0,r.setProgresssStyle)()),i.className.indexOf("fa-edit")>=0&&(t=i.nextSibling,n=t.querySelector(".hide-input"),a=t.querySelector(".table"),(0,r.showInput)(n,a))}),t.addEventListener("keydown",function(e){var t,n,a,i=e.target;console.log(e.keyCode),"add-input"===i.className&&13===e.keyCode&&""!==i.value&&((0,r.addItemToList)(i),(0,r.setProgresssStyle)(),i.value=""),"hide-input"===i.className&&13===e.keyCode&&(t=i.parentElement,n=t.querySelector(".hide-input"),a=t.querySelector(".table"),""!==n.value&&(0,r.hideInput)(n,a))}),o.appendChild(s),o.appendChild(l),t.appendChild(n),t.appendChild(o),t.appendChild(i);var c=(0,a.createElemWithClass)("div","scale-div"),u=(0,a.createElemWithClass)("div","scale"),d=(0,a.createElemWithClass)("div","scale-value");u.appendChild(d),c.appendChild(u),t.appendChild(c),e.appendChild(t),document.body.appendChild(e)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(a=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,n){var r,a,i={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,c=0,u=[],d=n(5);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=i[r.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(g(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(g(r.parts[o],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],o=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function v(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,a)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(t,e.attrs),v(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,a,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var o=c++;n=l||(l=m(t)),r=w.bind(null,n,o,!1),a=w.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),v(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(r=d(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,n,t),a=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var o=n[a];(s=i[o.id]).refs--,r.push(s)}e&&f(p(e,t),t);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var b,x=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([a]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){(e.exports=n(7)(!1)).push([e.i,'*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\nli {\n    list-style-type: none;\n}\n\n.wrapper {\n    border: 3px solid #000;\n    width: 40%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n}\n.title{\n    background:#176CAA;\n    color: #fff;\n    padding: 50px;\n    display: flex;\n    justify-content: center;\n}\n/* .list-group-item {\n    display: flex;\n    height: 50px;\n    border-bottom: 2px solid #ccc;\n    justify-content: space-between;\n    text-align: center;\n} */\n.list-group-item {\n    border: 2px solid #000;\n    display: grid;\n    grid-template-columns: 5fr 30px auto auto;\n    grid-template-rows: auto;\n    grid-template-areas: "table check edit times";\n    grid-gap: 20px;\n    padding: 20px;\n    /* background: #ccc; */\n}\n.buy-list {\n    height: 300px;\n    overflow-y: scroll;\n}\n\n\n.add-input {\n    border: 3px solid #000;\n    height: 70px;\n    width: 60%;\n    display: inline-block;\n    text-indent: 30px;\n    font-size: 1.5em;\n}\n.fa-plus {\n    color: green;\n    font-size: 3em;\n}\n.fa-plus:hover {\n    color: greenyellow;\n    cursor: pointer;\n}\n.fa-edit {\n    display: inline-block;\n    grid-area: edit;\n    font-size: 3em;\n    color: #A4C4A1;\n}\n.fa-edit:hover {\n    color: #00FF78;\n}\n.fa-times {\n    display: inline-block;\n    grid-area: times;\n    font-size: 3em;\n    color: red;\n}\n.fa-times:hover {\n    color: #FF0055;\n    cursor: pointer;\n}\n.toggle-div {\n    display: block;\n    grid-area: table;\n}\n.check-button {\n    grid-area: check ;\n}\n.scale-div {\n    height: 100px;\n    /* background: yellowgreen; */\n    padding: 10px;\n}\n\n.scale {\n    height: 100%;\n    border: 3px solid #000;\n    background: #ccc;\n    width: 50%;\n}\n.scale-value {\n    height: 100%;\n    width: 0%;\n    background: yellowgreen;\n}\n.hide-input {\n    display: block;\n    width: 100%;\n    height: 100%;\n    border: 3px solid #000;\n    font-size: 2em;\n    text-indent: 30px;\n}',""])},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";n(9);var r=n(4),a=n(0);(0,r.createCard)(),(0,a.renderList)()}]);
//# sourceMappingURL=main.js.map