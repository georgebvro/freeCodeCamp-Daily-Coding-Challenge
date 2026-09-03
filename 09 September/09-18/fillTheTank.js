function costToFill(tankSize, fuelLevel, pricePerGallon) {

  return new Intl.NumberFormat(
    'en-US', 
    { 
      style: 'currency', 
      currency: "USD" 
    }
  ).format(
    (tankSize - fuelLevel) * pricePerGallon
  );
}

console.log(costToFill(20, 0, 4.00));
console.log(costToFill(15, 10, 3.50));
console.log(costToFill(18, 9, 3.25));
console.log(costToFill(12, 12, 4.99));
console.log(costToFill(15, 9.5, 3.98));

// --- TEST SUITE ---

const testsText = `
1. costToFill(20, 0, 4.00) should return "$80.00".
2. costToFill(15, 10, 3.50) should return "$17.50".
3. costToFill(18, 9, 3.25) should return "$29.25".
4. costToFill(12, 12, 4.99) should return "$0.00".
5. costToFill(15, 9.5, 3.98) should return "$21.89".
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

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);