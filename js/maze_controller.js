import {Maze} from "./maze";
import { createButton, createElement, createTextDiv, removeElement } from "./util";
import {createMazeText} from "./maze_text";

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
    createTextDiv("maze_bar", "create_maze_text_div", "Create Maze",
      {callback: () => this.switchMode(CREATE_MAZE_MODE), className: "selectable_element"})
    createTextDiv("maze_bar", "solve_maze_text_div", "Solve Maze",
    {callback: () => this.switchMode(SOLVE_MAZE_MODE), className: "selectable_element"});


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
        if (this.canvas) {
          removeElement("canvas");
        
    }
        createElement("frame_elements", "canvas", "canvas");
        this.canvas = document.getElementById("canvas");
        this.canvas.parentNode.insertBefore(this.canvas, document.getElementById("frame_panel"))
        this.maze = new Maze(30, 30, this.canvas);
        this.maze.draw();

        createTextDiv("frame_panel", "create_maze_text", createMazeText);
        createTextDiv("frame_panel", "clear_maze_text_div", "Clear Maze",
          {callback: this.maze.clearMaze, className: "selectable_element"});

        break;

        case SOLVE_MAZE_MODE:
          // console.log("entering solve maze mode");
          this.maze.backup();


          createTextDiv("frame_panel", "solve_bfs_text_div", "Solve with Breadth-First-Search",
            {callback: this.maze.solveBFS, className: "selectable_element"});
          createTextDiv("frame_panel", "solve_mouse_text_div", "Solve with Random Mouse Algorithm",
            {callback: this.maze.solveMouse, className: "selectable_element"});      
          createTextDiv("frame_panel", "solve_manhattan_text_div", "Solve with the Manhattan Algorithm",
            {callback: this.maze.solveManhattan, className: "selectable_element"});      
          createTextDiv("frame_panel", "solve_right_text_div", "Solve with Right-Hand Rule Algorithm",
            {callback: this.maze.solveRight, className: "selectable_element"});      


          createElement("frame_panel", "form", "maze_speed_form");
          let maze_speed_form = document.getElementById("maze_speed_form");
          let maze_speed_text = document.createTextNode("Adjust delay");
          maze_speed_form.appendChild(maze_speed_text);
          createElement("maze_speed_form", "input", "maze_speed_input");
          let maze_speed_input = document.getElementById("maze_speed_input");
          maze_speed_input.setAttribute("type", "range");
          maze_speed_input.setAttribute("min", "10");
          maze_speed_input.setAttribute("max", "200");
          maze_speed_input.setAttribute("value", "80");
          maze_speed_input.addEventListener("change", (e) => this.maze.delay = document.getElementById("maze_speed_input").value);
          break;
    }
    this.currentMode = mode;
  }

  // leave mode
  stopMode(mode) {
    switch (mode) {
      case CREATE_MAZE_MODE:
        // console.log("leaving create_maze mode");
        this.maze.mazeBuilderOn = false;
        removeElement("create_maze_text");
        removeElement("clear_maze_text_div");
        break;
      case SOLVE_MAZE_MODE:
        // console.log("leaving solve_maze mode");
        removeElement("algo_text");
        removeElement("solve_bfs_text_div");
        removeElement("solve_mouse_text_div");
        removeElement("solve_manhattan_text_div");
        removeElement("solve_right_text_div");
        removeElement("maze_speed_form");
        break;
    }
  }
  
  // shut down whole component
  stopFrame() {

    removeElement("maze_bar");

  }
}