function adjustThermostat(temp, target) {

  return temp < target ? "heat" : temp > target ? "cool" : "hold";
}

console.log(adjustThermostat(68, 72));
console.log(adjustThermostat(75, 72));
console.log(adjustThermostat(72, 72));
console.log(adjustThermostat(-20.5, -10.1));
console.log(adjustThermostat(100, 99.9));
console.log(adjustThermostat(0.0, 0.0));