# freeCodeCamp Daily Coding Challenge - August 2

## Food Chain

Given an array of `[predator, prey]` pairs, return the food chain from the apex predator down to the bottom.

* The apex predator is the animal that is never prey to another animal.
* Return the chain as an array of strings.

### Tests:

1. `getFoodChain([["cat", "mouse"]])` should return `["cat", "mouse"]`.
2. `getFoodChain([["wolf", "deer"], ["deer", "grass"]])` should return `["wolf", "deer", "grass"]`.
3. `getFoodChain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]])` should return `["hawk", "snake", "frog", "fly"]`.
4. `getFoodChain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]])` should return `["eagle", "fox", "rabbit", "grass"]`.
5. `getFoodChain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]])` should return `["orca", "seal", "salmon", "herring", "shrimp", "plankton"]`.