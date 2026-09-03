# freeCodeCamp Daily Coding Challenge - April 16, 2026

## String Math

Given a string with numbers and other characters, perform math on the numbers based on the count of non-digit characters between the numbers.

* If the count of characters separating two numbers is even, use addition.
* If it's odd, use subtraction.
* Consecutive digits form a single number.
* Operations are applied left to right.
* Ignore leading and trailing characters that aren't digits.

For example, given `"3ab10c8"`, return `5`. Add 3 and 10 to get 13 because there's an even number of characters between them. Then subtract 8 from 13 because there's an odd number of characters between the result and 8.

### Tests:

1. `doMath("3ab10c8")` should return `5`.
2. `doMath("6MINUS4")` should return `2`.
3. `doMath("9plus3")` should return `12`.
4. `doMath("5fkwo#10i#%.<>15P=@20!#B/25")` should return `15`.
5. `doMath("a.67,1$lk6ldf34@#LD@]2d32d2'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt")` should return `67`.