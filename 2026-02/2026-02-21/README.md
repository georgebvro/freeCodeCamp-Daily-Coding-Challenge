# freeCodeCamp Daily Coding Challenge - February 21, 2026

## 2026 Winter Games Day 16: Curling

Given a 5x5 matrix representing the "house" at the end of a curling round, determine which team scores and how many points they score.

The layout:
* The center cell (index `[2, 2]`) is the "button".
* The 8 cells directly surrounding the button represent ring 1.
* And the 16 cells on the outer edge of the house represent ring 2.

In the given matrix:
* `"."` represents an empty space.
* `"R"` represents a space with a red stone.
* `"Y"` represents a space with a yellow stone.

Scoring rules:
* Only one team can score per round.
* The team with the stone closest to the button scores.
* The scoring team earns 1 point for each of their stones that is closer to the button than the opponent's closest stone.
* The lower the ring number, the closer to the center the stone is.
* If both teams' closest stone is the same distance from the center, no team scores.

Return:
* A string in the format `"team: number_of_points"`. e.g: `"R: 2"`.
* or `"No points awarded"` if neither team scored any points.

For example, given:
```
[
  [".", ".", "R", ".", "."],
  [".", "R", ".", ".", "."],
  ["Y", ".", ".", ".", "."],
  [".", "R", ".", ".", "."],
  [".", ".", ".", ".", "."]
]
```
Return `"R: 2"`. The two red stones in ring 1 are tied for the closest and are the only two stones closer than yellows closest.

### Tests

1. `scoreCurling([[".", ".", "R", ".", "."], [".", "R", ".", ".", "."], ["Y", ".", ".", ".", "."], [".", "R", ".", ".", "."], [".", ".", ".", ".", "."]])` should return `"R: 2"`.
2. `scoreCurling([[".", ".", "R", ".", "."], [".", ".", ".", ".", "."], [".", ".", "Y", ".", "R"], [".", ".", "Y", "Y", "."], [".", "Y", "R", "R", "."]])` should return `"Y: 3"`.
3. `scoreCurling([[".", "R", "Y", ".", "."], ["Y", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", "Y", "R", "Y", "."], [".", ".", "R", "R", "."]])` should return `"No points awarded"`.
4. `scoreCurling([[".", "Y", "Y", ".", "."], ["Y", ".", ".", "R", "."], [".", ".", "R", ".", "."], [".", ".", "R", "R", "."], [".", "Y", "R", "Y", "."]])` should return `"R: 4"`.
5. `scoreCurling([["Y", "Y", "Y", "Y", "Y"], ["Y", "R", "R", "R", "Y"], ["Y", "R", "Y", "R", "Y"], ["Y", "R", "R", "R", "Y"], ["Y", "Y", "Y", "Y", "Y"]])` should return `"Y: 1"`.
6. `scoreCurling([["Y", "R", "Y", "R", "Y"], ["R", ".", ".", ".", "R"], ["Y", ".", ".", ".", "Y"], ["R", ".", ".", ".", "R"], ["Y", ".", ".", "R", "Y"]])` should return `"No points awarded"`.