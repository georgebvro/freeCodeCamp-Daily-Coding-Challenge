# freeCodeCamp Daily Coding Challenge - January 10, 2026

## Tic-Tac-Toe

Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.

* Each element in the given matrix is either an `"X"` or `"O"`.

A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.

Return:
* `"X wins"` if player X has three in a row.
* `"O wins"` if player O has three in a row.
* `"Draw"` if no player has three in a row.

### Tests

1. `ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]])` should return `"X wins"`.
2. `ticTacToe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]])` should return `"O wins"`.
3. `ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]])` should return `"Draw"`.
4. `ticTacToe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]])` should return `"O wins"`.
5. `ticTacToe([["X", "O", "O"], ["O", "X", "O"], ["O", "X", "X"]])` should return `"X wins"`.
6. `ticTacToe([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]])` should return `"Draw"`.