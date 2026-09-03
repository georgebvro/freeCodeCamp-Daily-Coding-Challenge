function getGreeting(time) {
  const MINUTES_IN_HOUR = 60;

  const dayPeriods = {
    morning: { 'start': 5 * MINUTES_IN_HOUR, 'end': 11 * MINUTES_IN_HOUR + 59 },
    afternoon: { 'start': 12 * MINUTES_IN_HOUR, 'end': 17 * MINUTES_IN_HOUR + 59 },
    evening: { 'start': 18 * MINUTES_IN_HOUR, 'end': 21 * MINUTES_IN_HOUR + 59 },
    night: { 'start': 22 * MINUTES_IN_HOUR, 'end': 4 * MINUTES_IN_HOUR + 59 }
  };

  const timeTemporal = Temporal.PlainTime.from(time);
  const mindnightTemporal = Temporal.PlainTime.from("00:00");

  const difference = timeTemporal.since(mindnightTemporal);
  const minutesSinceMidnight = difference.hours * MINUTES_IN_HOUR + difference.minutes;

  for (const [periodName, timeInterval] of Object.entries(dayPeriods)) {
    if (timeInterval.start <= minutesSinceMidnight && minutesSinceMidnight <= timeInterval.end) {
      return `Good ${periodName}`;
    }
  }

  return "Good night";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getGreeting("06:30") should return "Good morning".
2. getGreeting("12:00") should return "Good afternoon".
3. getGreeting("21:59") should return "Good evening".
4. getGreeting("00:01") should return "Good night".
5. getGreeting("11:30") should return "Good morning".
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