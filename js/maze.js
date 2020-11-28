import {Queue, PriorityQueue, deepDup, removeElement, createTextDiv} from './util';
import {bfsText, mouseText, manhattanText, rightText} from "./maze_text";

// meaning of grid values
const EMPTY = 0;
const WALL = 1;
const START = 2;
const FINISH = 3;
const VISITED = 4;

// edge of canvas, square side, square padding
const GRID_OFFSET = 3;
const SQUARE_SIDE = 17;
const SQUARE_PADDING = 1;

// directions used in several algorithms
const DIRECTIONS = [[1, 0], [0, 1], [-1, 0], [0, -1]];

export class Maze {
  constructor(width, height, canvas) {
    // set up stuff with main canvas panel
    this.width = width;
    this.height = height;
    this.canvas = canvas;
    canvas.width = GRID_OFFSET*2 + SQUARE_SIDE*width;
    canvas.height = GRID_OFFSET*2 + SQUARE_SIDE*height;
    this.ctx = canvas.getContext("2d");

    // grid initialization
    let row = [];
    for (let k = 0; k < width; k++)
      row.push(EMPTY);
    this.grid = [];
    for (let k = 0; k < height; k++)
      this.grid.push(row.slice());

    this.grid[0][0] = START;
    this.grid[this.width-1][this.height-1] = FINISH;

    // maze building & solving initialization 
    this.mazeBuilderOn = true;
    this.startMazeBuilderEvents();
    this.solving = false;
    this.delay = 100;

    createTextDiv("frame_panel", "algo_text", "");

    // protecting callbacks
    this.drawSquare = this.drawSquare.bind(this); // see if really need this at some point
    this.solveBFS = this.solveBFS.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.solveMouse = this.solveMouse.bind(this);
    this.solveManhattan = this.solveManhattan.bind(this);
    this.rightMove = this.rightMove.bind(this);
    this.solveRight = this.solveRight.bind(this);
  }

  // getters and setters

  getValue(pos) {
    return this.grid[pos[0]][pos[1]];
  }

  setValue(pos, value) {
    this.grid[pos[0]][pos[1]] = value;
  }

  // draw entire maze
  draw() {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, GRID_OFFSET * 2 + this.width * SQUARE_SIDE, GRID_OFFSET * 2 + this.height * SQUARE_SIDE);
    for (let x = 0; x < this.width; x++) {
      for (let y= 0; y < this.height; y++) {
        this.drawSquare(x,y);
      }
    }
  }

  // draw individual square
  drawSquare(x,y) {
    let squareType = this.grid[x][y];
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
    this.ctx.fillRect(GRID_OFFSET + x*SQUARE_SIDE + SQUARE_PADDING, GRID_OFFSET + y*SQUARE_SIDE + SQUARE_PADDING,
      SQUARE_SIDE - 2*SQUARE_PADDING, SQUARE_SIDE - 2*SQUARE_PADDING );
  }

  // is mouse in mazeGrid
  inGrid(x, y) {
    return (x > GRID_OFFSET) && (y > GRID_OFFSET)
      && (x < GRID_OFFSET + this.width*SQUARE_SIDE)
      && (y < GRID_OFFSET + this.height*SQUARE_SIDE);
  }

  // convert mouse position into grid coordinates
  convertToGrid(x, y) {
    return [Math.floor((x-GRID_OFFSET)/SQUARE_SIDE),
      Math.floor((y-GRID_OFFSET)/SQUARE_SIDE)
    ];
  }

  // Flip a square between empty and wall
  flip(x,y) {
    if (this.grid[x][y] == this.flipTarget) {
      this.grid[x][y] = this.grid[x][y] == WALL ? EMPTY : WALL
      this.drawSquare(x,y);        
    }
  }

  // Set up events for maze building
  startMazeBuilderEvents() {
    this.canvas.addEventListener('mousedown', e => {
      if (this.mazeBuilderOn) {
        if (this.inGrid(e.offsetX, e.offsetY)) {
          let pos = this.convertToGrid(e.offsetX, e.offsetY);
          let [x, y] = pos;
          if (this.grid[x][y] == EMPTY || this.grid[x][y] == WALL) {
            this.isBuilding = true;
            this.flipTarget = this.grid[x][y];
            this.flip(x,y);  
          }
        }
      }
    });
  
    this.canvas.addEventListener('mousemove', e => {
      if (this.isBuilding) {
        if (this.inGrid(e.offsetX, e.offsetY)) {
          let [x, y] = this.convertToGrid(e.offsetX, e.offsetY)
          this.flip(x, y);
        }
      }
    });

    this.canvas.addEventListener('mouseup', e => {
      if (this.isBuilding) {
        this.isBuilding = false;
      }
    });
  }
  
  solveBFS() {
    if (this.solving)
      return;
    this.solving = true;

    removeElement("algo_text");
    createTextDiv("frame_panel", "algo_text", bfsText);

    this.reload();
    let start = this.getStart();     
    let q = new Queue;
    let numSquares = 0;
    q.enqueque(start);
    while (q.length() > 0) {
      let square = q.dequeque();
      if (this.grid[square[0]][square[1]] === VISITED)
        continue;
      if (this.grid[square[0]][square[1]] === FINISH) {
        // console.log("finished");
        setTimeout(() => this.solving = false, this.delay*(numSquares+1));
        break;
      }

      this.grid[square[0]][square[1]] = VISITED;
      setTimeout(() => this.drawSquare(square[0], square[1]), this.delay*(numSquares + 1));
      numSquares++;
      
      for (let d=0; d<4; d++) {
        let neighborX = square[0] + DIRECTIONS[d][0];
        let neighborY = square[1] + DIRECTIONS[d][1];
        if (neighborX < 0 || neighborX >= this.width || neighborY < 0 || neighborY >= this.height)
          continue;
        if (this.grid[neighborX][neighborY] == EMPTY || this.grid[neighborX][neighborY] == FINISH)
          q.enqueque([neighborX, neighborY]);
      }
    }
    setTimeout(() => this.solving = false, this.delay * (numSquares+1));
  }

  // locate start of maze
  getStart() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        if (this.grid[x][y] == START)
          return [x,y];
      }
    }
    console.log("didn't find a start!");
  }

  // locate end of maze
  getFinish() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        if (this.grid[x][y] == FINISH)
          return [x,y];
      }
    }
    console.log("didn't find a finish!");
  }
  
  // Mouse algorithm
  solveMouse() {
    if (this.solving)
      return;
    this.solving = true;

    removeElement("algo_text");
    createTextDiv("frame_panel", "algo_text", mouseText);

    this.reload();
    let currentSquare = this.getStart();     
    let options = this.getDirectionOptions(currentSquare);

    if (options.length == 0) {
      console.log("game over man, game over");
      return;
    }
    
    this.mouseMove(currentSquare, options[0]);
  }

  mouseMove(currentSquare, currentDirection) {
  
    if (this.getValue(currentSquare) == FINISH) {
      this.solving = false;
      return;
    }

    let options = this.getDirectionOptions(currentSquare);
    let newDirection = currentDirection;

    if (options.length == 1)
      newDirection = options[0];
    
    if (options.length == 2 && !options.includes(currentDirection)) {
      options = options.filter((option) =>
      option[0] != -1 * currentDirection[0] || option[1] != -1 * currentDirection[1]);
      newDirection = options[0];
    }

    if (options.length == 3) {
      options = options.filter((option) =>
        option[0] != -1 * currentDirection[0] || option[1] != -1 * currentDirection[1]);
      newDirection = options[Math.floor(Math.random() * options.length)];
    }

    if (this.getValue(currentSquare) == VISITED) {
      this.setValue(currentSquare, EMPTY);
      this.drawSquare(currentSquare[0], currentSquare[1]);
    }
    
    currentSquare[0] += newDirection[0];
    currentSquare[1] += newDirection[1];
    
    if (this.getValue(currentSquare) == EMPTY) 
      this.setValue(currentSquare, VISITED);
    this.drawSquare(currentSquare[0], currentSquare[1]);

    setTimeout(() => this.mouseMove(currentSquare, newDirection), this.delay);
  }

  getDirectionOptions(square) {
    let options = [];
    for (let d=0; d<4; d++) {
      if (this.acceptableDirection(square, DIRECTIONS[d]))
        options.push(DIRECTIONS[d]);
    }
    return options;
  }

  acceptableDirection(square, direction) {
    let neighborX = square[0] + direction[0];
    let neighborY = square[1] + direction[1];
    if (neighborX < 0 || neighborX >= this.width || neighborY < 0 || neighborY >= this.height)
      return false;
    if (this.grid[neighborX][neighborY] == WALL)
      return false
    return true;
  }

  manhattan(pos1, pos2) {
    return Math.abs(pos1[0]-pos2[0]) + Math.abs(pos1[1]-pos2[1]);
  }

  solveManhattan() {
    if (this.solving)
      return;
    this.solving = true;

    removeElement("algo_text");
    createTextDiv("frame_panel", "algo_text", manhattanText);

    this.reload();
    let finish = this.getFinish();
    let start = this.getStart();
    let q = new PriorityQueue((pos1, pos2) => {
      let dist1 = this.manhattan(pos1, finish);
      let dist2 = this.manhattan(pos2, finish);
      if (dist1 < dist2)
        return -1;
      else if (dist1 > dist2)
        return 1;
      else
        return 0;
    });
    let numSquares = 0;
    q.add(start);  
    while (q.length() > 0) {
      let square = q.pop();
      if (this.grid[square[0]][square[1]] === VISITED)
        continue;
      if (this.grid[square[0]][square[1]] === FINISH) {
        // console.log("finished");
        setTimeout(() => this.solving = false, this.delay*(numSquares+1));
        break;
      }

      this.grid[square[0]][square[1]] = VISITED;
      setTimeout(() => this.drawSquare(square[0], square[1]), this.delay*(numSquares + 1));
      numSquares++;
      
      for (let d=0; d<4; d++) {
        let neighborX = square[0] + DIRECTIONS[d][0];
        let neighborY = square[1] + DIRECTIONS[d][1];
        if (neighborX < 0 || neighborX >= this.width || neighborY < 0 || neighborY >= this.height)
          continue;
        if (this.grid[neighborX][neighborY] == EMPTY || this.grid[neighborX][neighborY] == FINISH)
          q.add([neighborX, neighborY]);
      }
    }
    setTimeout(() => this.solving = false, this.delay * (numSquares+1));
  }

  // Right algorithm routines

  rightTurn(d) {
    return (d+1)%4;
  }

  leftTurn(d) {
    return (d+3)%4;
  }

  rightWallable(currentSquare, currentDirectionIndex) {
    let right = this.rightTurn(currentDirectionIndex);
    let forwardSquare = currentSquare.slice();
    forwardSquare[0] += DIRECTIONS[right][0];
    forwardSquare[1] += DIRECTIONS[right][1];
    return forwardSquare[0] < 0 ||
      forwardSquare[0] >= this.width ||
      forwardSquare[1] < 0 ||
      forwardSquare[1] >= this.height ||
      this.getValue(forwardSquare) == WALL;
  }

  solveRight() {
    if (this.solving)
      return;
    this.solving = true;

    removeElement("algo_text");
    createTextDiv("frame_panel", "algo_text", rightText);

    this.reload();
    let currentSquare = this.getStart();
    let currentDirectionIndex = 0; 

    let options = this.getDirectionOptions(currentSquare);
    if (options.length == 0) {
      console.log("game over man, game over");
      return;
    }

    this.rightMove(currentSquare, currentDirectionIndex);
  }

  rightMove(currentSquare, currentDirectionIndex) {
    if (this.getValue(currentSquare) == FINISH) {
      this.solving = false;
      return;
    }

    if (this.rightWallable(currentSquare, currentDirectionIndex)) {
      while (!this.acceptableDirection(currentSquare, DIRECTIONS[currentDirectionIndex]))
        currentDirectionIndex = this.leftTurn(currentDirectionIndex);
    } else
      currentDirectionIndex = this.rightTurn(currentDirectionIndex);

    if (this.getValue(currentSquare) == VISITED) {
      this.setValue(currentSquare, EMPTY);
      this.drawSquare(currentSquare[0], currentSquare[1]);
    }

    currentSquare[0] += DIRECTIONS[currentDirectionIndex][0];
    currentSquare[1] += DIRECTIONS[currentDirectionIndex][1];
 
    if (this.getValue(currentSquare) == EMPTY) 
      this.setValue(currentSquare, VISITED);
    this.drawSquare(currentSquare[0], currentSquare[1]);
    setTimeout(() => this.rightMove(currentSquare, currentDirectionIndex), this.delay);
  }
  
  // Backup and reload methods

  backup() {
    this.backupGrid = deepDup(this.grid);
  }

  reload() {
    this.grid = deepDup(this.backupGrid);
    this.draw();
  }
}