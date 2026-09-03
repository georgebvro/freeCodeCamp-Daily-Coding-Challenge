function digitalDetox(logs) {
  const logsDateObjects = logs.map(log => new Date(log)).sort();
  const logsDateStrings = logs.map(log => log.slice(0, 10));
  const FOUR_HOURS_PERIOD_IN_MILLISECONDS = 4 * 60 * 60 * 1000;
  
  for (let logIndex = 0; logIndex < logs.length - 1; ++logIndex)
    if (
      Math.abs(logsDateObjects[logIndex] - logsDateObjects[logIndex + 1]) < FOUR_HOURS_PERIOD_IN_MILLISECONDS
      || logsDateStrings.filter(logDateString => logDateString === logsDateStrings[logIndex]).length > 2
    )
      return false;
      
  return true;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. digitalDetox(["2026-02-01 08:00:00", "2026-02-01 12:30:00"]) should return true.
2. digitalDetox(["2026-02-01 04:00:00", "2026-02-01 07:30:00"]) should return false.
3. digitalDetox(["2026-01-31 08:21:30", "2026-01-31 14:30:00", "2026-02-01 08:00:00", "2026-02-01 12:30:00"]) should return true.
4. digitalDetox(["2026-01-31 10:40:21", "2026-01-31 15:19:41", "2026-01-31 21:49:50", "2026-02-01 09:30:00"]) should return false.
5. digitalDetox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 09:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"]) should return true.
6. digitalDetox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 01:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"]) should return false.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
  })

  console.log("----------------------------",
    failCount
    ? `\n⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "\n🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i]))
          return false;
      }
      else 
        return false;
    }

    else if (a[i] !== b[i])
      return false;
  }

  return true;
}

runTests(testData);