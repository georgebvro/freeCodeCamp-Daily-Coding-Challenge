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

// --- TEST SUITE ---

const testsText = `
1. isValidNumber("10101", 2) should return true.
2. isValidNumber("10201", 2) should return false.
3. isValidNumber("76543210", 8) should return true.
4. isValidNumber("9876543210", 8) should return false.
5. isValidNumber("9876543210", 10) should return true.
6. isValidNumber("ABC", 10) should return false.
7. isValidNumber("ABC", 16) should return true.
8. isValidNumber("Z", 36) should return true.
9. isValidNumber("ABC", 20) should return true.
10. isValidNumber("4B4BA9", 16) should return true.
11. isValidNumber("5G3F8F", 16) should return false.
12. isValidNumber("5G3F8F", 17) should return true.
13. isValidNumber("abc", 10) should return false.
14. isValidNumber("abc", 16) should return true.
15. isValidNumber("AbC", 16) should return true.
16. isValidNumber("z", 36) should return true.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
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