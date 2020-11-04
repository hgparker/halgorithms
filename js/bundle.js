/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maze */ "./js/maze.js");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Main.jss is running!");
  var mazeCanvas = document.getElementById("maze_canvas");
  var maze = new _maze__WEBPACK_IMPORTED_MODULE_0__.Maze(30, 30, mazeCanvas);
  maze.draw();
});

/***/ }),

/***/ "./js/maze.js":
/*!********************!*\
  !*** ./js/maze.js ***!
  \********************/
/*! namespace exports */
/*! export Maze [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Maze": () => /* binding */ Maze
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// meaning of grid values
var EMPTY = 0;
var WALL = 1;
var START = 2;
var FINISH = 3; // edge of canvas, square side, square padding

var GRID_OFFSET = 3;
var SQUARE_SIDE = 17;
var SQUARE_PADDING = 1;
var Maze = /*#__PURE__*/function () {
  function Maze(width, height, canvas) {
    _classCallCheck(this, Maze);

    this.width = width;
    this.height = height;
    this.document = canvas;
    this.ctx = canvas.getContext("2d"); // grid initialization

    var row = [];

    for (var k = 0; k < width; k++) {
      row.push(EMPTY);
    }

    this.grid = [];

    for (var _k = 0; _k < height; _k++) {
      this.grid.push(row.slice());
    }

    this.grid[0][0] = START;
    this.grid[this.width - 1][this.height - 1] = FINISH; // maze building initialization

    this.mazeBuilderOn = true;
    this.mazeBuilderEvents();
  } // draw entire maze


  _createClass(Maze, [{
    key: "draw",
    value: function draw() {
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(0, 0, GRID_OFFSET * 2 + this.width * SQUARE_SIDE, GRID_OFFSET * 2 + this.height * SQUARE_SIDE);

      for (var x = 0; x < this.width; x++) {
        for (var y = 0; y < this.height; y++) {
          this.drawSquare(x, y);
        }
      }
    } // draw individual square

  }, {
    key: "drawSquare",
    value: function drawSquare(x, y) {
      var squareType = this.grid[x][y];

      switch (squareType) {
        case EMPTY:
          this.ctx.fillStyle = "black";
          break;

        case WALL:
          this.ctx.fillStyle = "white";
          break;

        case START:
          this.ctx.fillStyle = "green";
          break;

        case FINISH:
          this.ctx.fillStyle = "red";
          break;
      }

      this.ctx.fillRect(GRID_OFFSET + x * SQUARE_SIDE + SQUARE_PADDING, GRID_OFFSET + y * SQUARE_SIDE + SQUARE_PADDING, SQUARE_SIDE - 2 * SQUARE_PADDING, SQUARE_SIDE - 2 * SQUARE_PADDING);
    } // is mouse in mazeGrid

  }, {
    key: "inGrid",
    value: function inGrid(x, y) {
      return x >= GRID_OFFSET && y >= GRID_OFFSET && x <= GRID_OFFSET + this.width * SQUARE_SIDE && y <= GRID_OFFSET + this.height * SQUARE_SIDE;
    } // convert mouse position into grid coordinates

  }, {
    key: "convertToGrid",
    value: function convertToGrid(x, y) {
      return [Math.floor((x - GRID_OFFSET) / SQUARE_SIDE), Math.floor((y - GRID_OFFSET) / SQUARE_SIDE)];
    } // Flip a square between empty and wall

  }, {
    key: "flip",
    value: function flip(x, y) {
      if (this.grid[x][y] == this.flipTarget) {
        this.grid[x][y] = this.grid[x][y] == WALL ? EMPTY : WALL;
        this.drawSquare(x, y);
      }
    } // Set up events for maze building

  }, {
    key: "mazeBuilderEvents",
    value: function mazeBuilderEvents() {
      var _this = this;

      this.document.addEventListener('mousedown', function (e) {
        if (_this.mazeBuilderOn) {
          if (_this.inGrid(e.offsetX, e.offsetY)) {
            var pos = _this.convertToGrid(e.offsetX, e.offsetY);

            var _pos = _slicedToArray(pos, 2),
                x = _pos[0],
                y = _pos[1];

            if (_this.grid[x][y] == EMPTY || _this.grid[x][y] == WALL) {
              _this.isBuilding = true;
              _this.flipTarget = _this.grid[x][y];

              _this.flip(x, y);
            }
          }
        }
      });
      this.document.addEventListener('mousemove', function (e) {
        if (_this.isBuilding) {
          if (_this.inGrid(e.offsetX, e.offsetY)) {
            var _this$convertToGrid = _this.convertToGrid(e.offsetX, e.offsetY),
                _this$convertToGrid2 = _slicedToArray(_this$convertToGrid, 2),
                x = _this$convertToGrid2[0],
                y = _this$convertToGrid2[1];

            _this.flip(x, y);
          }
        }
      });
      this.document.addEventListener('mouseup', function (e) {
        if (_this.isBuilding) {
          _this.isBuilding = false;
        }
      });
    }
  }]);

  return Maze;
}(); // function drawLine(context, x1, y1, x2, y2) {
//   context.beginPath();
//   context.strokeStyle = 'red';
//   context.lineWidth = 1;
//   context.moveTo(x1, y1);
//   context.lineTo(x2, y2);
//   context.stroke();
//   context.closePath();
// }

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map