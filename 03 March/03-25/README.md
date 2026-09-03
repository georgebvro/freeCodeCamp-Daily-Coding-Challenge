# freeCodeCamp Daily Coding Challenge - March 25, 2026

## Cooldown Time

Given two timestamps, the first representing when a user finished an exam, and the second representing the current time, determine whether the user can take an exam again.

* Both timestamps will be given the format: `"YYYY-MM-DDTHH:MM:SS"`, for example `"2026-03-25T14:00:00"`. Note that the time is 24-hour clock.

* A user must wait at least 48 hours before retaking an exam.

### Tests:

1. `canRetake("2026-03-23T08:00:00", "2026-03-25T14:00:00")` should return `true`.
2. `canRetake("2026-03-24T14:00:00", "2026-03-25T10:00:00")` should return `false`.
3. `canRetake("2026-03-23T09:25:00", "2026-03-25T09:25:00")` should return `true`.
4. `canRetake("2026-03-23T11:50:00", "2026-03-25T11:49:59")` should return `false`.
