# freeCodeCamp Daily Coding Challenge - April 23, 2026

## Closest Time Direction

Given two times, determine whether you can get from the first to the second faster by moving forward or backward.

* Times are given in 24-hour format (`"HH:MM"`)
* The clock wraps around (23:59 goes to 00:00 when moving forward, and 00:00 goes to 23:59 when moving backwards)

Return:
* `"forward"` if moving forward is shorter
* `"backward"` if moving backward is shorter
* `"equal"` if both directions take the same amount of time

### Tests:

1. `getDirection("10:00", "12:00")` should return `"forward"`.
2. `getDirection("11:00", "05:00")` should return `"backward"`.
3. `getDirection("00:00", "12:00")` should return `"equal"`.
4. `getDirection("15:45", "01:10")` should return `"forward"`.
5. `getDirection("03:30", "19:50")` should return `"backward"`.
6. `getDirection("06:30", "18:30")` should return `"equal"`.