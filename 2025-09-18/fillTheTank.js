function costToFill(tankSize, fuelLevel, pricePerGallon) {

  return new Intl.NumberFormat(
    'en-US', 
    { 
      style: 'currency', 
      currency: "USD" 
    }
  ).format(
    (tankSize - fuelLevel) * pricePerGallon
  );
}

console.log(costToFill(20, 0, 4.00));
console.log(costToFill(15, 10, 3.50));
console.log(costToFill(18, 9, 3.25));
console.log(costToFill(12, 12, 4.99));
console.log(costToFill(15, 9.5, 3.98));