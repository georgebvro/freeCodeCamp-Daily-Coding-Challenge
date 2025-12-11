function adjustThermostat(temp, target) {

  return temp < target ? "heat" : temp > target ? "cool" : "hold";
}

console.log(adjustThermostat(68, 72));
console.log(adjustThermostat(75, 72));
console.log(adjustThermostat(72, 72));
console.log(adjustThermostat(-20.5, -10.1));
console.log(adjustThermostat(100, 99.9));
console.log(adjustThermostat(0.0, 0.0));

// --- TEST SUITE ---

const testsText = `
1. adjustThermostat(68, 72) should return "heat".
2. adjustThermostat(75, 72) should return "cool".
3. adjustThermostat(72, 72) should return "hold".
4. adjustThermostat(-20.5, -10.1) should return "heat".
5. adjustThermostat(100, 99.9) should return "cool".
6. adjustThermostat(0.0, 0.0) should return "hold".
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