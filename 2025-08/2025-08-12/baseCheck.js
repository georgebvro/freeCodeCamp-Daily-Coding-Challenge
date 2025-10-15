function isValidNumber(n, base) {
  const codeOfUppercaseA = 'A'.charCodeAt(0);
  const baseThreshold = 11; //value of base beyond which letters are needed to represent digits

  const invalidDigits = "[^0-" +
    (base <= 10
    ? `${base - 1}]`
    : `9A-${String.fromCharCode(base - baseThreshold + codeOfUppercaseA)}]`);

  return !new RegExp(invalidDigits, "gi").exec(n);
}

console.log(isValidNumber("10101", 2));
console.log(isValidNumber("10201", 2));
console.log(isValidNumber("76543210", 8));
console.log(isValidNumber("9876543210", 8));
console.log(isValidNumber("9876543210", 10));
console.log(isValidNumber("ABC", 10));
console.log(isValidNumber("ABC", 16));
console.log(isValidNumber("Z", 36));
console.log(isValidNumber("ABC", 20));
console.log(isValidNumber("4B4BA9", 16));
console.log(isValidNumber("5G3F8F", 16));
console.log(isValidNumber("5G3F8F", 17));
console.log(isValidNumber("abc", 10));
console.log(isValidNumber("abc", 16));
console.log(isValidNumber("AbC", 16));
console.log(isValidNumber("z", 36));