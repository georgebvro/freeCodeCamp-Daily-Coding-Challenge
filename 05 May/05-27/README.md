# freeCodeCamp Daily Coding Challenge - May 27

## Pizza Party

Given an array of hours worked today per person, return the number of pizzas to order for a pizza party.

* Divide each person's hours worked by 3 to get their slice count.
* You can't eat a partial slice, so round each person's slice count up to the nearest whole number.
* Each person gets a minimum of two slices.
* Each pizza has 8 slices. Round the total number of pizzas up to the nearest whole pizza.

### Tests:

1. `getPizzasToOrder([8, 8, 8])` should return `2`.
2. `getPizzasToOrder([10, 9, 8, 2, 2, 6, 10])` should return `3`.
3. `getPizzasToOrder([1, 2, 3, 4, 5])` should return `2`.
4. `getPizzasToOrder([8, 8, 8, 8, 8, 8, 8, 8])` should return `3`.
5. `getPizzasToOrder([9, 9, 6])` should return `1`.
6. `getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0])` should return `5`.