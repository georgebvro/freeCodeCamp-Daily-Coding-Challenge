# freeCodeCamp Daily Coding Challenge - January 17, 2026

## Knight Moves

Given the position of a knight on a chessboard, return the number of valid squares the knight can move to.

A standard chessboard is 8x8, with columns labeled `A` through `H` (left to right) and rows labeled `1` through `8` (bottom to top). It looks like this:

|__A8__|__B8__|__C8__|__D8__|__E8__|__F8__|__G8__|__H8__|
|  -   |  -   |  -   |  -   |  -   |  -   |  -   |  -   |
|__A7__|__B7__|__C7__|__D7__|__E7__|__F7__|__G7__|__H7__|
|__A6__|__B6__|__C6__|__D6__|__E6__|__F6__|__G6__|__H6__|
|__A5__|__B5__|__C5__|__D5__|__E5__|__F5__|__G5__|__H5__|
|__A4__|__B4__|__C4__|__D4__|__E4__|__F4__|__G4__|__H4__|
|__A3__|__B3__|__C3__|__D3__|__E3__|__F3__|__G3__|__H3__|
|__A2__|__B2__|__C2__|__D2__|__E2__|__F2__|__G2__|__H2__|
|__A1__|__B1__|__C1__|__D1__|__E1__|__F1__|__G1__|__H1__|

A knight moves in an "L" shape: two squares in one direction (horizontal or vertical), and one square in the perpendicular direction.

This means a knight can move to up to eight possible positions, but fewer when near the edges of the board. For example, if a knight was at `A1`, it could only move to `B3` or `C2`.

### Tests

1. `knightMoves("A1")` should return `2`.
2. `knightMoves("D4")` should return `8`.
3. `knightMoves("G6")` should return `6`.
4. `knightMoves("B8")` should return `3`.
5. `knightMoves("H3")` should return `4`.