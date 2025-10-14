function parseRomanNumeral(numeral) {
  const romanNumerals = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
  };
  let result = 0;

  for (let i = 0; i < numeral.length - 1; i ++) {
    if (romanNumerals[numeral[i]] < romanNumerals[numeral[i + 1]])
      result -= romanNumerals[numeral[i]];
    else
      result += romanNumerals[numeral[i]];
  }
  result += romanNumerals[numeral[numeral.length - 1]];

  return result;
}

console.log(parseRomanNumeral("III"));
console.log(parseRomanNumeral("IV"));
console.log(parseRomanNumeral("XXVI"));
console.log(parseRomanNumeral("XCIX"));
console.log(parseRomanNumeral("CDLX"));
console.log(parseRomanNumeral("DIV"));
console.log(parseRomanNumeral("MMXXV"));

console.log(parseRomanNumeral("I"));