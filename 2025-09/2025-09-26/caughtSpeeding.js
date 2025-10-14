function speeding(speeds, limit) {
  let speedingVehicles = 0;
  let overspeed = 0;

  // Direct, imperative style
  for (let speed of speeds) {
    if (speed > limit) {
      speedingVehicles ++;
      overspeed += speed - limit;
    }
  }

  /* Functional, declarative style
  speeds.forEach(speed => {
    if (speed > limit) {
      speedingVehicles ++;
      overspeed += speed - limit;
    }
  })
  */

  return speedingVehicles > 0 ? [speedingVehicles, overspeed / speedingVehicles] : [0, 0];
}

console.log(speeding([50, 60, 55], 60));
console.log(speeding([58, 50, 60, 55], 55));
console.log(speeding([61, 81, 74, 88, 65, 71, 68], 70));
console.log(speeding([100, 105, 95, 102], 100));
console.log(speeding([40, 45, 44, 50, 112, 39], 55));