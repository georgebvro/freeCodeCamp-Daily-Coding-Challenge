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

// --- TEST SUITE ---

const testsText = `
1. allUnique("abc") should return true.
2. allUnique("aA") should return true.
3. allUnique("QwErTy123!@") should return true.
4. allUnique("~!@#$%^&*()_+") should return true.
5. allUnique("hello") should return false.
6. allUnique("freeCodeCamp") should return false.
7. allUnique("!@#*$%^&*()aA") should return false.
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