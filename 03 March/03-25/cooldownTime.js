function canRetake(finishTime, currentTime) {
  const HOURS_IN_DAY = 24;
  const MINUTES_IN_HOUR = 60;
  const SECONDS_IN_MINUTE = 60;
  const EXAM_COOLDOWN_HOURS = 48;

  const finishTimeObject = Temporal.PlainDateTime.from(finishTime);
  const currentTimeObject = Temporal.PlainDateTime.from(currentTime);
  const timeDifference = currentTimeObject.since(finishTimeObject);

  const timeDifferenceHours = 
    timeDifference.days * HOURS_IN_DAY + 
    timeDifference.hours + 
    timeDifference.minutes / MINUTES_IN_HOUR + 
    timeDifference.seconds / SECONDS_IN_MINUTE / MINUTES_IN_HOUR;

  return timeDifferenceHours >= EXAM_COOLDOWN_HOURS ? true : false;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. canRetake("2026-03-23T08:00:00", "2026-03-25T14:00:00") should return true.
2. canRetake("2026-03-24T14:00:00", "2026-03-25T10:00:00") should return false.
3. canRetake("2026-03-23T09:25:00", "2026-03-25T09:25:00") should return true.
4. canRetake("2026-03-23T11:50:00", "2026-03-25T11:49:59") should return false.
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