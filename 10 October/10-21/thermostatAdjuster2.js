function adjustThermostat(currentF, targetC) {
  const difference = parseFloat(targetC * 1.8 + 32 - currentF).toFixed(1);

  return difference > 0 ? `Heat: ${difference} degrees Fahrenheit` 
    : difference < 0 ? `Cool: ${Math.abs(difference)} degrees Fahrenheit` 
    : "Hold";
}

console.log(adjustThermostat(32, 0));
console.log(adjustThermostat(70, 25));
console.log(adjustThermostat(72, 18));
console.log(adjustThermostat(212, 100));
console.log(adjustThermostat(59, 22));

// --- TEST SUITE ---

const testsText = `
1. adjustThermostat(32, 0) should return "Hold".
2. adjustThermostat(70, 25) should return "Heat: 7.0 degrees Fahrenheit".
3. adjustThermostat(72, 18) should return "Cool: 7.6 degrees Fahrenheit".
4. adjustThermostat(212, 100) should return "Hold".
5. adjustThermostat(59, 22) should return "Heat: 12.6 degrees Fahrenheit".
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