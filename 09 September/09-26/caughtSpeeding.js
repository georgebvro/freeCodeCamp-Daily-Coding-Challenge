function speeding(speeds, limit) {
  let speedingVehicles = 0;
  let overspeed = 0;

  // Direct, imperative style
  for (let speed of speeds) {
    if (speed > limit) {
      speedingVehicles ++;
      overspeed += speed - limit;
    }
  }

  /* Functional, declarative style
  speeds.forEach(speed => {
    if (speed > limit) {
      speedingVehicles ++;
      overspeed += speed - limit;
    }
  })
  */

  return speedingVehicles > 0 ? [speedingVehicles, overspeed / speedingVehicles] : [0, 0];
}

console.log(speeding([50, 60, 55], 60));
console.log(speeding([58, 50, 60, 55], 55));
console.log(speeding([61, 81, 74, 88, 65, 71, 68], 70));
console.log(speeding([100, 105, 95, 102], 100));
console.log(speeding([40, 45, 44, 50, 112, 39], 55));

// --- TEST SUITE ---

const testsText = `
1. speeding([50, 60, 55], 60) should return [0, 0].
2. speeding([58, 50, 60, 55], 55) should return [2, 4].
3. speeding([61, 81, 74, 88, 65, 71, 68], 70) should return [4, 8.5].
4. speeding([100, 105, 95, 102], 100) should return [2, 3.5].
5. speeding([40, 45, 44, 50, 112, 39], 55) should return [1, 57].
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