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

var MAZE_CONTROLLER = "MAZE_CONTROLLER"; // Main class used for switching between algorithm frames

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
/* harmony import */ var _maze_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maze_text */ "./js/maze_text.js");
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

var DIRECTIONS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
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
      row.push(EMPTY);
    }

    this.grid = [];

    for (var _k = 0; _k < height; _k++) {
      this.grid.push(row.slice());
    }

    this.grid[0][0] = START;
    this.grid[this.width - 1][this.height - 1] = FINISH; // maze building & solving initialization 

    this.mazeBuilderOn = true;
    this.startMazeBuilderEvents();
    this.solving = false;
    this.solve = 0;
    this.delay = 50;
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTextDiv)("frame_panel", "algo_text", ""); // protecting callbacks

    this.drawSquare = this.drawSquare.bind(this);
    this.conditionalDrawSquare = this.conditionalDrawSquare.bind(this);
    this.clearMaze = this.clearMaze.bind(this);
    this.solveBFS = this.solveBFS.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.solveMouse = this.solveMouse.bind(this);
    this.solveManhattan = this.solveManhattan.bind(this);
    this.rightMove = this.rightMove.bind(this);
    this.solveRight = this.solveRight.bind(this);
    this.reload = this.reload.bind(this);
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
    } // drawSquare(x,y) 

  }, {
    key: "conditionalDrawSquare",
    value: function conditionalDrawSquare(x, y, solve) {
      if (this.solve === solve) this.drawSquare(x, y);
    } // clear maze 

  }, {
    key: "clearMaze",
    value: function clearMaze() {
      for (var x = 0; x < this.width; x++) {
        for (var y = 0; y < this.height; y++) {
          this.grid[x][y] = EMPTY;
        }
      }

      this.grid[0][0] = START;
      this.grid[this.width - 1][this.height - 1] = FINISH;
      this.draw();
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

      if (this.solving) return;
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.removeElement)("algo_text");
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTextDiv)("frame_panel", "algo_text", _maze_text__WEBPACK_IMPORTED_MODULE_1__.bfsText);
      this.reload();
      this.solving = true;
      this.solve += 1;
      var solve = this.solve;
      var start = this.getStart();
      var q = new _util__WEBPACK_IMPORTED_MODULE_0__.Queue();
      var numSquares = 0;
      q.enqueque(start);

      var _loop = function _loop() {
        var square = q.dequeque();
        if (_this2.grid[square[0]][square[1]] === VISITED) return "continue";
        if (_this2.grid[square[0]][square[1]] === FINISH) return "break";
        _this2.grid[square[0]][square[1]] = VISITED;
        setTimeout(function () {
          return _this2.conditionalDrawSquare(square[0], square[1], solve);
        }, _this2.delay * (numSquares + 1));
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
      if (this.solving) return;
      this.reload();
      this.solving = true;
      this.solve += 1;
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.removeElement)("algo_text");
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTextDiv)("frame_panel", "algo_text", _maze_text__WEBPACK_IMPORTED_MODULE_1__.mouseText);
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

      if (!this.solving) return;

      if (this.getValue(currentSquare) == FINISH) {
        this.solving = false;
        return;
      }

      var options = this.getDirectionOptions(currentSquare);
      var newDirection = currentDirection;
      if (options.length == 1) newDirection = options[0];

      if (options.length == 2 && !options.includes(currentDirection)) {
        options = options.filter(function (option) {
          return option[0] != -1 * currentDirection[0] || option[1] != -1 * currentDirection[1];
        });
        newDirection = options[0];
      }

      if (options.length == 3) {
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
      }, this.delay);
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
      return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    }
  }, {
    key: "solveManhattan",
    value: function solveManhattan() {
      var _this4 = this;

      if (this.solving) return;
      this.reload();
      this.solving = true;
      this.solve += 1;
      var solve = this.solve;
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.removeElement)("algo_text");
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTextDiv)("frame_panel", "algo_text", _maze_text__WEBPACK_IMPORTED_MODULE_1__.manhattanText);
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
          setTimeout(function () {
            return _this4.solving = false;
          }, _this4.delay * (numSquares + 1));
          return "break";
        }

        _this4.grid[square[0]][square[1]] = VISITED;
        setTimeout(function () {
          return _this4.conditionalDrawSquare(square[0], square[1], solve);
        }, _this4.delay * (numSquares + 1));
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
    } // Right algorithm routines

  }, {
    key: "rightTurn",
    value: function rightTurn(d) {
      return (d + 1) % 4;
    }
  }, {
    key: "leftTurn",
    value: function leftTurn(d) {
      return (d + 3) % 4;
    }
  }, {
    key: "rightWallable",
    value: function rightWallable(currentSquare, currentDirectionIndex) {
      var right = this.rightTurn(currentDirectionIndex);
      var forwardSquare = currentSquare.slice();
      forwardSquare[0] += DIRECTIONS[right][0];
      forwardSquare[1] += DIRECTIONS[right][1];
      return forwardSquare[0] < 0 || forwardSquare[0] >= this.width || forwardSquare[1] < 0 || forwardSquare[1] >= this.height || this.getValue(forwardSquare) == WALL;
    }
  }, {
    key: "solveRight",
    value: function solveRight() {
      if (this.solving) return;
      this.reload();
      this.solving = true;
      this.solve += 1;
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.removeElement)("algo_text");
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTextDiv)("frame_panel", "algo_text", _maze_text__WEBPACK_IMPORTED_MODULE_1__.rightText);
      var currentSquare = this.getStart();
      var currentDirectionIndex = 0;
      var options = this.getDirectionOptions(currentSquare);

      if (options.length == 0) {
        console.log("game over man, game over");
        return;
      }

      this.rightMove(currentSquare, currentDirectionIndex);
    }
  }, {
    key: "rightMove",
    value: function rightMove(currentSquare, currentDirectionIndex) {
      var _this5 = this;

      if (!this.solving) return;

      if (this.getValue(currentSquare) == FINISH) {
        this.solving = false;
        return;
      }

      if (this.rightWallable(currentSquare, currentDirectionIndex)) {
        while (!this.acceptableDirection(currentSquare, DIRECTIONS[currentDirectionIndex])) {
          currentDirectionIndex = this.leftTurn(currentDirectionIndex);
        }
      } else currentDirectionIndex = this.rightTurn(currentDirectionIndex);

      if (this.getValue(currentSquare) == VISITED) {
        this.setValue(currentSquare, EMPTY);
        this.drawSquare(currentSquare[0], currentSquare[1]);
      }

      currentSquare[0] += DIRECTIONS[currentDirectionIndex][0];
      currentSquare[1] += DIRECTIONS[currentDirectionIndex][1];
      if (this.getValue(currentSquare) == EMPTY) this.setValue(currentSquare, VISITED);
      this.drawSquare(currentSquare[0], currentSquare[1]);
      setTimeout(function () {
        return _this5.rightMove(currentSquare, currentDirectionIndex);
      }, this.delay);
    } // Backup and reload methods

  }, {
    key: "backup",
    value: function backup() {
      this.backupGrid = (0,_util__WEBPACK_IMPORTED_MODULE_0__.deepDup)(this.grid);
    }
  }, {
    key: "reload",
    value: function reload() {
      this.grid = (0,_util__WEBPACK_IMPORTED_MODULE_0__.deepDup)(this.backupGrid);
      this.solving = false;
      this.solve += 1;
      this.draw();
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
/* harmony import */ var _maze_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maze_text */ "./js/maze_text.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // modes for MazeController

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
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.createTextDiv)("maze_bar", "create_maze_text_div", "Create Maze", {
      callback: function callback() {
        return _this.switchMode(CREATE_MAZE_MODE);
      },
      className: "selectable_element"
    });
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.createTextDiv)("maze_bar", "solve_maze_text_div", "Solve Maze", {
      callback: function callback() {
        return _this.switchMode(SOLVE_MAZE_MODE);
      },
      className: "selectable_element"
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
      var _this2 = this;

      switch (mode) {
        case CREATE_MAZE_MODE:
          if (this.canvas) {
            (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("canvas");
          }

          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElement)("frame_elements", "canvas", "canvas");
          this.canvas = document.getElementById("canvas");
          this.canvas.parentNode.insertBefore(this.canvas, document.getElementById("frame_panel"));
          this.maze = new _maze__WEBPACK_IMPORTED_MODULE_0__.Maze(30, 30, this.canvas);
          this.maze.draw();
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createTextDiv)("frame_panel", "create_maze_text", _maze_text__WEBPACK_IMPORTED_MODULE_2__.createMazeText);
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createTextDiv)("frame_panel", "clear_maze_text_div", "Clear Maze", {
            callback: this.maze.clearMaze,
            className: "selectable_element"
          });
          break;

        case SOLVE_MAZE_MODE:
          this.maze.backup();
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createTextDiv)("frame_panel", "solve_bfs_text_div", "Solve with Breadth-First-Search", {
            callback: this.maze.solveBFS,
            className: "selectable_element"
          });
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createTextDiv)("frame_panel", "solve_mouse_text_div", "Solve with Random Mouse Algorithm", {
            callback: this.maze.solveMouse,
            className: "selectable_element"
          });
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createTextDiv)("frame_panel", "solve_manhattan_text_div", "Solve with the Manhattan Algorithm", {
            callback: this.maze.solveManhattan,
            className: "selectable_element"
          });
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createTextDiv)("frame_panel", "solve_right_text_div", "Solve with Right-Hand Rule Algorithm", {
            callback: this.maze.solveRight,
            className: "selectable_element"
          });
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElement)("frame_panel", "form", "maze_speed_form");
          var maze_speed_form = document.getElementById("maze_speed_form");
          var maze_speed_text = document.createTextNode("Adjust delay");
          maze_speed_form.appendChild(maze_speed_text);
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElement)("maze_speed_form", "input", "maze_speed_input");
          var maze_speed_input = document.getElementById("maze_speed_input");
          maze_speed_input.setAttribute("type", "range");
          maze_speed_input.setAttribute("min", "10");
          maze_speed_input.setAttribute("max", "200");
          maze_speed_input.setAttribute("value", "80");
          maze_speed_input.addEventListener("change", function (e) {
            return _this2.maze.delay = document.getElementById("maze_speed_input").value;
          });
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.createTextDiv)("frame_panel", "reset_maze_text_div", "Reset Maze", {
            callback: this.maze.reload,
            className: "selectable_element"
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
          this.maze.mazeBuilderOn = false;
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("create_maze_text");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("clear_maze_text_div");
          break;

        case SOLVE_MAZE_MODE:
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("algo_text");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("solve_bfs_text_div");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("solve_mouse_text_div");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("solve_manhattan_text_div");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("solve_right_text_div");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("maze_speed_form");
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeElement)("reset_maze_text_div");
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

/***/ "./js/maze_text.js":
/*!*************************!*\
  !*** ./js/maze_text.js ***!
  \*************************/
/*! namespace exports */
/*! export bfsText [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createMazeText [provided] [no usage info] [missing usage info prevents renaming] */
/*! export manhattanText [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mouseText [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rightText [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMazeText": () => /* binding */ createMazeText,
/* harmony export */   "bfsText": () => /* binding */ bfsText,
/* harmony export */   "mouseText": () => /* binding */ mouseText,
/* harmony export */   "manhattanText": () => /* binding */ manhattanText,
/* harmony export */   "rightText": () => /* binding */ rightText
/* harmony export */ });
var createMazeText = "Directions: simply hold the mouse down over the grid and drag the cursor to create your desired path. You can erase in the same way. When you’re ready to see your maze solved, click Solve Maze. When creating the maze, remember that movement on the grid by the maze-solver is only possible upwards, leftwards, rightwards, or downwards. *No* diagonal movement.";
var bfsText = "Breadth-first search (BFS) begins by adding the start of the maze to a queue. Next, it repeatedly dequeues the very first node of the queue, and if the node is unvisited, marks it as visited and adds all of its accessible unvisited neighbors to the queue. It’s guaranteed to find the solution for any solvable maze in linear time (with respect to the total size of the maze). Furthermore, it also finds the shortest path from start to finish (note that this is not the same thing as touching the least number of squares in the course of trying to solve the maze). Watch BFS expand uniformly in all directions without prejudice. If you create a junction of paths, you can watch the algorithm suddenly split its attention, going both directions at once.";
var mouseText = "The Random Mouse algorithm is pretty slow. For future iterations, you may want to jam that delay slider all the way to the left. The Random Mouse algorithm is also pretty simple. Much like a mouse, it simply tries to keep going in the same direction as long as it can. As soon as it can’t, it picks a new direction randomly from the directions available. If it comes to a junction, it picks a path randomly. This algorithm can be somewhat frustrating to watch. Nevertheless, as long as the maze is actually solvable, over a long enough time period the probability that Random Mouse will solve the maze goes to infinity.";
var manhattanText = "The Manhattan algorithm is very similar to BFS. However, whereas BFS operates according to the FIFO (“first in, first out”) logic of the queue, the Manhattan algorithm gives every node a score consisting of the sum of its horizontal and vertical absolute differences from the maze finish and, at each moment, picks the highest-scoring node next to some node it’s previously visited. It removes the node from the priority queue, marks it as visited, and adds all of its unvisited, accessible neighbors to the priority queue. Always selecting the closest node from the priority queue comes at a price, however. Adding a node and removing the closest node from the priority queue each take O(logN) time, compared to the O(1) operations of enqueueing and dequeing in BFS. Try creating a maze that gets very close to the finish, then requires swerving considerably away from it. The Manhattan algorithm will shoot straight toward the finish before having to backfill and find another way closer.";
var rightText = "The Right-Hand Rule algorithm is something you could use in a real-life maze. Simply keep walking with your right hand always touching a wall. Under certain starting constraints pertaining to maze orientation (satisfied here), you will always reach the end of the maze. Try creating a solvable maze that the Right-Hand Rule algorithm cannot solve. You will not succeed.";

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
/*! export createTextDiv [provided] [no usage info] [missing usage info prevents renaming] */
/*! export deepDup [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => /* binding */ createElement,
/* harmony export */   "createButton": () => /* binding */ createButton,
/* harmony export */   "createTextDiv": () => /* binding */ createTextDiv,
/* harmony export */   "removeElement": () => /* binding */ removeElement,
/* harmony export */   "Queue": () => /* binding */ Queue,
/* harmony export */   "PriorityQueue": () => /* binding */ PriorityQueue,
/* harmony export */   "deepDup": () => /* binding */ deepDup
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// DOM utilities
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
function createTextDiv(parentId, id, text) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var parentElement = document.getElementById(parentId);
  var newElement = document.createElement("div");
  var textElement = document.createTextNode(text);
  newElement.appendChild(textElement);
  newElement.setAttribute("id", id);
  if (options.className) newElement.setAttribute("class", options.className);
  if (options.callback) newElement.onclick = options.callback;
  parentElement.appendChild(newElement);
  return newElement;
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
    }
  }, {
    key: "swim",
    value: function swim(index) {
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
function deepDup(arr) {
  if (!(arr instanceof Array)) return arr;
  return arr.map(function (ele) {
    return deepDup(ele);
  });
}

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