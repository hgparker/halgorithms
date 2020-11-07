import {MazeController} from "./maze_controller";

// Constants for switching between algorithm frames

const MAZE_CONTROLLER = "MAZE_CONTROLLER";
// this.mazeController


// Main class used for switching between algorithm frames

export class MainController {
  constructor() {
    // set up control mechanisms for frame switching  

    // set up initial frame and run code
    this.currentFrame = MAZE_CONTROLLER;
    this.startMazeController();
  }

  // switch controllers
  switchFrame(newFrame) {
    // shut down current frame
    switch (this.currentFrame) {
      case MAZE_CONTROLLER:
        this.stopMazeController();
        break;
    }
    // start up the new frame
    switch (newFrame) {
      case MAZE_CONTROLLER:
        this.startMazeController();
        break;
    }
    this.currentFrame = newFrame;
  }

  // Start maze frame
  startMazeController() {
    this.mazeController = new MazeController();
  }

  // shut down this.mazeController
  stopMazeController() {
    this.mazeController.terminate();
    delete this.mazeController;
  }
}