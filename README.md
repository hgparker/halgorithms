Live site:

https://hgparker.github.io/halgorithms/index.html

![ScreenShot]("./Screenshot_1.png")

# Backgound

This project allows the user to create their own maze with a graphical interface. Subsequently, they can watch it be solved by the computer using one of four algorithms: (1) breadth-first search, (2) Random Mouse algorithm, (3) Manhattan algorithm, or (4) Right-hand rule algorithm. They can also adjust the speed of visualization. The goal is to learn the ins and outs of the various algorithms.

# Technologies

This project uses JavaScript, HTML, and CSS. No libraries.

# Synchronous and Asynchronous

One super-interesting facet of the project I hadn't thought about prior to engaging with it was the issue of “freezing” the algorithms at each stage so as to allow their effective visualization. If JavaScript had a sleep function, this would be no problem at all; however, it does not. Instead, it has methods like setTimeout, setInterval, etc., but these are asynchronous methods. Merely calling setTimeout with a visualizing callback after some fixed time won’t work because the synchronous algorithm will immediately proceed to the next step instead of pausing as a whole. Thus, in order to use the “pause” functionality of setTimeout, I would have to integrate its asynchronous character with the intrinsically synchronous nature of the maze-solving algorithms I had chosen to visualize.

I essentially did this in two different ways. First, in the case of the BFS and Manhattan algorithms, I let the algorithms run all the way to completion in an instant, setting off visualizing callbacks along the way as they reach each stage. However, the twist is that they do so with a steadily increasing delay – e.g., in n * t  milliseconds where t is fixed and n is the nth stage to be visualized. Since the whole synchronous portion of the algorithm will run in more or less 0s, the visualization is left to proceed evenly in its wake. Here’s a code snippet that shows what I mean.

```
      this.grid[square[0]][square[1]] = VISITED;
      setTimeout(() => this.drawSquare(square[0], square[1]), this.delay*(numSquares + 1));
      numSquares++;

```

Second, in the case of the Random Mouse and Right-Hand Rule algorithms, I reconceived each algorithm as an asynchronous isolate (rightMove and mouseMove routines) which invokes itself with a timeout and delay with modified initial variables. Here’s a code snippet that shows what I mean. This is especially necessary in the case of the Random Mouse algorithm, a non-deterministic algorithm which could take a very long time indeed – and is thus not amenable to the first approach.

```
  mouseMove(currentSquare, currentDirection) {
  
    ...

    currentSquare[0] += newDirection[0];
    currentSquare[1] += newDirection[1];
    
    if (this.getValue(currentSquare) == EMPTY) 
      this.setValue(currentSquare, VISITED);
    this.drawSquare(currentSquare[0], currentSquare[1]);

    setTimeout(() => this.mouseMove(currentSquare, newDirection), this.delay);
  }

```