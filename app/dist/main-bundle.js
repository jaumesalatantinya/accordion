/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Accordion = __webpack_require__(1);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	    var accordion = new _Accordion2.default(2);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Accordion = function () {
	    function Accordion() {
	        var defaultPanel = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	        _classCallCheck(this, Accordion);
	
	        this.panels = [];
	        this.getPanels();
	        this.addClickEventToPanelHeaders();
	        this.closeAllPanels();
	        this.loadAjaxContent();
	        if (defaultPanel > this.panels.length) {
	            defaultPanel = 0;
	        }
	        this.openPanel(this.panels[defaultPanel]);
	    }
	
	    _createClass(Accordion, [{
	        key: "getPanels",
	        value: function getPanels() {
	
	            var headers = document.querySelectorAll(".Accordion-header");
	            var contents = document.querySelectorAll(".Accordion-content");
	            var numPanels = headers.length;
	            for (var i = 0; i < numPanels; i++) {
	                this.panels[i] = {
	                    header: headers[i],
	                    content: contents[i]
	                };
	            }
	        }
	    }, {
	        key: "addClickEventToPanelHeaders",
	        value: function addClickEventToPanelHeaders() {
	            var _this = this;
	
	            this.panels.forEach(function (panel) {
	                panel.header.addEventListener('click', function (e) {
	                    _this.closeAllPanels();
	                    _this.openPanel(panel);
	                });
	            });
	        }
	    }, {
	        key: "closeAllPanels",
	        value: function closeAllPanels() {
	
	            for (var i = 0; i < this.panels.length; i++) {
	                this.panels[i].content.classList.remove('is-open');
	                this.panels[i].content.classList.add('is-close');
	            }
	        }
	    }, {
	        key: "openPanel",
	        value: function openPanel(panel) {
	
	            panel.content.classList.remove('is-close');
	            panel.content.classList.add('is-open');
	        }
	    }, {
	        key: "loadAjaxContent",
	        value: function loadAjaxContent() {
	            var _this2 = this;
	
	            fetch('data/users.json').then(function (response) {
	                return response.json();
	            }).then(function (users) {
	                var html = '';
	                users.forEach(function (user) {
	                    html += "<p>" + user.name + " - " + user.email + "</p>";
	                });
	                _this2.panels[_this2.panels.length - 1].content.innerHTML = html;
	            }).catch(function (e) {
	                return console.log(e);
	            });
	        }
	    }]);
	
	    return Accordion;
	}();
	
	exports.default = Accordion;

/***/ }
/******/ ]);
//# sourceMappingURL=main-bundle.js.map