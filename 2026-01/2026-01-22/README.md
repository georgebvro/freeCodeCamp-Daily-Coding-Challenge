# freeCodeCamp Daily Coding Challenge - January 22, 2026

## Class Average

Given an array of exam scores (numbers), return the average score in form of a letter grade according to the following chart:
|Average Score|Letter Grade|
|:-----------:|:----------:|
|    97-100   |   `"A+"`   |
|    93-96    |   `"A"`    |
|    90-92    |   `"A-"`   |
|    87-89    |   `"B+"`   |
|    83-86    |   `"B"`    |
|    80-82    |   `"B-"`   |
|    77-79    |   `"C+"`   |
|    73–76    |   `"C"`    |
|    70-72    |   `"C-"`   |
|    67-69    |   `"D+"`   |
|    63-66    |   `"D"`    |
|    60–62    |   `"D-"`   |
|  below 60   |   `"F"`    |

Calculate the average by adding all scores in the array and dividing by the total number of scores.

### Tests

1. `getAverageGrade([92, 91, 90, 94, 89, 93])` should return `"A-"`.
2. `getAverageGrade([84, 89, 85, 100, 91, 88, 79])` should return `"B+"`.
3. `getAverageGrade([63, 69, 65, 66, 71, 64, 65])` should return `"D"`.
4. `getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100])` should return `"A+"`.
5. `getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60])` should return `"C+"`.
6. `getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59])` should return `"F"`.