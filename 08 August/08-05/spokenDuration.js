function getSpokenDuration(seconds) {
  const duration = Temporal.Duration.from({ seconds: seconds }).round({ largestUnit: 'hours' });
  const durationObject = {};

  if (duration.hours) {
    durationObject.hours = duration.hours;
  }

  if (duration.minutes) {
    durationObject.minutes = duration.minutes;
  }

  if (duration.seconds) {
    durationObject.seconds = duration.seconds;
  }

  const durationArray = Object.entries(durationObject);

  return durationArray.reduce((durationSpoken, [unit, value], index) => {
    if (index === 0) {
      return `${durationSpoken}${value} ${value === 1 ? unit.slice(0, unit.length - 1) : unit}`;
    }

    if (0 < index && index < durationArray.length - 1) {
      return `${durationSpoken}, ${value} ${value === 1 ? unit.slice(0, unit.length - 1) : unit}`;
    }

    return `${durationSpoken} and ${value} ${value === 1 ? unit.slice(0, unit.length - 1) : unit}`;
  }, "");
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getSpokenDuration(3723) should return "1 hour, 2 minutes and 3 seconds".
2. getSpokenDuration(7295) should return "2 hours, 1 minute and 35 seconds".
3. getSpokenDuration(8521) should return "2 hours, 22 minutes and 1 second".
4. getSpokenDuration(435) should return "7 minutes and 15 seconds".
5. getSpokenDuration(14455) should return "4 hours and 55 seconds".
6. getSpokenDuration(72000) should return "20 hours".
7. getSpokenDuration(1) should return "1 second".
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