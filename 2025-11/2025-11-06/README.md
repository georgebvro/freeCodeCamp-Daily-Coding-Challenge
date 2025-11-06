# freeCodeCamp Daily Coding Challenge - November 6, 2025

## Weekday Finder

Given a string date in the format `YYYY-MM-DD`, return the day of the week.

Valid return days are:
* `"Sunday"`
* `"Monday"`
* `"Tuesday"`
* `"Wednesday"`
* `"Thursday"`
* `"Friday"`
* `"Saturday"`

Be sure to ignore time zones.

### Tests

1. `getWeekday("2025-11-06")` should return `Thursday`.
2. `getWeekday("1999-12-31")` should return `Friday`.
3. `getWeekday("1111-11-11")` should return `Saturday`.
4. `getWeekday("2112-12-21")` should return `Wednesday`.
5. `getWeekday("2345-10-01")` should return `Monday`.