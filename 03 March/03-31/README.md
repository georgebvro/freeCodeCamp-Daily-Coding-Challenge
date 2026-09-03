# freeCodeCamp Daily Coding Challenge - March 31, 2026

## Wake-Up Alarm

Given a string representing the time you set your alarm and a string representing the time you actually woke up, determine if you woke up early, on time, or late.

* Both times will be given in `"HH:MM"` 24-hour format.

Return:
* `"early"` if you woke up before your alarm time.
* `"on time"` if you woke up at your alarm time, or within the 10 minute snooze window after the alarm time.
* `"late"` if you woke up more than 10 minutes after your alarm time.

Both times are on the same day.

### Tests:

1. `alarmCheck("07:00", "06:45")` should return `"early"`.
2. `alarmCheck("06:30", "06:30")` should return `"on time"`.
3. `alarmCheck("08:10", "08:15")` should return `"on time"`.
4. `alarmCheck("09:30", "09:45")` should return `"late"`.
5. `alarmCheck("08:15", "08:25")` should return `"on time"`.
6. `alarmCheck("05:45", "05:56")` should return `"late"`.
7. `alarmCheck("04:30", "04:00")` should return `"early"`.