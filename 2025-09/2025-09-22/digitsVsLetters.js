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

// --- TEST SUITE ---

const testsText = `
1. digitsOrLetters("abc123") should return "tie".
2. digitsOrLetters("a1b2c3d") should return "letters".
3. digitsOrLetters("1a2b3c4") should return "digits".
4. digitsOrLetters("abc123!@#DEF") should return "letters".
5. digitsOrLetters("H3110 W0R1D") should return "digits".
6. digitsOrLetters("P455W0RD") should return "tie".
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