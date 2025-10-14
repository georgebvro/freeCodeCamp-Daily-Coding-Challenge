function toBinary(decimal) {
  if (decimal === 0) {
    return "";
  }

  return toBinary(Math.trunc(decimal / 2)) + decimal % 2;
}

console.log(toBinary(5));
console.log(toBinary(12));
console.log(toBinary(50));
console.log(toBinary(99));