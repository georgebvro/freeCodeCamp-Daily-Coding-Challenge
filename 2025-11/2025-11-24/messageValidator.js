function isValidMessage(message, validator) {

  return message
    .split(" ")
    .reduce((acc, word) => acc + word[0].toLowerCase(), "") === validator.toLowerCase();
}

// --- TEST SUITE ---

const testsText = `
1. isValidMessage("hello world", "hw") should return true.
2. isValidMessage("ALL CAPITAL LETTERS", "acl") should return true.
3. isValidMessage("Coding challenge are boring.", "cca") should return false.
4. isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD") should return true.
5. isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") should return false.
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

    if (functionCallOutput === testOutput) {
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

runTests(testData);