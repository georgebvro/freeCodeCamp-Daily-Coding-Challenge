function burnCandles(candles, leftoversNeeded) {
  let candlesBurned = 0,
      leftovers,
      leftoversRemained,
      totalLeftovers = 0,
      availableCandles = candles;
  
  do {
    availableCandles += Math.floor(totalLeftovers / leftoversNeeded);
    leftovers = availableCandles;
    leftoversRemained = totalLeftovers % leftoversNeeded;
    totalLeftovers = leftovers + leftoversRemained;
    candlesBurned += availableCandles;
    availableCandles = 0;
  } while (totalLeftovers >= leftoversNeeded);

  return candlesBurned;
}

console.log(burnCandles(7, 2));
console.log(burnCandles(10, 5));
console.log(burnCandles(20, 3));
console.log(burnCandles(17, 4));
console.log(burnCandles(2345, 3));
console.log(burnCandles(1, 2));