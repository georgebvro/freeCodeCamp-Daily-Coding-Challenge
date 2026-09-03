function checkStrength(password) {
  let strength = 0;

  if (password.length >= 8)
    strength ++;

  if (/[a-z]/.exec(password) && /[A-Z]/.exec(password))
    strength ++;

  if (/\d/.exec(password))
    strength ++;

  if (/[!@#$%^&*]/.exec(password))
    strength ++;

  return strength < 2 ? "weak" : strength < 4 ? "medium" : "strong";
}

console.log(checkStrength("123456"));
console.log(checkStrength("pass!!!"));
console.log(checkStrength("Qwerty"));
console.log(checkStrength("PASSWORD"));
console.log(checkStrength("PASSWORD!"));
console.log(checkStrength("PassWord%^!"));
console.log(checkStrength("qwerty12345"));
console.log(checkStrength("PASSWORD!"));
console.log(checkStrength("PASSWORD!"));
console.log(checkStrength("S3cur3P@ssw0rd"));
console.log(checkStrength("C0d3&Fun!"));

// --- TEST SUITE ---

const testsText = `
1. checkStrength("123456") should return "weak".
2. checkStrength("pass!!!") should return "weak".
3. checkStrength("Qwerty") should return "weak".
4. checkStrength("PASSWORD") should return "weak".
5. checkStrength("PASSWORD!") should return "medium".
6. checkStrength("PassWord%^!") should return "medium".
7. checkStrength("qwerty12345") should return "medium".
8. checkStrength("S3cur3P@ssw0rd") should return "strong".
9. checkStrength("C0d3&Fun!") should return "strong".
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