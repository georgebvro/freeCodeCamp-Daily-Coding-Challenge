# freeCodeCamp Daily Coding Challenge - July 12

## Horoscope Match

Given two star sign strings, return their compatibility percentage.

The signs are arranged in a wheel of 12 positions in this order: `"Aries"`, `"Taurus"`, `"Gemini"`, `"Cancer"`, `"Leo"`, `"Virgo"`, `"Libra"`, `"Scorpio"`, `"Sagittarius"`, `"Capricorn"`, `"Aquarius"`, `"Pisces"`, wrapping back to `"Aries"` after `"Pisces"`. Find the shortest distance between the two signs and return the compatibility:

|Distance|Compatibility|
|:------:|:-----------:|
|   0    |  `"100%"`   |
|   1    |   `"40%"`   |
|   2    |   `"80%"`   |
|   3    |   `"30%"`   |
|   4    |   `"90%"`   |
|   5    |   `"20%"`   |
|   6    |   `"50%"`   |

### Tests:

1. `horoscopeMatch("Libra", "Sagittarius")` should return `"80%"`.
2. `horoscopeMatch("Gemini", "Scorpio")` should return `"20%"`.
3. `horoscopeMatch("Pisces", "Aries")` should return `"40%"`.
4. `horoscopeMatch("Capricorn", "Cancer")` should return `"50%"`.
5. `horoscopeMatch("Aquarius", "Aquarius")` should return `"100%"`.
6. `horoscopeMatch("Virgo", "Taurus")` should return `"90%"`.
7. `horoscopeMatch("Leo", "Scorpio")` should return `"30%"`.