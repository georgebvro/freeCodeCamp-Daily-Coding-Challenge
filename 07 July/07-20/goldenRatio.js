function isGoldenRatio(a, b) {
  const GOLDEN_RATIO = 1.618;
  const TOLERANCE = 0.01;

  return Math.abs(Math.max(a, b) / Math.min(a, b) - GOLDEN_RATIO) <= TOLERANCE;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isGoldenRatio(21, 34) should return true.
2. isGoldenRatio(15, 20) should return false.
3. isGoldenRatio(8, 13) should return true.
4. isGoldenRatio(10, 16) should return false.
5. isGoldenRatio(1618, 1000) should return true.
6. isGoldenRatio(88, 55) should return false.
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