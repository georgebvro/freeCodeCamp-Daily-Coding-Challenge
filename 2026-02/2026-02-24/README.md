# freeCodeCamp Daily Coding Challenge - February 24, 2026

## Business Day Count

Given a start date and an end date, return the number of business days between the two.

* Given dates are in the format `"YYYY-MM-DD"`.
* Weekdays are business days (Monday through Friday).
* Weekends are not business days (Saturday and Sunday).
* Include both the start and end dates when counting.

### Tests

1. `countBusinessDays("2026-02-24", "2026-02-26")` should return `3`.
2. `countBusinessDays("2026-02-24", "2026-02-28")` should return `4`.
3. `countBusinessDays("2026-02-21", "2026-03-01")` should return `5`.
4. `countBusinessDays("2026-03-08", "2026-03-17")` should return `7`.
5. `countBusinessDays("2026-02-24", "2027-02-24")` should return `262`.