import {createButton} from "./util";
import {Maze} from "./maze";


console.log("control.js is running!");

// Constants for switching

const MAZE = "MAZE";

// Main class used for switching between algorithm pages

export class Control {
  constructor() {

    // set initial frame
    this.currentFrame = MAZE;

    // run initial frame code
    this.startMaze();

    // add event tracking for navbar clicks
  }

  //
  switchFrame(event) {

  }

  // Start maze frame
  startMaze() {
    let mainCanvas = document.getElementById("main_canvas");
    let maze = new Maze(30, 30, mainCanvas);
    maze.draw();

    createButton("frame_panel", "Solve Maze", maze.solveBFS)
  }
}