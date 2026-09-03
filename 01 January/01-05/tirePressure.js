function tireStatus(pressuresPSI, rangeBar) {
  const BAR_PSI_CONVERSION_RATE = 14.5038;

  return pressuresPSI.map(tirePressurePsi => {
    const tirePressureBar = tirePressurePsi / BAR_PSI_CONVERSION_RATE;

    return tirePressureBar < rangeBar[0] ? "Low" 
      : tirePressureBar > rangeBar[1] ? "High" 
      : "Good";
  });
}

// --- TEST SUITE ---

const testsText = String.raw`
1. tireStatus([32, 28, 35, 29], [2, 3]) should return ["Good", "Low", "Good", "Low"].
2. tireStatus([32, 28, 35, 30], [2, 2.3]) should return ["Good", "Low", "High", "Good"].
3. tireStatus([29, 26, 31, 28], [2.1, 2.5]) should return ["Low", "Low", "Good", "Low"].
4. tireStatus([31, 31, 30, 29], [1.5, 2]) should return ["High", "High", "High", "Good"].
5. tireStatus([30, 28, 30, 29], [1.9, 2.1]) should return ["Good", "Good", "Good", "Good"].
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