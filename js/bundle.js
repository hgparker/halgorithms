/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _maze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maze */ \"./js/maze.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Main.jss is running!\");\n  var mazeCanvas = document.getElementById(\"maze_canvas\");\n  var maze = new _maze__WEBPACK_IMPORTED_MODULE_0__.Maze(30, 30, mazeCanvas);\n  maze.draw();\n});\n\n//# sourceURL=webpack://halgorithms/./js/main.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Maze\": () => /* binding */ Maze\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// meaning of grid values\nvar EMPTY = 0;\nvar WALL = 1; // Edge of canvas, square side, square padding\n\nvar GRID_OFFSET = 3;\nvar SQUARE_SIDE = 15;\nvar SQUARE_PADDING = 1;\nvar Maze = /*#__PURE__*/function () {\n  function Maze(width, height, canvas) {\n    _classCallCheck(this, Maze);\n\n    this.width = width;\n    this.height = height;\n    this.document = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    var row = [];\n\n    for (var k = 0; k < width; k++) {\n      row.push(EMPTY);\n    }\n\n    this.grid = [];\n\n    for (var _k = 0; _k < height; _k++) {\n      this.grid.push(row);\n    }\n\n    this.mazeBuilderOn = true;\n    this.mazeBuilderEvents();\n  } // draw entire maze\n\n\n  _createClass(Maze, [{\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.fillStyle = \"grey\";\n      this.ctx.fillRect(0, 0, GRID_OFFSET * 2 + this.width * SQUARE_SIDE, GRID_OFFSET * 2 + this.height * SQUARE_SIDE);\n\n      for (var x = 0; x < this.width; x++) {\n        for (var y = 0; y < this.height; y++) {\n          this.drawSquare(x, y);\n        }\n      }\n    } // draw individual square\n\n  }, {\n    key: \"drawSquare\",\n    value: function drawSquare(x, y) {\n      var squareType = this.grid[x][y];\n\n      switch (squareType) {\n        case EMPTY:\n          this.ctx.fillStyle = \"black\";\n          break;\n      }\n\n      this.ctx.fillRect(GRID_OFFSET + x * SQUARE_SIDE + SQUARE_PADDING, GRID_OFFSET + y * SQUARE_SIDE + SQUARE_PADDING, SQUARE_SIDE - 2 * SQUARE_PADDING, SQUARE_SIDE - 2 * SQUARE_PADDING);\n    } // is mouse in mazeGrid\n\n  }, {\n    key: \"inGrid\",\n    value: function inGrid(x, y) {\n      return x >= GRID_OFFSET && y >= GRID_OFFSET && x <= GRID_OFFSET + this.width * SQUARE_SIDE && y <= GRID_OFFSET + this.height * SQUARE_SIDE;\n    } // convert mouse position into grid coordinates\n\n  }, {\n    key: \"convertToGrid\",\n    value: function convertToGrid(x, y) {\n      return [Math.floor((x - GRID_OFFSET) / SQUARE_SIDE), Math.floor((x - GRID_OFFSET) / SQUARE_SIDE)];\n    } // Set up events for maze building\n\n  }, {\n    key: \"mazeBuilderEvents\",\n    value: function mazeBuilderEvents() {\n      var _this = this;\n\n      this.document.addEventListener('mousedown', function (e) {\n        if (_this.mazeBuilderOn) {\n          _this.isDrawing = true;\n          _this.mbx = e.offsetX;\n          _this.mby = e.offsetY;\n        }\n      });\n      this.document.addEventListener('mousemove', function (e) {\n        if (_this.isDrawing) {\n          var x = e.offsetX;\n          var y = e.offsetY;\n\n          if (_this.inGrid(x, y)) {\n            drawLine(_this.ctx, _this.mbx, _this.mby, x, y);\n            _this.mbx = x;\n            _this.mby = y;\n          }\n        }\n      });\n      this.document.addEventListener('mouseup', function (e) {\n        if (_this.isDrawing) {\n          _this.isDrawing = false;\n          drawLine(_this.ctx, _this.mbx, _this.mby, e.offsetX, e.offsetY);\n          isDrawing = false;\n        }\n      });\n    }\n  }]);\n\n  return Maze;\n}();\n\nfunction drawLine(context, x1, y1, x2, y2) {\n  context.beginPath();\n  context.strokeStyle = 'red';\n  context.lineWidth = 1;\n  context.moveTo(x1, y1);\n  context.lineTo(x2, y2);\n  context.stroke();\n  context.closePath();\n}\n\n//# sourceURL=webpack://halgorithms/./js/maze.js?");

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