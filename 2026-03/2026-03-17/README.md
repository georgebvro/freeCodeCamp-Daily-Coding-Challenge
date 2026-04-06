# freeCodeCamp Daily Coding Challenge - March 17, 2026

## Anniversary Milestones

Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

|Years Married|Milestone   |
|:-----------:|:----------:|
|      1      |`"Paper"`   |
|      5      |`"Wood"`    |
|     10      |`"Tin"`     |
|     25      |`"Silver"`  |
|     40      |`"Ruby"`    |
|     50      |`"Gold"`    |
|     60      |`"Diamond"` |
|     70      |`"Platinum"`|

* If they haven't reached the first milestone, return `"Newlyweds"`.

### Tests:

1. `getMilestone(0)` should return `"Newlyweds"`.
2. `getMilestone(1)` should return `"Paper"`.
3. `getMilestone(8)` should return `"Wood"`.
4. `getMilestone(10)` should return `"Tin"`.
5. `getMilestone(26)` should return `"Silver"`.
6. `getMilestone(45)` should return `"Ruby"`.
7. `getMilestone(50)` should return `"Gold"`.
8. `getMilestone(64)` should return `"Diamond"`.
9. `getMilestone(71)` should return `"Platinum"`.