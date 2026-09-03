# freeCodeCamp Daily Coding Challenge - June 10

## Itinerary Arrangements

Given an array of at least two optional stops for a day trip, return the number of valid itinerary arrangements.

The itinerary always includes `"breakfast"`, `"lunch"`, and `"dinner"`, these will not be passed in as arguments. The optional stops can be placed anywhere in the itinerary, subject to the following rules:
* `"breakfast"` is always first, with at least one stop before `"lunch"`.
* `"lunch"` must appear before `"dinner"`, with at least one stop in between.
* At most, one optional stop may appear after `"dinner"`.

Return the number of valid arrangements.

### Tests:

1. `getItineraryCount(["library", "park"])` should return `2`.
2. `getItineraryCount(["library", "park", "arcade"])` should return `18`.
3. `getItineraryCount(["library", "park", "arcade", "store"])` should return `120`.
4. `getItineraryCount(["library", "park", "arcade", "store", "cafe"])` should return `840`.
5. `getItineraryCount(["library", "park", "arcade", "store", "cafe", "market", "museum"])` should return `55440`.