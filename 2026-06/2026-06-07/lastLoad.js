function lastLoadDate(scoops, usage) {

  return Math.floor(scoops / (usage.reduce((acc, scoopCount) => acc + scoopCount) / usage.length));
}

// --- TEST SUITE ---

const testsText = String.raw`
1. lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2]) should return 5.
2. lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1]) should return 7.
3. lastLoadDate(33, [5, 0, 4, 3, 3, 2]) should return 11.
4. lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2]) should return 12.
5. lastLoadDate(20, [13, 9, 12, 10, 8]) should return 1.
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