function alarmCheck(alarmTime, wakeTime) {
  const SNOOZE_WINDOW = "PT10M";
  
  const alarmTimeObject = Temporal.PlainTime.from(alarmTime);
  const wakeTimeObject = Temporal.PlainTime.from(wakeTime);
  const snoozeTimeObject = alarmTimeObject.add(SNOOZE_WINDOW);

  return Temporal.PlainTime.compare(wakeTimeObject, alarmTimeObject) === -1 ? "early"
    : Temporal.PlainTime.compare(wakeTimeObject, snoozeTimeObject) <= 0 ? "on time"
    : "late";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. alarmCheck("07:00", "06:45") should return "early".
2. alarmCheck("06:30", "06:30") should return "on time".
3. alarmCheck("08:10", "08:15") should return "on time".
4. alarmCheck("09:30", "09:45") should return "late".
5. alarmCheck("08:15", "08:25") should return "on time".
6. alarmCheck("05:45", "05:56") should return "late".
7. alarmCheck("04:30", "04:00") should return "early".
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