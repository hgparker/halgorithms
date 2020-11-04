import {Maze} from "./maze";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Main.jss is running!")

  let mainCanvas = document.getElementById("main_canvas");
  let maze = new Maze(30, 30, mainCanvas);
  maze.draw();
});
