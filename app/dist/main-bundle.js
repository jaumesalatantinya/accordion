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
	    var accordion1 = new _Accordion2.default('#a1', 3);
	    accordion1.init();
	    accordion1.loadAjaxContent('data/users.json');
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Accordion = function () {
	    function Accordion(target) {
	        var defaultPanel = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	
	        _classCallCheck(this, Accordion);
	
	        this.panels = [];
	        this.error = false;
	        this.defaultPanel = defaultPanel;
	        if (target) {
	            this.target = target;
	        } else {
	            this.dispatchError('No id target passed as param');
	        }
	    }
	
	    _createClass(Accordion, [{
	        key: 'init',
	        value: function init() {
	
	            if (!this.error) {
	                this.validateHtml();
	                this.getPanels();
	                this.addClickEventToPanelHeaders();
	                this.closeAllPanels();
	                if (this.defaultPanel > this.panels.length) {
	                    this.defaultPanel = 0;
	                }
	                this.openPanel(this.panels[this.defaultPanel]);
	            }
	        }
	    }, {
	        key: 'validateHtml',
	        value: function validateHtml() {
	
	            if (!this.error) {
	                if (!document.querySelector(this.target)) {
	                    this.dispatchError('No HTML elements for id target: ' + this.target);
	                    return;
	                }
	                if (!document.querySelector(this.target).classList.contains('Accordion')) {
	                    this.dispatchError('Target doesn\'t have Accordion class');
	                    return;
	                }
	                var headers = document.querySelectorAll(this.target + ' .Accordion-header');
	                var contents = document.querySelectorAll(this.target + ' .Accordion-content');
	                if (headers.length == 0 || contents.length == 0 || headers.length != contents.length) {
	                    this.dispatchError('Accordion is empty or dt and dd elements doesn\'t match');
	                }
	            }
	        }
	    }, {
	        key: 'getPanels',
	        value: function getPanels() {
	
	            if (!this.error) {
	                var headers = document.querySelectorAll(this.target + ' .Accordion-header');
	                var contents = document.querySelectorAll(this.target + ' .Accordion-content');
	                var numPanels = headers.length;
	                for (var i = 0; i < numPanels; i++) {
	                    this.panels[i] = {
	                        header: headers[i],
	                        content: contents[i]
	                    };
	                }
	            }
	        }
	    }, {
	        key: 'addClickEventToPanelHeaders',
	        value: function addClickEventToPanelHeaders() {
	            var _this = this;
	
	            if (!this.error) {
	                this.panels.forEach(function (panel) {
	                    panel.header.addEventListener('click', function (e) {
	                        _this.closeAllPanels();
	                        _this.openPanel(panel);
	                    });
	                });
	            }
	        }
	    }, {
	        key: 'closeAllPanels',
	        value: function closeAllPanels() {
	
	            if (!this.error) {
	                for (var i = 0; i < this.panels.length; i++) {
	                    this.panels[i].content.classList.remove('is-open');
	                    this.panels[i].content.classList.add('is-close');
	                }
	            }
	        }
	    }, {
	        key: 'openPanel',
	        value: function openPanel(panel) {
	
	            if (!this.error) {
	                panel.content.classList.remove('is-close');
	                panel.content.classList.add('is-open');
	            }
	        }
	    }, {
	        key: 'loadAjaxContent',
	        value: function loadAjaxContent(url) {
	            var _this2 = this;
	
	            if (!this.error) {
	                if (url) {
	                    return fetch(url).then(function (response) {
	                        return response.json();
	                    }).then(function (users) {
	                        var html = '';
	                        users.forEach(function (user) {
	                            html += '<p>' + user.name + ' - ' + user.email + '</p>';
	                        });
	                        _this2.panels[_this2.panels.length - 1].content.innerHTML = html;
	                    }).catch(function (e) {
	                        return _this2.dispatchError(e);
	                    });
	                } else {
	                    return Promise.reject();
	                    this.dispatchError('No url passed as param');
	                }
	            }
	        }
	    }, {
	        key: 'dispatchError',
	        value: function dispatchError(e) {
	            if (e) {
	                console.log(e);
	                this.error = true;
	                if (document.querySelector(this.target)) {
	                    document.querySelector(this.target).innerHTML = '<div class="u-error">' + e + '</div>';
	                }
	            }
	        }
	    }]);
	
	    return Accordion;
	}();
	
	exports.default = Accordion;

/***/ }
/******/ ]);
//# sourceMappingURL=main-bundle.js.map