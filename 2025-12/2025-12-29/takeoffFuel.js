function fuelToAdd(currentGallons, requiredLiters) {
  const gallonsToLitersConversionRate = 3.78541;
  const additionalGallonsNeeded = Math.ceil(requiredLiters / gallonsToLitersConversionRate - currentGallons);

  return additionalGallonsNeeded > 0 ? additionalGallonsNeeded : 0;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. fuelToAdd(0, 1) should return 1.
2. fuelToAdd(5, 40) should return 6.
3. fuelToAdd(10, 30) should return 0.
4. fuelToAdd(896, 20500) should return 4520.
5. fuelToAdd(1000, 50000) should return 12209.
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