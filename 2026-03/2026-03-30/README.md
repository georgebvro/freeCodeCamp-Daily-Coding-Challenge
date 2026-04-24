# freeCodeCamp Daily Coding Challenge - March 30, 2026

## Due Date

Given a date string, return the date 9 months in the future.

* The given and return strings have the format `"YYYY-MM-DD"`.
* If the month nine months into the future doesn't contain the original day number, return the last day of that month.

### Tests:

1. `getDueDate("2025-03-30")` should return `"2025-12-30"`.
2. `getDueDate("2025-04-27")` should return `"2026-01-27"`.
3. `getDueDate("2025-05-29")` should return `"2026-02-28"`.
4. `getDueDate("2026-06-30")` should return `"2027-03-30"`.
5. `getDueDate("2026-10-11")` should return `"2027-07-11"`.