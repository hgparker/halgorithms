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
/* harmony import */ var _main_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_controller */ "./js/main_controller.js");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Main.jss is running!");
  var mainControl = new _main_controller__WEBPACK_IMPORTED_MODULE_0__.MainController();
});

/***/ }),

/***/ "./js/main_controller.js":
/*!*******************************!*\
  !*** ./js/main_controller.js ***!
  \*******************************/
/*! namespace exports */
/*! export MainController [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainController": () => /* binding */ MainController
/* harmony export */ });
/* harmony import */ var _maze_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maze_controller */ "./js/maze_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Constants for switching between algorithm frames

var MAZE_CONTROLLER = "MAZE_CONTROLLER"; // this.mazeController
// Main class used for switching between algorithm frames

var MainController = /*#__PURE__*/function () {
  function MainController() {
    _classCallCheck(this, MainController);

    // set up control mechanisms for frame switching  
    // set up initial frame and run code
    this.currentFrame = MAZE_CONTROLLER;
    this.startMazeController();
  } // switch controllers


  _createClass(MainController, [{
    key: "switchFrame",
    value: function switchFrame(newFrame) {
      // shut down current frame
      switch (this.currentFrame) {
        case MAZE_CONTROLLER:
          this.stopMazeController();
          break;
      } // start up the new frame


      switch (newFrame) {
        case MAZE_CONTROLLER:
          this.startMazeController();
          break;
      }

      this.currentFrame = newFrame;
    } // Start maze frame

  }, {
    key: "startMazeController",
    value: function startMazeController() {
      this.mazeController = new _maze_controller__WEBPACK_IMPORTED_MODULE_0__.MazeController();
    } // shut down this.mazeController

  }, {
    key: "stopMazeController",
    value: function stopMazeController() {
      this.mazeController.terminate();
      delete this.mazeController;
    }
  }]);

  return MainController;
}();

/***/ }),

/***/ "./js/maze.js":
/*!********************!*\
  !*** ./js/maze.js ***!
  \********************/
/*! namespace exports */
/*! export Maze [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Maze": () => /* binding */ Maze
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./js/util.js");
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
var FINISH = 3;
var VISITED = 4; // edge of canvas, square side, square padding

var GRID_OFFSET = 3;
var SQUARE_SIDE = 17;
var SQUARE_PADDING = 1; // directions used in several algorithms

var DIRECTIONS = [[-1, 0], [1, 0], [0, 1], [0, -1]];
var Maze = /*#__PURE__*/function () {
  function Maze(width, height, canvas) {
    _classCallCheck(this, Maze);

    // set up stuff with main canvas panel
    this.width = width;
    this.height = height;
    this.canvas = canvas;
    canvas.width = GRID_OFFSET * 2 + SQUARE_SIDE * width;
    canvas.height = GRID_OFFSET * 2 + SQUARE_SIDE * height;
    this.ctx = canvas.getContext("2d"); // grid initialization

    var row = [];

    for (var k = 0; k < width; k++) {
      row.push(WALL);
    }

    this.grid = [];

    for (var _k = 0; _k < height; _k++) {
      this.grid.push(row.slice());
    }

    this.grid[0][0] = START;
    this.grid[this.width - 1][this.height - 1] = FINISH; // maze building initialization

    this.mazeBuilderOn = true;
    this.startMazeBuilderEvents(); // protecting callbacks

    this.drawSquare = this.drawSquare.bind(this); // see if really need this at some point

    this.solveBFS = this.solveBFS.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.solveMouse = this.solveMouse.bind(this);
    this.solveManhattan = this.solveManhattan.bind(this);
  } // getters and setters


  _createClass(Maze, [{
    key: "getValue",
    value: function getValue(pos) {
      return this.grid[pos[0]][pos[1]];
    }
  }, {
    key: "setValue",
    value: function setValue(pos, value) {
      this.grid[pos[0]][pos[1]] = value;
    } // draw entire maze

  }, {
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
          this.ctx.fillStyle = "white";
          break;

        case WALL:
          this.ctx.fillStyle = "black";
          break;

        case START:
          this.ctx.fillStyle = "green";
          break;

        case FINISH:
          this.ctx.fillStyle = "red";
          break;

        case VISITED:
          this.ctx.fillStyle = "green";
          break;

        default:
          console.log("Bad grid value..." + squareType);
      }

      this.ctx.fillRect(GRID_OFFSET + x * SQUARE_SIDE + SQUARE_PADDING, GRID_OFFSET + y * SQUARE_SIDE + SQUARE_PADDING, SQUARE_SIDE - 2 * SQUARE_PADDING, SQUARE_SIDE - 2 * SQUARE_PADDING);
    } // is mouse in mazeGrid

  }, {
    key: "inGrid",
    value: function inGrid(x, y) {
      return x > GRID_OFFSET && y > GRID_OFFSET && x < GRID_OFFSET + this.width * SQUARE_SIDE && y < GRID_OFFSET + this.height * SQUARE_SIDE;
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
    key: "startMazeBuilderEvents",
    value: function startMazeBuilderEvents() {
      var _this = this;

      this.canvas.addEventListener('mousedown', function (e) {
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
      this.canvas.addEventListener('mousemove', function (e) {
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
      this.canvas.addEventListener('mouseup', function (e) {
        if (_this.isBuilding) {
          _this.isBuilding = false;
        }
      });
    }
  }, {
    key: "solveBFS",
    value: function solveBFS() {
      var _this2 = this;

      var start = this.getStart();
      var q = new _util__WEBPACK_IMPORTED_MODULE_0__.Queue();
      var numSquares = 0;
      q.enqueque(start);

      var _loop = function _loop() {
        var square = q.dequeque();
        if (_this2.grid[square[0]][square[1]] === VISITED) return "continue";

        if (_this2.grid[square[0]][square[1]] === FINISH) {
          console.log("finished");
          return "break";
        }

        _this2.grid[square[0]][square[1]] = VISITED;
        setTimeout(function () {
          return _this2.drawSquare(square[0], square[1]);
        }, 100 * (numSquares + 1));
        numSquares++;

        for (var d = 0; d < 4; d++) {
          var neighborX = square[0] + DIRECTIONS[d][0];
          var neighborY = square[1] + DIRECTIONS[d][1];
          if (neighborX < 0 || neighborX >= _this2.width || neighborY < 0 || neighborY >= _this2.height) continue;
          if (_this2.grid[neighborX][neighborY] == EMPTY || _this2.grid[neighborX][neighborY] == FINISH) q.enqueque([neighborX, neighborY]);
        }
      };

      while (q.length() > 0) {
        var _ret = _loop();

        if (_ret === "continue") continue;
        if (_ret === "break") break;
      }
    } // locate start of maze

  }, {
    key: "getStart",
    value: function getStart() {
      for (var x = 0; x < this.width; x++) {
        for (var y = 0; y < this.height; y++) {
          if (this.grid[x][y] == START) return [x, y];
        }
      }

      console.log("didn't find a start!");
    } // locate end of maze

  }, {
    key: "getFinish",
    value: function getFinish() {
      for (var x = 0; x < this.width; x++) {
        for (var y = 0; y < this.height; y++) {
          if (this.grid[x][y] == FINISH) return [x, y];
        }
      }

      console.log("didn't find a finish!");
    } // Mouse algorithm

  }, {
    key: "solveMouse",
    value: function solveMouse() {
      var currentSquare = this.getStart();
      var options = this.getDirectionOptions(currentSquare);

      if (options.length == 0) {
        console.log("game over man, game over");
        return;
      }

      this.mouseMove(currentSquare, options[0]);
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(currentSquare, currentDirection) {
      var _this3 = this;

      if (this.getValue(currentSquare) == FINISH) return;
      var options = this.getDirectionOptions(currentSquare);
      var newDirection = currentDirection;
      if (options.length == 1) newDirection = options[0];

      if (options.length == 2 && !options.includes(currentDirection)) {
        options = options.filter(function (option) {
          return option[0] != -1 * currentDirection[0] || option[1] != -1 * currentDirection[1];
        });
        newDirection = options[0];
      }

      if (options.length >= 3) {
        options = options.filter(function (option) {
          return option[0] != -1 * currentDirection[0] || option[1] != -1 * currentDirection[1];
        });
        newDirection = options[Math.floor(Math.random() * options.length)];
      }

      if (this.getValue(currentSquare) == VISITED) {
        this.setValue(currentSquare, EMPTY);
        this.drawSquare(currentSquare[0], currentSquare[1]);
      }

      currentSquare[0] += newDirection[0];
      currentSquare[1] += newDirection[1];
      if (this.getValue(currentSquare) == EMPTY) this.setValue(currentSquare, VISITED);
      this.drawSquare(currentSquare[0], currentSquare[1]);
      setTimeout(function () {
        return _this3.mouseMove(currentSquare, newDirection);
      }, 100);
    }
  }, {
    key: "getDirectionOptions",
    value: function getDirectionOptions(square) {
      var options = [];

      for (var d = 0; d < 4; d++) {
        if (this.acceptableDirection(square, DIRECTIONS[d])) options.push(DIRECTIONS[d]);
      }

      return options;
    }
  }, {
    key: "acceptableDirection",
    value: function acceptableDirection(square, direction) {
      var neighborX = square[0] + direction[0];
      var neighborY = square[1] + direction[1];
      if (neighborX < 0 || neighborX >= this.width || neighborY < 0 || neighborY >= this.height) return false;
      if (this.grid[neighborX][neighborY] == WALL) return false;
      return true;
    }
  }, {
    key: "manhattan",
    value: function manhattan(pos1, pos2) {
      console.log("called with " + pos1 + " and " + pos2);
      return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    }
  }, {
    key: "solveManhattan",
    value: function solveManhattan() {
      var _this4 = this;

      var finish = this.getFinish();
      var start = this.getStart();
      var q = new _util__WEBPACK_IMPORTED_MODULE_0__.PriorityQueue(function (pos1, pos2) {
        var dist1 = _this4.manhattan(pos1, finish);

        var dist2 = _this4.manhattan(pos2, finish);

        if (dist1 < dist2) return -1;else if (dist1 > dist2) return 1;else return 0;
      });
      var numSquares = 0;
      q.add(start);

      var _loop2 = function _loop2() {
        var square = q.pop();
        if (_this4.grid[square[0]][square[1]] === VISITED) return "continue";

        if (_this4.grid[square[0]][square[1]] === FINISH) {
          console.log("finished");
          return "break";
        }

        _this4.grid[square[0]][square[1]] = VISITED;
        setTimeout(function () {
          return _this4.drawSquare(square[0], square[1]);
        }, 100 * (numSquares + 1));
        numSquares++;

        for (var d = 0; d < 4; d++) {
          var neighborX = square[0] + DIRECTIONS[d][0];
          var neighborY = square[1] + DIRECTIONS[d][1];
          if (neighborX < 0 || neighborX >= _this4.width || neighborY < 0 || neighborY >= _this4.height) continue;
          if (_this4.grid[neighborX][neighborY] == EMPTY || _this4.grid[neighborX][neighborY] == FINISH) q.add([neighborX, neighborY]);
        }
      };

      while (q.length() > 0) {
        var _ret2 = _loop2();

        if (_ret2 === "continue") continue;
        if (_ret2 === "break") break;
      }
    }
  }]);

  return Maze;
}();

/***/ }),

/***/ "./js/maze_controller.js":
/*!*******************************!*\
  !*** ./js/maze_controller.js ***!
  \*******************************/
/*! namespace exports */
/*! export MazeController [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MazeController": () => /* binding */ MazeController
/* harmony export */ });
/* harmony import */ var _maze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maze */ "./js/maze.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./js/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // modes for MazeController
// all use this.maze

var CREATE_MAZE_MODE = 'CREATE_MAZE_MODE';
var DEFAULT_MAZE_MODE = "DEFAULT_MAZE_MODE";
var SOLVE_MAZE_MODE = "SOLVE_MAZE_MODE";
var SOLVED_MAZE_MODE = "SOLVED_MAZE_MODE";
var MazeController = /*#__PURE__*/function () {
  function MazeController() {
    var _this = this;

    _classCallCheck(this, MazeController);

    // Set up main panels we'll need for mode control
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElement)("frame_panel", "div", "maze_bar", {
      className: "nav_bar"
    });
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.createButton)("maze_bar", "create_maze_button", "Create Maze", {
      callback: function callback() {
        return _this.switchMode(CREATE_MAZE_MODE);
      }
    });
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.createButton)("maze_bar", "solve_maze_button", "Solve Maze", {
      callback: function callback() {
        return _this.switchMode(SOLVE_MAZE_MODE);
      }
    }); // Initialize to pure create

    this.startMode(CREATE_MAZE_MODE); // Protect callbacks

    this.switchMode = this.switchMode.bind(this);
  } // switch modes in maze_controller


  _createClass(MazeController, [{
    key: "switchMode",
    value: function switchMode(mode) {
      if (mode === this.currentMode) return;
      this.stopMode(this.currentMode);
      this.startMode(mode);
    } // start mode

  }, {
    key: "startMode",
    value: function startMode(mode) {
      switch (mode) {
        case CREATE_MAZE_MODE:
          console.log("entering create_maze mode");

          if (this.canvas) {
            (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("canvas");
          }

          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElement)("frame_elements", "canvas", "canvas");
          this.canvas = document.getElementById("canvas");
          this.canvas.parentNode.insertBefore(this.canvas, document.getElementById("frame_panel"));
          this.maze = new _maze__WEBPACK_IMPORTED_MODULE_0__.Maze(30, 30, this.canvas);
          this.maze.draw();
          break;

        case SOLVE_MAZE_MODE:
          console.log("entering solve maze mode");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createButton)("frame_panel", "solve_bfs_button", "Solve with BFS", {
            callback: this.maze.solveBFS
          });
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createButton)("frame_panel", "solve_mouse_button", "Solve with Mouse", {
            callback: this.maze.solveMouse
          });
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createButton)("frame_panel", "solve_manhattan_button", "Solve with Manhattan", {
            callback: this.maze.solveManhattan
          });
          break;
      }

      this.currentMode = mode;
    } // leave mode

  }, {
    key: "stopMode",
    value: function stopMode(mode) {
      switch (mode) {
        case CREATE_MAZE_MODE:
          console.log("leaving create_maze mode"); // exit code here

          break;

        case SOLVE_MAZE_MODE:
          console.log("leaving solve_maze mode");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("solve_bfs_button");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("solve_mouse_button");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("solve_manhattan_button");
          break;
      }
    } // shut down whole component

  }, {
    key: "stopFrame",
    value: function stopFrame() {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("maze_bar");
    }
  }]);

  return MazeController;
}();

/***/ }),

/***/ "./js/util.js":
/*!********************!*\
  !*** ./js/util.js ***!
  \********************/
/*! namespace exports */
/*! export PriorityQueue [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Queue [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => /* binding */ createElement,
/* harmony export */   "createButton": () => /* binding */ createButton,
/* harmony export */   "removeElement": () => /* binding */ removeElement,
/* harmony export */   "Queue": () => /* binding */ Queue,
/* harmony export */   "PriorityQueue": () => /* binding */ PriorityQueue
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// DOM utilities
// export function createElement(parentId, element, id, className) {
//   let parentElement = document.getElementById(parentId);
//   let newElement = document.createElement(element);
//   newElement.setAttribute("id", id);  
//   if (className)
//     newElement.setAttribute("class", className);
//   parentElement.appendChild(newElement);
// }
function createElement(parentId, element, id) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var parentElement = document.getElementById(parentId);
  var newElement = document.createElement(element);
  newElement.setAttribute("id", id);
  if (options.className) newElement.setAttribute("class", options.className);
  if (options.callback) newElement.onclick = options.callback;
  parentElement.appendChild(newElement);
  return newElement;
}
function createButton(parentId, buttonId, buttonText) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var newButton = createElement(parentId, "BUTTON", buttonId, options);
  var text = document.createTextNode(buttonText);
  newButton.appendChild(text);
}
function removeElement(id) {
  var element = document.getElementById(id);
  element.parentNode.removeChild(element);
} // DSA utilities

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.queueStart = 0;
    this.queueLength = 0;
    this.arr = [];
  }

  _createClass(Queue, [{
    key: "enqueque",
    value: function enqueque(q) {
      this.arr.push(q);
      this.queueLength++;
    }
  }, {
    key: "dequeque",
    value: function dequeque() {
      this.queueLength--;
      this.queueStart++;
      return this.arr[this.queueStart - 1];
    }
  }, {
    key: "length",
    value: function length() {
      return this.queueLength;
    }
  }]);

  return Queue;
}();
var PriorityQueue = /*#__PURE__*/function () {
  function PriorityQueue(cb) {
    _classCallCheck(this, PriorityQueue);

    this.arr = [[-999, -999]];
    this.cb = cb;
  }

  _createClass(PriorityQueue, [{
    key: "length",
    value: function length() {
      return this.arr.length - 1;
    }
  }, {
    key: "lastIndex",
    value: function lastIndex() {
      return this.length();
    }
  }, {
    key: "add",
    value: function add(element) {
      this.arr.push(element);
      this.swim(this.lastIndex());
      console.log("post-add: " + this.arr);
    }
  }, {
    key: "swim",
    value: function swim(index) {
      // debugger;
      while (Math.floor(index / 2) > 0 && this.cb(this.arr[Math.floor(index / 2)], this.arr[index]) == 1) {
        this.swap(Math.floor(index / 2), index);
        index = Math.floor(index / 2);
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.length() == 0) return;
      var retElement = this.arr[1];
      var index = 1;

      while (2 * index <= this.lastIndex()) {
        var left = 2 * index;
        var right = 2 * index + 1;

        if (right <= this.lastIndex() && this.cb(this.arr[right], this.arr[left]) == -1) {
          this.arr[index] = this.arr[right];
          index = right;
        } else {
          this.arr[index] = this.arr[left];
          index = left;
        }
      }

      if (index != this.lastIndex()) {
        this.swap(index, this.lastIndex());
        this.swim(index);
      }

      this.arr.pop();
      console.log("post-pop: " + this.arr);
      return retElement;
    }
  }, {
    key: "swap",
    value: function swap(a, b) {
      var temp = this.arr[a];
      this.arr[a] = this.arr[b];
      this.arr[b] = temp;
    }
  }]);

  return PriorityQueue;
}();

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