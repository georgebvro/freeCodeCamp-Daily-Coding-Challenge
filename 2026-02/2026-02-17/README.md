# freeCodeCamp Daily Coding Challenge - February 17, 2026

## 2026 Winter Games Day 12: Bobsled

Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.

* The length of the array determines the team size: 1, 2 or 4 person teams.
* All given weight values are in kilograms (kg).

The bobsled (sled by iteself) must have a minimum weight of:
* 162 kg for a 1-person team
* 170 kg for a 2-person team
* 210 kg for a 4-person team

The total weight of the bobsled (athletes plus sled) must not exceed:
* 247 kg for a 1-person team
* 390 kg for a 2-person team
* 630 kg for a 4-person team

Return `"Eligible"` if the team meets all the requirements, or `"Not Eligible"` if the team fails to meet one or more of the requirements.

### Tests

1. `checkEligibility([78], 165)` should return `"Eligible"`.
2. `checkEligibility([80], 160)` should return `"Not Eligible"`.
3. `checkEligibility([80], 170)` should return `"Not Eligible"`.
4. `checkEligibility([85, 90], 170)` should return `"Eligible"`.
5. `checkEligibility([85, 95], 168)` should return `"Not Eligible"`.
6. `checkEligibility([112, 97], 185)` should return `"Not Eligible"`.
7. `checkEligibility([110, 102, 90, 106], 222)` should return `"Eligible"`.
8. `checkEligibility([106, 99, 90, 88], 205)` should return `"Not Eligible"`.
9. `checkEligibility([106, 99, 103, 96], 227)` should return `"Not Eligible"`.