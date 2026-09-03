# freeCodeCamp Daily Coding Challenge - February 7, 2026

## 2026 Winter Games Day 2: Snowboarding

Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.

* A snowboarder's stance is either `"Regular"` or `"Goofy"`.
* Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
* The landing stance flips every 180 degrees of rotation.

For example, given `"Regular"` and `90`, return `"Regular"`. Given `"Regular"` and `180` degrees, return `"Goofy"`.

### Tests

1. `getLandingStance("Regular", 90)` should return `"Regular"`.
2. `getLandingStance("Regular", 180)` should return `"Goofy"`.
3. `getLandingStance("Goofy", -270)` should return `"Regular"`.
4. `getLandingStance("Regular", 2340)` should return `"Goofy"`.
5. `getLandingStance("Goofy", 2160)` should return `"Goofy"`.
6. `getLandingStance("Goofy", -540)` should return `"Regular"`.