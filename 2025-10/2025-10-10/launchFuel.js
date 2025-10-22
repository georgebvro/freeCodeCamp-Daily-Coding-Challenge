// Iterative solution
function launchFuel(payload) {
  let additionalFuel = payload / 5;
  let totalFuel = additionalFuel;

  while (additionalFuel >= 1) {
    additionalFuel = additionalFuel / 5;
    totalFuel += additionalFuel;
  } 

  return +parseFloat(totalFuel).toFixed(1);
}

/* Recursive solution that should work but it fails Test #3 because of the rounding.
function launchFuel(payload) {

  const additionalFuel = payload / 5;

  if (additionalFuel < 1)
    return additionalFuel;

  return +parseFloat(payload / 5 + launchFuel(payload / 5)).toFixed(1);
}
*/

console.log(launchFuel(50));
console.log(launchFuel(500));
console.log(launchFuel(243));
console.log(launchFuel(11000));
console.log(launchFuel(6214));