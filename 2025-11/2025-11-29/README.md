# freeCodeCamp Daily Coding Challenge - November 29, 2025

## Ball Trajectory

Today's challenge is inspired by the video game Pong, which was released November 29, 1972.

Given a matrix (array of arrays) that includes the location of the ball (`2`), and the previous location of the ball (`1`), return the matrix indices for the next location of the ball.

* The ball always moves in a straight line.
* The movement direction is determined by how the ball moved from `1` to `2`.
* The edges of the matrix are considered walls. If the balls hits a:
	* top or bottom wall, it bounces by reversing its vertical direction.
	* left or right wall, it bounces by reversing its horizontal direction.
	* corner, it bounces by reversing both directions.


### Tests

1. `getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]])` should return `[2, 3]`.
2. `getNextLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]])` should return `[3, 0]`.
3. `getNextLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]])` should return `[1, 2]`.
4. `getNextLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]])` should return `[1, 1]`.
5. `getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]])` should return `[2, 2]`.