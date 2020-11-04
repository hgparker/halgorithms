

// meaning of grid values

const EMPTY = 0;
const WALL = 1;

// Edge of canvas, square side, square padding
const GRID_OFFSET = 3;
const SQUARE_SIDE = 15;
const SQUARE_PADDING = 1;

export class Maze {
  constructor(width, height, canvas) {
    this.width = width;
    this.height = height;
    this.document = canvas;
    this.ctx = canvas.getContext("2d");

    let row = [];
    for (let k = 0; k < width; k++)
      row.push(EMPTY);
    this.grid = [];
    for (let k = 0; k < height; k++)
      this.grid.push(row);

    this.mazeBuilderOn = true;
    this.mazeBuilderEvents();
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
        this.ctx.fillStyle = "black";
        break;
    }
    this.ctx.fillRect(GRID_OFFSET + x*SQUARE_SIDE + SQUARE_PADDING, GRID_OFFSET + y*SQUARE_SIDE + SQUARE_PADDING,
      SQUARE_SIDE - 2*SQUARE_PADDING, SQUARE_SIDE - 2*SQUARE_PADDING );
  }

  // is mouse in mazeGrid
  inGrid(x, y) {
    return (x >= GRID_OFFSET) && (y >= GRID_OFFSET)
      && (x <= GRID_OFFSET + this.width*SQUARE_SIDE)
      && (y <= GRID_OFFSET + this.height*SQUARE_SIDE);
  }

  // convert mouse position into grid coordinates
  convertToGrid(x, y) {
    return [Math.floor((x-GRID_OFFSET)/SQUARE_SIDE),
      Math.floor((x-GRID_OFFSET)/SQUARE_SIDE)
    ];
  }

  // Set up events for maze building

  mazeBuilderEvents() {
    this.document.addEventListener('mousedown', e => {
      if (this.mazeBuilderOn) {
        this.isDrawing = true;
        this.mbx = e.offsetX;
        this.mby = e.offsetY;
      }
    });

    this.document.addEventListener('mousemove', e => {
      if (this.isDrawing) {
        let x = e.offsetX;
        let y = e.offsetY;
        if (this.inGrid(x,y)) {
          drawLine(this.ctx, this.mbx, this.mby, x, y)
          this.mbx = x;
          this.mby = y;
        }
      }
    });

    this.document.addEventListener('mouseup', e => {
      if (this.isDrawing) {
        this.isDrawing = false;
        drawLine(this.ctx, this.mbx, this.mby, e.offsetX, e.offsetY);
        isDrawing = false;
      }
    });
  }
}

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}


