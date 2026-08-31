# freeCodeCamp Daily Coding Challenge - June 28, 2026

## Connect 3

Given a matrix of strings representing pieces on a game grid, determine if any player has three in a row.

* Each cell contains `"R"`, `"Y"`, or `""` (empty string).
* Three in a row means three consecutive non-empty cells of the same type horizontally, vertically, or diagonally.

Return:
* A flat array with the winner and the coordinates of their three winning cells in the format: `["R", [0,2], [1,3], [2,4]]`. Coordinates are returned top-to-bottom, then left-to-right.
* An empty array if there is no winner.

### Tests:

1. `connectThree([["", "", "", ""], ["", "", "", ""], ["", "Y", "", ""], ["Y", "R", "R", "R"]])` should return `["R", [3, 1], [3, 2], [3, 3]]`.
2. `connectThree([["", "", "", ""], ["", "Y", "Y", ""], ["", "Y", "R", "R"], ["", "Y", "R", "R"]])` should return `["Y", [1, 1], [2, 1], [3, 1]]`.
3. `connectThree([["", "", "Y", "R"], ["", "Y", "R", "Y"], ["", "R", "Y", "R"], ["", "R", "Y", "R"]])` should return `["R", [0, 3], [1, 2], [2, 1]]`.
4. `connectThree([["", "Y", "", ""], ["", "Y", "Y", ""], ["", "R", "R", "Y"], ["R", "R", "Y", "R"]])` should return `["Y", [0, 1], [1, 2], [2, 3]]`.
5. `connectThree([["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"], ["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"]])` should return `[]`.