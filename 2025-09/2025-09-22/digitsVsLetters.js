function digitsOrLetters(str) {
  let digits = 0;
  let letters = 0;

  for (let char of str) {
    if (/[0-9]/.test(char))
      digits ++;
    
    if (/[a-zA-Z]/.test(char))
      letters ++;
  }

  return digits > letters ? "digits" 
    : digits < letters ? "letters" 
    : "tie";
}

console.log(digitsOrLetters("abc123"));
console.log(digitsOrLetters("a1b2c3d"));
console.log(digitsOrLetters("1a2b3c4"));
console.log(digitsOrLetters("abc123!@#DEF"));
console.log(digitsOrLetters("H3110 W0R1D"));
console.log(digitsOrLetters("P455W0RD"));