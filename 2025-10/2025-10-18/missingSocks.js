function sockPairs(pairs, cycles) {
  const remainingPairs = Math.floor(
    (pairs * 2 
    - Math.floor(cycles / 2) 
    + Math.floor(cycles / 3) 
    - Math.floor(cycles / 5) 
    + Math.floor(cycles / 10) * 2) 
    / 2);

  return remainingPairs >= 0 ? remainingPairs : 0;
}

console.log(sockPairs(2, 5));
console.log(sockPairs(1, 2));
console.log(sockPairs(5, 11));
console.log(sockPairs(6, 25));
console.log(sockPairs(1, 8));