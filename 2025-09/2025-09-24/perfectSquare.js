function isPerfectSquare(n) {

  return Number.isInteger(Math.sqrt(n));
}

console.log(isPerfectSquare(9));
console.log(isPerfectSquare(49));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(2));
console.log(isPerfectSquare(99));
console.log(isPerfectSquare(-9));
console.log(isPerfectSquare(0));
console.log(isPerfectSquare(25281));