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

// --- TEST SUITE ---

const testsText = `
1. parseRomanNumeral("III") should return 3.
2. parseRomanNumeral("IV") should return 4.
3. parseRomanNumeral("XXVI") should return 26.
4. parseRomanNumeral("XCIX") should return 99.
5. parseRomanNumeral("CDLX") should return 460.
6. parseRomanNumeral("DIV") should return 504.
7. parseRomanNumeral("MMXXV") should return 2025.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);
    let comparison;

    if (Array.isArray(testOutput))
      comparison = arraysEqual(functionCallOutput, testOutput);
    else
      comparison = functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);