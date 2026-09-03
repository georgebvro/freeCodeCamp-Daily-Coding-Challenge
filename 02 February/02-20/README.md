# freeCodeCamp Daily Coding Challenge - February 20, 2026

## 2026 Winter Games Day 15: Freestyle Skiing

Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

* The two words will be separated by a single space.

|Valid first words:|
|:----------------:|
|    `"Misty"`     |
|    `"Ghost"`     |
|   `"Thunder"`    |
|    `"Solar"`     |
|     `"Sky"`      |
|   `"Phantom"`    |
|    `"Frozen"`    |
|    `"Polar"`     |

|Valid second words:|
|:-----------------:|
|    `"Twister"`    |
|   `"Icequake"`    |
|   `"Avalanche"`   |
|    `"Vortex"`     |
|   `"Snowstorm"`   |
|   `"Frostbite"`   |
|   `"Blizzard"`    |
|    `"Shadow"`     |

### Tests

1. `isValidTrick("Polar Vortex")` should return `true`.
2. `isValidTrick("Solar Icequake")` should return `true`.
3. `isValidTrick("Thunder Blizzard")` should return `true`.
4. `isValidTrick("Phantom Frostbite")` should return `true`.
5. `isValidTrick("Ghost Avalanche")` should return `true`.
6. `isValidTrick("Snowstorm Shadow")` should return `false`.
7. `isValidTrick("Solar Sky")` should return `false`.