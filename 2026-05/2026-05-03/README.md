# freeCodeCamp Daily Coding Challenge - May 3, 2026

## Good Day

Given a time string in `"HH:MM"` format (24-hour clock), return:

* `"Good morning"` for times `05:00` to `11:59`
* `"Good afternoon"` for times `12:00` to `17:59`
* `"Good evening"` for times `18:00` to `21:59`
* `"Good night"` for times `22:00` to `04:59`

### Tests:

1. `getGreeting("06:30")` should return `"Good morning"`.
2. `getGreeting("12:00")` should return `"Good afternoon"`.
3. `getGreeting("21:59")` should return `"Good evening"`.
4. `getGreeting("00:01")` should return `"Good night"`.
5. `getGreeting("11:30")` should return `"Good morning"`.