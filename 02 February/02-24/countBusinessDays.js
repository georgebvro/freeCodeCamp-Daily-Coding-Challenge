function countBusinessDays(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  let timestamp = startDate.getTime();
  const endDateTimestamp = endDate.getTime();
  let businessDays = 0;
  const dayDurationInMilliseconds = 1000 * 60 * 60 * 24;

  while (timestamp <= endDateTimestamp) {
    const dayOfTheWeek = new Date(timestamp).getDay();
    businessDays += 0 < dayOfTheWeek && dayOfTheWeek < 6 ? 1 : 0 
    timestamp += dayDurationInMilliseconds; 
  }

  return businessDays;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. countBusinessDays("2026-02-24", "2026-02-26") should return 3.
2. countBusinessDays("2026-02-24", "2026-02-28") should return 4.
3. countBusinessDays("2026-02-21", "2026-03-01") should return 5.
4. countBusinessDays("2026-03-08", "2026-03-17") should return 7.
5. countBusinessDays("2026-02-24", "2027-02-24") should return 262.
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