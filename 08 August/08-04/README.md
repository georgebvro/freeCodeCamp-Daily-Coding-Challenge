# freeCodeCamp Daily Coding Challenge - August 4

## Golf Handicap Calculator

Given an array of golf scores and a corresponding array of course par values, return the golfer's handicap index using the following method:
* Calculate the differential for each round by subtracting the par from the score, then return the average of all differentials rounded to one decimal place.

### Tests:

1. `calculateHandicap([72, 72, 72], [72, 72, 72])` should return `0`.
2. `calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72])` should return `6`.
3. `calculateHandicap([42, 45, 46, 45], [36, 36, 36, 36])` should return `8.5`.
4. `calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71])` should return `8.8`.
5. `calculateHandicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37])` should return `11.7`.