function speedCheck(speedMph, speedLimitKph) {
  const warningOverspeed = 5;
  const milesToKmConversionRate = 1.60934;
  const speedKph = speedMph * milesToKmConversionRate;

  return speedKph <= speedLimitKph ? "Not Speeding" 
    : speedKph <= speedLimitKph + warningOverspeed ? "Warning" 
    : "Ticket";
}

// --- TEST SUITE ---

const testsText = `
1. speedCheck(30, 70) should return "Not Speeding".
2. speedCheck(40, 60) should return "Warning".
3. speedCheck(40, 65) should return "Not Speeding".
4. speedCheck(60, 90) should return "Ticket".
5. speedCheck(65, 100) should return "Warning".
6. speedCheck(88, 40) should return "Ticket".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);
    let comparison;

    if (Array.isArray(testOutput))
      comparison = arraysEqual(functionCallOutput, testOutput);
    else
      comparison = functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
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