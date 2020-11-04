import {Maze} from "./maze";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Main.jss is running!")

  let mazeCanvas = document.getElementById("maze_canvas");
  let maze = new Maze(30, 30, mazeCanvas);
  maze.draw();
});
