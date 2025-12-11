// Iterative solution
function launchFuel(payload) {
  let additionalFuel = payload / 5;
  let totalFuel = additionalFuel;

  while (additionalFuel >= 1) {
    additionalFuel = additionalFuel / 5;
    totalFuel += additionalFuel;
  } 

  return +parseFloat(totalFuel).toFixed(1);
}

/* Recursive solution that should work but it fails Test #3 because of the rounding.
function launchFuel(payload) {

  const additionalFuel = payload / 5;

  if (additionalFuel < 1)
    return additionalFuel;

  return +parseFloat(payload / 5 + launchFuel(payload / 5)).toFixed(1);
}
*/

console.log(launchFuel(50));
console.log(launchFuel(500));
console.log(launchFuel(243));
console.log(launchFuel(11000));
console.log(launchFuel(6214));

// --- TEST SUITE ---

const testsText = `
1. launchFuel(50) should return 12.4.
2. launchFuel(500) should return 124.8.
3. launchFuel(243) should return 60.7.
4. launchFuel(11000) should return 2749.8.
5. launchFuel(6214) should return 1553.4.
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