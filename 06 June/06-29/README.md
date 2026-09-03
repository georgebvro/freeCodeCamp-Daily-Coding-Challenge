# freeCodeCamp Daily Coding Challenge - June 29

## Song Mood Finder

Given a genre string and a BPM number for a song, determine the mood using the following table:

|  Mood   |     Genre     |BPM Range|
|:-------:|:-------------:|:-------:|
|`"focus"`|`"classical"`  |  60–109 |
|`"focus"`|`"electronic"` |  60–89  |
|`"happy"`|`"pop"`        |  60–180 |
|`"happy"`|`"classical"`  | 110–180 |
|`"happy"`|`"rock"`       |  60–129 |
|`"happy"`|`"electronic"` |  90–134 |
|`"hype"` |`"rock"`       | 130–180 |
|`"hype"` |`"electronic"` | 135–180 |

### Tests:

1. `getMood("rock", 111)` should return `"happy"`.
2. `getMood("electronic", 74)` should return `"focus"`.
3. `getMood("classical", 180)` should return `"happy"`.
4. `getMood("rock", 155)` should return `"hype"`.
5. `getMood("electronic", 90)` should return `"happy"`.
6. `getMood("classical", 67)` should return `"focus"`.
7. `getMood("pop", 100)` should return `"happy"`.
8. `getMood("electronic", 135)` should return `"hype"`.