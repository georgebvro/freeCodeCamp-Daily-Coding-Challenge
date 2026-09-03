function verify(message, key, signature) {
  const valueOfLowercaseA = 1;
  const valueOfUppercaseA = 27;

  return (message + key)
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .reduce((sum, letter) => sum += /[a-z]/.exec(letter) 
      ? letter.charCodeAt(0) - 'a'.charCodeAt(0) + valueOfLowercaseA 
      : letter.charCodeAt(0) - 'A'.charCodeAt(0) + valueOfUppercaseA
    , 0) === signature;
}

console.log(verify("foo", "bar", 57));
console.log(verify("foo", "bar", 54));
console.log(verify("freeCodeCamp", "Rocks", 238));
console.log(verify("Is this valid?", "No", 210));
console.log(verify("Is this valid?", "Yes", 233));
console.log(verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514));

// --- TEST SUITE ---

const testsText = `
1. verify("foo", "bar", 57) should return true.
2. verify("foo", "bar", 54) should return false.
3. verify("freeCodeCamp", "Rocks", 238) should return true.
4. verify("Is this valid?", "No", 210) should return false.
5. verify("Is this valid?", "Yes", 233) should return true.
6. verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) should return true.
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