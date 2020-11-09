

export const createMazeText = "Directions: simply hold the mouse down over the grid and drag the cursor to create your desired path. You can erase in the same way. When you’re ready to see your maze solved, click Solve Maze";
export const bfsText = "Breadth-first search (BFS) begins by adding the start of the maze to a queue. Next, it repeatedly dequeues the very first node of the queue, and if the node is unvisited, marks it as visited and adds all of its accessible unvisited neighbors to the queue. It’s guaranteed to find the solution for any solvable maze in linear time (with respect to the total size of the maze). Furthermore, it also finds the shortest path from start to finish (note that this is not the same thing as touching the least number of squares in the course of trying to solve the maze). Watch BFS expand uniformly in all directions without prejudice. If you create a junction of paths, you can watch the algorithm suddenly split its attention, going both directions at once.";
export const mouseText = "The Random Mouse algorithm is pretty slow. For future iterations, you may want to jam that delay slider all the way to the left. The Random Mouse algorithm is also pretty simple. Much like a mouse, it simply tries to keep going in the same direction as long as it can. As soon as it can’t, it picks a new direction randomly from the directions available. If it comes to a junction, it picks a path randomly. This algorithm can be somewhat frustrating to watch. Nevertheless, as long as the maze is actually solvable, over a long enough time period the probability that Random Mouse will solve the maze goes to infinity.";
export const manhattanText = "The Manhattan algorithm is very similar to BFS. However, whereas BFS operates according to the FIFO (“first in, first out”) logic of the queue, the Manhattan algorithm gives every node a score consisting of the sum of its horizontal and vertical absolute differences from the maze finish and, at each moment, picks the highest-scoring node next to some node it’s previously visited. It removes the node from the priority queue, marks it as visited, and adds all of its unvisited, accessible neighbors to the priority queue. Always selecting the closest node from the priority queue comes at a price, however. Adding a node and removing the closest node from the priority queue each take O(logN) time, compared to the O(1) operations of enqueueing and dequeing in BFS. Try creating a maze that gets very close to the finish, then requires swerving considerably away from it. The Manhattan algorithm will shoot straight toward the finish before having to backfill and find another way closer."
export const rightText = "The Right-Hand Rule algorithm is something you could use in a real-life maze. Simply keep walking with your right hand always touching a wall. Under certain starting constraints pertaining to maze orientation (satisfied here), you will always reach the end of the maze. Try creating a solvable maze that the Right-Hand Rule algorithm cannot solve. You will not succeed.";