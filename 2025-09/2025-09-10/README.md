# freeCodeCamp Daily Coding Challenge - September 10, 2025

## Array Diff

Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

* The returned array should be sorted in alphabetical order.

### Tests

1. `arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"])` should return `["cherry"]`.
2. `arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"])` should return `["cherry"]`.
3. `arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])` should return `["eight", "four", "six", "two"]`.
4. `arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"])` should return `["five", "one", "seven", "three"]`.
5. `arrayDiff(["I like freeCodeCamp"], ["I like rocks"])` should return `["I like freeCodeCamp", "I like rocks"]`.