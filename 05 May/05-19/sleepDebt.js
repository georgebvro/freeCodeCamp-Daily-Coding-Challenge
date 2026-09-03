function sleepDebt(hoursSlept, targetHours) {
  const hoursToSleepTonight = hoursSlept.reduce((acc, hours) => acc + targetHours - hours, 0) + targetHours;

  return hoursToSleepTonight < 0 ? 0 : hoursToSleepTonight;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. sleepDebt([6, 6, 6, 6, 6, 6], 8) should return 20.
2. sleepDebt([6, 7, 8, 4, 8, 6], 7) should return 10.
3. sleepDebt([10, 10, 9, 10, 9, 11], 9) should return 4.
4. sleepDebt([8, 7, 6, 7, 6, 8], 6) should return 0.
5. sleepDebt([8, 9, 10, 9, 10, 7], 7) should return 0.
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