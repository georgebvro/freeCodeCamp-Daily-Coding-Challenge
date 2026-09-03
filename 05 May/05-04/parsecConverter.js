function convertParsecs(parsecs) {
  const PARSECS_CONVERSION_RATES = {
    time: { parsecs: 1, hours: 2 },
    distance: { parsecs: 2, lightYears: 6 }
  };

  return parsecs % 2 
    ? parsecs / PARSECS_CONVERSION_RATES.time.parsecs * PARSECS_CONVERSION_RATES.time.hours 
    : parsecs / PARSECS_CONVERSION_RATES.distance.parsecs * PARSECS_CONVERSION_RATES.distance.lightYears;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. convertParsecs(1) should return 2.
2. convertParsecs(2) should return 6.
3. convertParsecs(31) should return 62.
4. convertParsecs(88) should return 264.
5. convertParsecs(17) should return 34.
6. convertParsecs(14) should return 42.
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