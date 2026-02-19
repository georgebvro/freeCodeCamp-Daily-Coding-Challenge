function getFastestSpeed(times) {
  const trackSegmentsMeters = [320, 280, 350, 300, 250];
  const segmentSpeeds = Array.from({ length: times.length }, (_, i) => trackSegmentsMeters[i] / times[i]);

  const highestSpeed = segmentSpeeds.reduce((a, b) => Math.max(a, b));
  const fastestSegment = segmentSpeeds.findIndex(speed => speed === highestSpeed) + 1;

  return `The luger's fastest speed was ${highestSpeed.toFixed(2)} m/s on segment ${fastestSegment}.`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128]) should return "The luger's fastest speed was 35.07 m/s on segment 5."
2. getFastestSpeed([9.381, 7.417, 9.912, 8.815, 7.284]) should return "The luger's fastest speed was 37.75 m/s on segment 2."
3. getFastestSpeed([8.890, 7.601, 9.093, 8.392, 6.912]) should return "The luger's fastest speed was 38.49 m/s on segment 3."
4. getFastestSpeed([8.490, 7.732, 10.103, 8.489, 6.840]) should return "The luger's fastest speed was 37.69 m/s on segment 1."
5. getFastestSpeed([8.204, 7.230, 9.673, 7.645, 6.508]) should return "The luger's fastest speed was 39.24 m/s on segment 4."
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