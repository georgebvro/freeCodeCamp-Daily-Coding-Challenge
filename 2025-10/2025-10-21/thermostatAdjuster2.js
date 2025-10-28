function adjustThermostat(currentF, targetC) {
  const difference = parseFloat(targetC * 1.8 + 32 - currentF).toFixed(1);

  return difference > 0 ? `Heat: ${difference} degrees Fahrenheit` 
    : difference < 0 ? `Cool: ${Math.abs(difference)} degrees Fahrenheit` 
    : "Hold";
}

console.log(adjustThermostat(32, 0));
console.log(adjustThermostat(70, 25));
console.log(adjustThermostat(72, 18));
console.log(adjustThermostat(212, 100));
console.log(adjustThermostat(59, 22));