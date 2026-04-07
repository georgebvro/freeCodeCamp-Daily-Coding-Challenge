function getShadow(time) {
  const timeTemporal = Temporal.PlainTime.from(time);
  const noonTemporal = Temporal.PlainTime.from("12:00");

  const noonDifference = timeTemporal.since(noonTemporal);

  if (
    noonDifference.hours < -6 || 6 <= noonDifference.hours || 
    noonDifference.hours === 0 && noonDifference.minutes === 0
  )
    return "No shadow";

  const shadowLength = Math.abs((noonDifference.hours + noonDifference.minutes / 60) ** 3);
  const shadowDirection = noonDifference.hours > 0 ? "east" : "west";

  return `${shadowLength}ft ${shadowDirection}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getShadow("10:00") should return "8ft west".
2. getShadow("15:00") should return "27ft east".
3. getShadow("12:00") should return "No shadow".
4. getShadow("17:30") should return "166.375ft east".
5. getShadow("05:00") should return "No shadow".
6. getShadow("06:00") should return "216ft west".
7. getShadow("18:00") should return "No shadow".
8. getShadow("07:30") should return "91.125ft west".
9. getShadow("00:00") should return "No shadow".
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