# freeCodeCamp Daily Coding Challenge - June 13, 2026

## Zoning Regulations

Given a 2D grid (array of arrays) representing a city's building layout, return the coordinates of all buildings that are violating zoning rules.

Each cell in the grid contains one of the labels from the table below. A building is in violation if any of its (up to) 4 neighbors, horizontal or vertical, are a type it cannot be adjacent to.

|       Label       |    Type     |Cannot be adjacent to|
|:-----------------:|:-----------:|:-------------------:|
|       `"i"`       |industrial   |    `"R"`, `"I"`     |
|       `"A"`       |Agricultural |        `"C"`        |
|       `"R"`       |Residential  |    `"i"`, `"C"`     |
|       `"I"`       |Institutional|        `"i"`        |
|       `"C"`       |Commercial   |    `"R"`, `"A"`     |
|`""` (empty string)|undeveloped  |   no restrictions   |

Return the coordinates of all violating cells as an array of `[row, col]` pairs, in any order. If no violations exist, return an empty array.

### Tests:

1. `getZoneViolations([["R", "C"], ["", "C"]])` should return `[[0, 0], [0, 1]]`.
2. `getZoneViolations([["", "i"], ["", "R"], ["R", "I"]])` should return `[[0, 1], [1, 1]]`.
3. `getZoneViolations([["A", "i", "C"], ["A", "", "C"], ["R", "R", "I"]])` should return `[]`.
4. `getZoneViolations([["R", "R", "C", "R", "R"], ["R", "I", "C", "", "A"], ["R", "R", "", "i", "A"]])` should return `[[0, 1], [0, 2], [0, 3]]`.
5. `getZoneViolations([["R", "A", "A", "", "i", "i"], ["R", "I", "", "C", "i", "i"], ["R", "", "C", "C", "A", "A"], ["R", "R", "C", "I", "R", "R"]])` should return `[[2, 3], [2, 4], [3, 1], [3, 2]]`.