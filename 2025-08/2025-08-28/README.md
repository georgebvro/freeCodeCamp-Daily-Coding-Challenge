# freeCodeCamp Daily Coding Challenge - August 28, 2025

## Second Best

Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

1. The second most expensive laptop if it is within your budget, or
2. The most expensive laptop that is within your budget, or
3. `0` if no laptops are within your budget.
* Duplicate prices should be ignored.

### Tests
1. `getLaptopCost([1500, 2000, 1800, 1400], 1900`) should return `1800`
2. `getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900`) should return `1800`
3. `getLaptopCost([2099, 1599, 1899, 1499], 2200`) should return `1899`
4. `getLaptopCost([2099, 1599, 1899, 1499], 1000`) should return `0`
5. `getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450`) should return `1400`