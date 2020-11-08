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
    createElement("frame_panel", "div", "maze_bar", {className: "nav_bar"});
    createButton("maze_bar", "create_maze_button", "Create Maze", {callback: () => this.switchMode(CREATE_MAZE_MODE)});
    createButton("maze_bar", "solve_maze_button", "Solve Maze", {callback: () => this.switchMode(SOLVE_MAZE_MODE)});


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
        if (this.canvas) {
          removeElement("canvas");
        
    }
        createElement("frame_elements", "canvas", "canvas");
        this.canvas = document.getElementById("canvas");
        this.canvas.parentNode.insertBefore(this.canvas, document.getElementById("frame_panel"))
        this.maze = new Maze(30, 30, this.canvas);
        this.maze.draw();
        break;

        case SOLVE_MAZE_MODE:
          console.log("entering solve maze mode");
          this.maze.backup();
          createButton("frame_panel", "solve_bfs_button", "Solve with BFS", {callback: this.maze.solveBFS});
          createButton("frame_panel", "solve_mouse_button", "Solve with Mouse", {callback: this.maze.solveMouse});      
          createButton("frame_panel", "solve_manhattan_button", "Solve with Manhattan", {callback: this.maze.solveManhattan});      
          createButton("frame_panel", "solve_right_button", "Solve with Right", {callback: this.maze.solveRight});      
          break;
    }
    this.currentMode = mode;
  }

  // leave mode
  stopMode(mode) {
    switch (mode) {
      case CREATE_MAZE_MODE:
        console.log("leaving create_maze mode");
        this.maze.mazeBuilderOn = false;
        break;
      case SOLVE_MAZE_MODE:
        console.log("leaving solve_maze mode");
        removeElement("solve_bfs_button");
        removeElement("solve_mouse_button");
        removeElement("solve_manhattan_button");
        removeElement("solve_right_button");
        break;
    }
  }
  
  // shut down whole component
  stopFrame() {

    removeElement("maze_bar");

  }
}