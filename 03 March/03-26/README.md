# freeCodeCamp Daily Coding Challenge - March 26, 2026

## Movie Night

Given a string for the day of the week, another string for a showtime, and an integer number of tickets, return the total cost of the movie tickets for that showing.

The given day will be one of:
* `"Monday"`
* `"Tuesday"`
* `"Wednesday"`
* `"Thursday"`
* `"Friday"`
* `"Saturday"`
* `"Sunday"`

The showtime will be given in the format `"H:MMam"` or `"H:MMpm"`. For example `"10:00am"` or `"10:00pm"`.

Return the total cost in the format `"$D.CC"` using these rules:
* Weekend (Friday - Sunday): $12.00 per ticket.
* Weekday (Monday - Thursday): $10.00 per ticket.
* Matinee (before 5:00pm): subtract $2.00 per ticket (except on Tuesdays).
* Tuesdays: all tickets are $5.00 each.

### Tests:
1. `getMovieNightCost("Saturday", "10:00pm", 1)` should return `"$12.00"`.
2. `getMovieNightCost("Sunday", "10:00am", 1)` should return `"$10.00"`.
3. `getMovieNightCost("Tuesday", "7:20pm", 2)` should return `"$10.00"`.
4. `getMovieNightCost("Wednesday", "5:40pm", 3)` should return `"$30.00"`.
5. `getMovieNightCost("Monday", "11:50am", 4)` should return `"$32.00"`.
6. `getMovieNightCost("Friday", "4:30pm", 5)` should return `"$50.00"`.
7. `getMovieNightCost("Tuesday", "11:30am", 1)` should return `"$5.00"`.