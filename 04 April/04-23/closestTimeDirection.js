function getDirection(time1, time2) {
  const time1Temporal = Temporal.PlainTime.from(time1);
  const time2Temporal = Temporal.PlainTime.from(time2);

  const difference = time1Temporal.until(time2Temporal);

  if (Math.abs(difference.hours) === 12 && difference.minutes === 0) {
    return "equal";
  }

  if (0 <= difference.hours && difference.hours < 12 || -23 <= difference.hours && difference.hours <= -12) {
    return "forward";
  }

  if (12 <= difference.hours && difference.hours <= 23 || -12 < difference.hours && difference.hours <= 0) {
    return "backward";
  }
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getDirection("10:00", "12:00") should return "forward".
2. getDirection("11:00", "05:00") should return "backward".
3. getDirection("00:00", "12:00") should return "equal".
4. getDirection("15:45", "01:10") should return "forward".
5. getDirection("03:30", "19:50") should return "backward".
6. getDirection("06:30", "18:30") should return "equal".
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
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

runTests(testData);