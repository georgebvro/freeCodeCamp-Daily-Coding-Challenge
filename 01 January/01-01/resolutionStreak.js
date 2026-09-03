function resolutionStreak(days) {
  const minStepsGoal = 10000;
  const maxScreenMinutesGoal = 120;
  const minPagesGoal = 5;

  for (const dayNumber in days)
    if (days[dayNumber][0] < minStepsGoal || days[dayNumber][1] > maxScreenMinutesGoal || days[dayNumber][2] < minPagesGoal)
      return `Resolution failed on day ${Number(dayNumber) + 1}: ${dayNumber} day streak.`;

  return `Resolution on track: ${days.length} day streak.`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]]) should return "Resolution on track: 3 day streak."
2. resolutionStreak([[10000, 120, 5], [10950, 121, 11]]) should return "Resolution failed on day 2: 1 day streak."
3. resolutionStreak([[15000, 110, 8], [12300, 60, 13], [10100, 120, 4], [9000, 125, 4]]) should return "Resolution failed on day 3: 2 day streak."
4. resolutionStreak([[11600, 76, 13], [12556, 64, 26], [10404, 32, 59], [9999, 44, 124], [7508, 23, 167], [10900, 80, 0]]) should return "Resolution failed on day 4: 3 day streak."
5. resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9], [10200, 60, 10], [10678, 87, 9], [12431, 67, 13], [10444, 107, 19], [10111, 95, 5], [10000, 120, 7], [11980, 101, 8]]) should return "Resolution on track: 10 day streak."
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