import {Queue} from './util';

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

export class Maze {
  constructor(width, height, canvas) {
    // set up stuff with main canvas panel
    this.width = width;
    this.height = height;
    this.document = canvas;
    canvas.width = GRID_OFFSET*2 + SQUARE_SIDE*width;
    canvas.height = GRID_OFFSET*2 + SQUARE_SIDE*height;
    this.ctx = canvas.getContext("2d");

    // set up frame panel

    // grid initialization
    let row = [];
    for (let k = 0; k < width; k++)
      row.push(WALL);
    this.grid = [];
    for (let k = 0; k < height; k++)
      this.grid.push(row.slice());

    this.grid[0][0] = START;
    this.grid[this.width-1][this.height-1] = FINISH;

    // maze building initialization
    this.mazeBuilderOn = true;
    this.mazeBuilderEvents();

    // protecting callbacks
    this.solveBFS = this.solveBFS.bind(this);
    this.drawSquare = this.drawSquare.bind(this);
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

  mazeBuilderEvents() {
    this.document.addEventListener('mousedown', e => {
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


    this.document.addEventListener('mousemove', e => {
      if (this.isBuilding) {
        if (this.inGrid(e.offsetX, e.offsetY)) {
          let [x, y] = this.convertToGrid(e.offsetX, e.offsetY)
          this.flip(x, y);
        }
      }
    });

    this.document.addEventListener('mouseup', e => {
      if (this.isBuilding) {
        this.isBuilding = false;
      }
    });
  }
  
  solveBFS() {
    let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let start = this.getStart();     
    let q = new Queue;
    let numSquares = 0;
    q.enqueque(start);
    while (q.length() > 0) {
      let square = q.dequeque();
      if (this.grid[square[0]][square[1]] === VISITED)
        continue;
      if (this.grid[square[0]][square[1]] === FINISH) {
        console.log("finished");
        break;
      }

      this.grid[square[0]][square[1]] = VISITED;
      setTimeout(() => this.drawSquare(square[0], square[1]), 100*(numSquares + 1), );
      numSquares++;
      
      for (let d=0; d<4; d++) {
        let neighborX = square[0] + directions[d][0];
        let neighborY = square[1] + directions[d][1];
        if (neighborX < 0 || neighborX >= this.width || neighborY < 0 || neighborY >= this.height)
          continue;
        if (this.grid[neighborX][neighborY] == EMPTY || this.grid[neighborX][neighborY] == FINISH)
          q.enqueque([neighborX, neighborY]);
      }
    }
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
}




