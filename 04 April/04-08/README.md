# freeCodeCamp Daily Coding Challenge - April 8, 2026

## FizzBuzz Validator

Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

In a valid FizzBuzz sequence:
* Multiples of 3 are replaced with "Fizz".
* Multiples of 5 are replaced with "Buzz".
* Multiples of both 3 and 5 are replaced with "FizzBuzz".
* All other numbers remain as integers.

### Tests:

1. `isFizzBuzz([1, 2, "Fizz", 4, "Buzz"])` should return `true`.
2. `isFizzBuzz([13, 14, "FizzBuzz", 16, 17])` should return `true`.
3. `isFizzBuzz([1, 2, "Fizz", 4, 5])` should return `false`.
4. `isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"])` should return `true`.
5. `isFizzBuzz([1, 2, "Fizz", "Buzz", 5])` should return `false`.
6. `isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103])` should return `false`.
7. `isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"])` should return `true`.