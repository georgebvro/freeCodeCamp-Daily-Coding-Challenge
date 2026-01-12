# freeCodeCamp Daily Coding Challenge - December 21, 2025

## Daylight Hours

December 21st is the winter solstice for the northern hemisphere and the summer solstice for the southern hemisphere. That means it's the day with the least daylight in the north and the most daylight in the south.

Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the solstice using the following table:

|Latitude|Daylight Hours|
|:------:|:------------:|
|  -90   |      24      |
|  -75   |      23      |
|  -60   |      21      |
|  -45   |      15      |
|  -30   |      13      |
|  -15   |      12      |
|    0   |      12      |
|   15   |      11      |
|   30   |      10      |
|   45   |       9      |
|   60   |       6      |
|   75   |       2      |
|   90   |       0      |

If the given latitude does not exactly match a table entry, use the value of the closest latitude.

### Tests

1. `daylight_hours(45)` should return `9`.
2. `daylight_hours(0)` should return `12`.
3. `daylight_hours(-90)` should return `24`.
4. `daylight_hours(-10)` should return `12`.
5. `daylight_hours(23)` should return `10`.
6. `daylight_hours(88)` should return `0`.
7. `daylight_hours(-33)` should return `13`.
8. `daylight_hours(70)` should return `2`.