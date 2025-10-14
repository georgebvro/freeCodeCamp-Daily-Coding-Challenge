function toDecimal(binary) {

  return binary
    .split("")
    .reduce((decimal, digit, index) => decimal + digit * 2 ** (binary.length - index - 1), 0);
}

console.log(toDecimal("101"));
console.log(toDecimal("1010"));
console.log(toDecimal("10010"));
console.log(toDecimal("1010101"));