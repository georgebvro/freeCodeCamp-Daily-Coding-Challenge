# freeCodeCamp Daily Coding Challenge - June 19, 2026

## Rental Cost

Given a rental timestamp, a return timestamp, and a rental tier, return the total cost of the rental including any late fees.

* Given timestamps are UTC ISO strings, for example: `"2026-06-18T18:30:00Z"`.
* The rental tier is the number of days before the rental is due back: `1`, `3`, or `7`.
* Rentals are due back by 12:00 PM UTC or earlier on the last day of the rental period. For example, a 1-day rental checked out at any time on March 15 is due back by 12:00 PM UTC on March 16.
* Each day past the due date and time incurs a late fee.

Pricing is as follows:
| Tier |Base cost|Late fee per day|
|:----:|:-------:|:--------------:|
|1 day |  $4.99  |      $3.99     |
|3 days|  $3.99  |      $2.99     |
|7 days|  $2.99  |      $0.99     |

Return the total cost rounded to two decimal places in the format `"$D.CC"`.

### Tests:

1. `getRentalCost("2026-06-18T18:30:00Z", "2026-06-19T10:30:00Z", 1)` should return `"$4.99"`.
2. `getRentalCost("2026-06-18T14:30:00Z", "2026-06-20T12:30:00Z", 1)` should return `"$12.97"`.
3. `getRentalCost("2026-06-18T10:15:00Z", "2026-06-18T19:45:00Z", 3)` should return `"$3.99"`.
4. `getRentalCost("2026-06-18T15:20:00Z", "2026-06-23T08:10:00Z", 3)` should return `"$9.97"`.
5. `getRentalCost("2026-06-18T12:00:00Z", "2026-06-25T12:00:00Z", 7)` should return `"$2.99"`.
6. `getRentalCost("2026-06-18T08:00:00Z", "2027-06-18T14:00:00Z", 7)` should return `"$358.40"`.