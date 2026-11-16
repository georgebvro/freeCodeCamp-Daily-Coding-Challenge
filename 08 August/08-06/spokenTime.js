function getSpokenTime(hourAngle, minuteAngle) {
  const DEGREES_IN_CLOCK_FACE = 360;
  const HOURS_IN_CLOCK_FACE = 12;
  const MINUTES_IN_HOUR = 60;

  const hour = Math.floor(hourAngle / DEGREES_IN_CLOCK_FACE * HOURS_IN_CLOCK_FACE);
  const minutes = Math.floor(minuteAngle / DEGREES_IN_CLOCK_FACE * MINUTES_IN_HOUR);

  if (minutes === 0) {
    return `${hour} o'clock`;
  }

  if (1 <= minutes && minutes <= 29) {
    return minutes === 15 ? `quarter past ${hour}` : `${minutes} minutes past ${hour}`;
  }

  if (minutes === 30) {
    return `half past ${hour}`;
  }

  if (31 <= minutes && minutes <= 59) {
    return minutes === 45 ? `quarter to ${hour + 1}` : `${MINUTES_IN_HOUR - minutes} minutes to ${hour + 1}`;
  }
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getSpokenTime(90, 0) should return "3 o'clock".
2. getSpokenTime(160, 120) should return "20 minutes past 5".
3. getSpokenTime(255, 180) should return "half past 8".
4. getSpokenTime(67.5, 92) should return "quarter past 2".
5. getSpokenTime(200, 240) should return "20 minutes to 7".
6. getSpokenTime(322.5, 273) should return "quarter to 11".
7. getSpokenTime(117.5, 335) should return "5 minutes to 4".
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