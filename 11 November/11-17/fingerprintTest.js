function isMatch(fingerprintA, fingerprintB) {
  let differentCharactersCount = 0;

  if (fingerprintA.length !== fingerprintB.length)
    return false;

  for (const index in fingerprintA) {
    if (fingerprintA[index] !== fingerprintB[index])
      differentCharactersCount ++;
  }

  return differentCharactersCount <= fingerprintA.length * 10 / 100;
}

console.log(isMatch("helloworld", "helloworld"));
console.log(isMatch("helloworld", "helloworlds"));
console.log(isMatch("helloworld", "jelloworld"));
console.log(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog"));
console.log(isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog"));
console.log(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat"));

console.log(isMatch("1234567890", "123456789x"));

// --- TEST SUITE ---

const testsText = `
1. isMatch("helloworld", "helloworld") should return true.
2. isMatch("helloworld", "helloworlds") should return false.
3. isMatch("helloworld", "jelloworld") should return true.
4. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") should return true.
5. isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") should return true.
6. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") should return false.
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