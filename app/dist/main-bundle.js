!function(e){function n(o){if(t[o])return t[o].exports;var a=t[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var a=t(1),l=o(a);window.onload=function(){new l["default"](2)}},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=function(){function e(){var n=arguments.length<=0||void 0===arguments[0]?0:arguments[0];t(this,e),this.panels=[],this.getPanels(),this.addClickEventToPanelHeaders(),this.closeAllPanels(),this.loadAjaxContent(),n>this.panels.length&&(n=0),this.openPanel(this.panels[n])}return o(e,[{key:"getPanels",value:function(){for(var e=document.querySelectorAll(".Accordion-header"),n=document.querySelectorAll(".Accordion-content"),t=e.length,o=0;t>o;o++)this.panels[o]={header:e[o],content:n[o]}}},{key:"addClickEventToPanelHeaders",value:function(){var e=this;this.panels.forEach(function(n){n.header.addEventListener("click",function(t){e.closeAllPanels(),e.openPanel(n)})})}},{key:"closeAllPanels",value:function(){for(var e=0;e<this.panels.length;e++)this.panels[e].content.classList.remove("is-open"),this.panels[e].content.classList.add("is-close")}},{key:"openPanel",value:function(e){e.content.classList.remove("is-close"),e.content.classList.add("is-open")}},{key:"loadAjaxContent",value:function(){var e=this;fetch("data/users.json").then(function(e){return e.json()}).then(function(n){var t="";n.forEach(function(e){t+="<p>"+e.name+" - "+e.email+"</p>"}),e.panels[e.panels.length-1].content.innerHTML=t})["catch"](function(e){return console.log(e)})}}]),e}();n["default"]=a}]);
//# sourceMappingURL=main-bundle.js.map