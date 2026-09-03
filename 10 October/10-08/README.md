# freeCodeCamp Daily Coding Challenge - October 8, 2025

## Space Week Day 5: Goldilocks Zone

For the fifth day of Space Week, you will calculate the "Goldilocks zone" of a star - the region around a star where conditions are "just right" for liquid water to exist.

Given the mass of a star, return an array with the start and end distances of its Goldilocks Zone in Astronomical Units.

To calculate the Goldilocks Zone:

1. Find the luminosity of the star by raising its mass to the power of 3.5.
2. The start of the zone is 0.95 times the square root of its luminosity.
3. The end of the zone is 1.37 times the square root of its luminosity.
* Return the distances rounded to two decimal places.

For example, given `1` as a mass, return `[0.95, 1.37]`.

### Tests

1. `goldilocksZone(1)` should return `[0.95, 1.37]`.
2. `goldilocksZone(0.5)` should return `[0.28, 0.41]`.
3. `goldilocksZone(6)` should return `[21.85, 31.51]`.
4. `goldilocksZone(3.7)` should return `[9.38, 13.52]`.
5. `goldilocksZone(20)` should return `[179.69, 259.13]`.