function allUnique(str) {
  const arr = str.split("");

  return !arr.some((char, index) => arr.indexOf(char) !== index);
}

console.log(allUnique("abc"));
console.log(allUnique("aA"));
console.log(allUnique("QwErTy123!@"));
console.log(allUnique("~!@#$%^&*()_+"));
console.log(allUnique("hello"));
console.log(allUnique("freeCodeCamp"));
console.log(allUnique("!@#*$%^&*()aA"));