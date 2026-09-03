# freeCodeCamp Daily Coding Challenge - January 31, 2026

## Zodiac Finder

Given a date string in the format `"YYYY-MM-DD"`, return the zodiac sign for that date using the following chart:

|Date Range               |Zodiac Sign    |
|:------------------------|:--------------|
|March 21 - April 19      |`"Aries"`      |
|April 20 - May 20        |`"Taurus"`     |
|May 21 - June 20         |`"Gemini"`     |
|June 21 - July 22        |`"Cancer"`     |
|July 23 - August 22      |`"Leo"`        |
|August 23 - September 22 |`"Virgo"`      |
|September 23 - October 22|`"Libra"`      |
|October 23 - November 21 |`"Scorpio"`    |
|November 22 - December 21|`"Sagittarius"`|
|December 22 - January 19 |`"Capricorn"`  |
|January 20 - February 18 |`"Aquarius"`   |
|February 19 - March 20   |`"Pisces"`     |

Zodiac signs are based only on the month and day, you can ignore the year.

### Tests

1. `getSign("2026-01-31")` should return `"Aquarius"`.
2. `getSign("2001-06-10")` should return `"Gemini"`.
3. `getSign("1985-09-07")` should return `"Virgo"`.
4. `getSign("2023-03-19")` should return `"Pisces"`.
5. `getSign("2045-11-05")` should return `"Scorpio"`.
6. `getSign("1985-12-06")` should return `"Sagittarius"`.
7. `getSign("2025-12-30")` should return `"Capricorn"`.
8. `getSign("2018-10-08")` should return `"Libra"`.
9. `getSign("1958-05-04")` should return `"Taurus"`.