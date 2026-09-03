# freeCodeCamp Daily Coding Challenge - April 26

## FizzBuzz Explosion

Given an integer, return the number of steps it takes to turn the word `"fizzbuzz"` into a string with at least the given number of `"z"`'s using the following rules:

* Start with the string `"fizzbuzz"`.
* Each step, apply the standard FizzBuzz rules using the letter position in the string (the first `"f"` is position 1).
	* If the letter position is divisible by 3, replace the letter with `"fizz"`
	* If it's divisible by 5, replace the letter with `"buzz"`
	* If it's divisible by 3 and 5, replace the letter with `"fizzbuzz"`

So after 1 step, `"fizzbuzz"` turns into `"fifizzzbuzzfizzzz"`, which has 9 `"z"`'s.

### Tests:

1. `explodeFizzbuzz(9)` should return `1`.
2. `explodeFizzbuzz(15)` should return `2`.
3. `explodeFizzbuzz(51)` should return `3`.
4. `explodeFizzbuzz(52)` should return `4`.
5. `explodeFizzbuzz(359)` should return `5`.
6. `explodeFizzbuzz(789)` should return `6`.
7. `explodeFizzbuzz(54482)` should return `11`.
8. `explodeFizzbuzz(1000000)` should return `14`.