# freeCodeCamp Daily Coding Challenge - January 19, 2026

## Energy Consumption

Given the number of Calories burned during a workout, and the number of watt-hours used by your electronic devices during that workout, determine which one used more energy.

To compare them, convert both values to joules using the following conversions:
* 1 Calorie equals 4184 joules.
* 1 watt-hour equals 3600 joules.

Return:
* `"Workout"` if the workout used more energy.
* `"Devices"` if the device used more energy.
* `"Equal"` if both used the same amount of energy.

### Tests

1. `compareEnergy(250, 50)` should return `"Workout"`.
2. `compareEnergy(100, 200)` should return `"Devices"`.
3. `compareEnergy(450, 523)` should return `"Equal"`.
4. `compareEnergy(300, 75)` should return `"Workout"`.
5. `compareEnergy(200, 250)` should return `"Devices"`.
6. `compareEnergy(900, 1046)` should return `"Equal"`.