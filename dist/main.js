/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SortRenderer = /*#__PURE__*/function () {
  function SortRenderer() {
    _classCallCheck(this, SortRenderer);

    /* Settings */
    this.barSize = 5;
    this.animationSpeed = 100;
    this.barColor = '#333333';
    this.currentBarColor = '#c12c54';
    this.bgColor = '#666666';
    this.barWidth = 10;
    this.barGap = 0.5;
    this.toSortListSize = 50;
    this.toSortListMaxValue = 150;
    this.toSortlist = [];
    this.canvas = document.getElementById('graph');
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width = this.toSortListSize * (this.barWidth + this.barGap);
    this.height = this.canvas.height = this.barSize * this.toSortListMaxValue;
  }
  /* utility functions */


  _createClass(SortRenderer, [{
    key: "clearCanvas",
    value: function clearCanvas(bgColor, width, height) {
      this.context.fillStyle = bgColor;
      this.context.fillRect(0, 0, width, height);
    }
  }, {
    key: "generateListRand",
    value: function generateListRand(size, maxValue) {
      var numbers = [];

      for (var i = 0; i < size; i++) {
        numbers.push(Math.floor(Math.random() * maxValue));
      }

      return numbers;
    }
  }, {
    key: "drawNumberBar",
    value: function drawNumberBar(num, x, y, width, height, gap) {
      var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '#333333';
      x = x * (width + gap);
      this.context.fillStyle = color;
      this.context.fillRect(x, y, width, height * -num);
    }
  }, {
    key: "drawList",
    value: function drawList(nums, width, height, gap) {
      var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#333333';

      for (var i = 0; i < nums.length; i++) {
        this.drawNumberBar(nums[i], i, width, height, gap, color);
      }
    }
  }, {
    key: "drawCurrentBars",
    value: function drawCurrentBars(nums, x1, x2, y, width, height, gap) {
      var color = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '#c12c54';
      this.drawNumberBar(nums[x1], x1, y, width, height, gap, color);
      this.drawNumberBar(nums[x2], x2, y, width, height, gap, color);
    }
  }, {
    key: "render",
    value: function render() {
      this.toSortlist = this.generateListRand(this.toSortListSize, this.toSortListMaxValue);
      this.bubbleSort(this.toSortlist);
    }
    /* Sorting algorithms */

  }, {
    key: "bubbleSort",
    value: function bubbleSort(nums) {
      var _this = this;

      for (var i = 0; i < nums.length - 1; i++) {
        setTimeout(function () {
          var _loop = function _loop(j) {
            setTimeout(function () {
              if (nums[j + 1] < nums[j]) {
                // swap elements
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
              }

              _this.clearCanvas(_this.bgColor, _this.width, _this.height);

              _this.drawList(nums, _this.height, _this.barWidth, _this.barSize, _this.barGap, _this.barColor);

              _this.drawCurrentBars(nums, j, j + 1, _this.height, _this.barWidth, _this.barSize, _this.barGap, _this.currentBarColor);
            }, _this.animationSpeed * j);
          };

          for (var j = 0; j < nums.length - 1; j++) {
            _loop(j);
          }
        }, i * this.animationSpeed * nums.length);
      }
    }
  }, {
    key: "selectionSort",
    value: function selectionSort(nums) {
      var _this2 = this;

      var minIndex = 0;
      var temp = 0;

      var _loop2 = function _loop2(i) {
        setTimeout(function () {
          minIndex = i;

          for (var j = i + 1; j < nums.length; j++) {
            if (nums[minIndex] > nums[j]) minIndex = j;

            _this2.clearCanvas(_this2.bgColor, _this2.width, _this2.height);

            _this2.drawList(nums, _this2.height, _this2.barWidth, _this2.barSize, _this2.barGap, _this2.barColor);

            _this2.drawCurrentBars(nums, i, minIndex, _this2.height, _this2.barWidth, _this2.barSize, _this2.barGap, _this2.currentBarColor);
          } // swap elements


          temp = nums[i];
          nums[i] = nums[minIndex];
          nums[minIndex] = temp;
        }, _this2.animationSpeed * i); // to render sorted list properly at the end, clear colored bars

        setTimeout(function () {
          _this2.clearCanvas(_this2.bgColor, _this2.width, _this2.height);

          _this2.drawList(nums, _this2.height, _this2.barWidth, _this2.barSize, _this2.barGap, _this2.barColor);
        }, _this2.animationSpeed * nums.length);
      };

      for (var i = 0; i < nums.length; i++) {
        _loop2(i);
      }
    }
  }]);

  return SortRenderer;
}();

var a = new SortRenderer();
a.render();

/***/ })
/******/ ]);