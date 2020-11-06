import {Maze} from "./maze";
import { createButton, createElement, removeElement } from "./util";

// modes for MazeController
// all use this.maze
const CREATE_MAZE_MODE = 'CREATE_MAZE_MODE';
const DEFAULT_MAZE_MODE = "DEFAULT_MAZE_MODE";
const SOLVE_MAZE_MODE = "SOLVE_MAZE_MODE";
const SOLVED_MAZE_MODE = "SOLVED_MAZE_MODE";

export class MazeController {
  constructor() {

    // Set up main panels we'll need for mode control
    this.mainCanvas = document.getElementById("main_canvas");
    createElement("frame_panel", "div", "maze_bar", "nav_bar");
    createButton("maze_bar", "Create Maze", () => this.switchMode(CREATE_MAZE_MODE));
    createButton("maze_bar", "Solve Maze", () => this.switchMode(SOLVE_MAZE_MODE));

    // Initialize to pure create
    this.startMode(CREATE_MAZE_MODE);

    // Protect callbacks
    this.switchMode = this.switchMode.bind(this);
  }

  // switch modes in maze_controller

  switchMode(mode) {
    if (mode === this.currentMode)
      return;
    this.stopMode(this.currentMode);
    this.startMode(mode);
  }



  // start mode
  startMode(mode) {
    switch (mode) {
      case CREATE_MAZE_MODE:
        console.log("entering create_maze mode")
        this.maze = new Maze(30, 30, this.mainCanvas);
        this.maze.draw();
        break;
      case SOLVE_MAZE_MODE:
        // debugger;
        console.log("entering solve maze mode");
        createButton("frame_panel", "Solve with BFS", this.maze.solveBFS);
        createButton("frame_panel", "Solve with Mouse", this.maze.solveMouse);      
        break;
    }
    this.currentMode = mode;
  }

  // leave mode
  stopMode(mode) {
    switch (mode) {
      case CREATE_MAZE_MODE:
        console.log("leaving create_maze mode");
      // exit code here
        break;
      case SOLVE_MAZE_MODE:
        console.log("leaving solve_maze mode");
        break;
    }
  }
  
  // shut down whole component
  stopFrame() {

    removeElement("maze_bar");

  }
}