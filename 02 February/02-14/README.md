# freeCodeCamp Daily Coding Challenge - February 14, 2026

## 2026 Winter Games Day 9: Skeleton

Given a string representing the curves on a skeleton track, determine the difficulty of the track.

* The given string will only consist of the letters:
    * `"L"` for a left turn
    * `"R"` for a right turn
    * `"S"` for a straight segment
* Each direction change adds 15 points (an `"L"` followed by an `"R"` or vice versa).
* All other curves add 5 points each (all other `"L"` or `"R"` characters).
* Straight segments add 0 points.

The difficulty of the track is based on the total score. Return:
* `"Easy"` if the total is 0 - 100
* `"Medium"` if the total is 101-200
* `"Hard"` if the total is over 200

### Tests

1. `getDifficulty("SLSLLSRRLSRLRL")` should return `"Easy"`.
2. `getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS")` should return `"Hard"`.
3. `getDifficulty("SRRRRLSLLRLRSSRLSRL")` should return `"Medium"`.
4. `getDifficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL")` should return `"Hard"`.
5. `getDifficulty("SLLSSLRLSLSLRSLSSLRL")` should return `"Medium"`.
6. `getDifficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR")` should return `"Easy"`.