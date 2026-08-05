function guessNumber(secret, guess) {

  return secret > guess ? "higher" : secret < guess ? "lower" : "you got it!";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. guessNumber(50, 30) should return "higher".
2. guessNumber(85, 99) should return "lower".
3. guessNumber(2026, 2026) should return "you got it!".
4. guessNumber(92904, 11283) should return "higher".
5. guessNumber(230495, 423920) should return "lower".
6. guessNumber(120349, 120349) should return "you got it!".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("——————————————————————————",
            "\n🧪Starting Verification...",
            "\n——————————————————————————");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(`(${test.output})`);

    if (JSON.stringify(functionCallOutput) === JSON.stringify(testOutput)) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${JSON.stringify(testOutput)}\nGot: ${JSON.stringify(functionCallOutput)}`);

      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

runTests(testData);