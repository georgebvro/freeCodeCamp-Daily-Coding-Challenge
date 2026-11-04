# freeCodeCamp Daily Coding Challenge - August 5

## Spoken Duration

Given a number of seconds, return the duration in spoken English.

* Break the duration into hours, minutes, and seconds.
* Skip any zero values.
* Use singular or plural as appropriate (`"1 hour"`, `"2 hours"`).
* If present, join the last two units with `"and"`, and the second and third to last units with a comma (`"1 hour, 2 minutes and 3 seconds"`).

### Tests:

1. `getSpokenDuration(3723)` should return `"1 hour, 2 minutes and 3 seconds"`.
2. `getSpokenDuration(7295)` should return `"2 hours, 1 minute and 35 seconds"`.
3. `getSpokenDuration(8521)` should return `"2 hours, 22 minutes and 1 second"`.
4. `getSpokenDuration(435)` should return `"7 minutes and 15 seconds"`.
5. `getSpokenDuration(14455)` should return `"4 hours and 55 seconds"`.
6. `getSpokenDuration(72000)` should return `"20 hours"`.
7. `getSpokenDuration(1)` should return `"1 second"`.