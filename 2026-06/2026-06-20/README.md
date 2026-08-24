# freeCodeCamp Daily Coding Challenge - June 20, 2026

## Prime Factorization

Given an integer greater than 1, return its prime factorization as an array of numbers in ascending order.

A prime factorization is the set of prime numbers that multiply together to produce the given integer. Each number has exactly one set. For example, the prime factorization of 20 is `[2, 2, 5]` because 2 * 2 * 5 = 20.

If the given integer is itself prime, return it in a single-element array.

### Tests:

1. `primeFactorization(20)` should return `[2, 2, 5]`.
2. `primeFactorization(17)` should return `[17]`.
3. `primeFactorization(15)` should return `[3, 5]`.
4. `primeFactorization(35)` should return `[5, 7]`.
5. `primeFactorization(999)` should return `[3, 3, 3, 37]`.
6. `primeFactorization(360)` should return `[2, 2, 2, 3, 3, 5]`.
7. `primeFactorization(510510)` should return `[2, 3, 5, 7, 11, 13, 17]`.