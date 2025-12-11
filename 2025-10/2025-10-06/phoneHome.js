function sendMessage(route) {
  const messageSpeed = 300000
  const satelliteTransmissionDelay = 0.5

  return +parseFloat(
    route.reduce((travelTime, distance) => travelTime + distance / messageSpeed, 0) 
    + (route.length - 1) * satelliteTransmissionDelay
    ).toFixed(4);
}

console.log(sendMessage([300000, 300000]));
console.log(sendMessage([384400, 384400]));
console.log(sendMessage([54600000, 54600000]));
console.log(sendMessage([1000000, 500000000, 1000000]));
console.log(sendMessage([10000, 21339, 50000, 31243, 10000]));
console.log(sendMessage([802101, 725994, 112808, 3625770, 481239]));

// --- TEST SUITE ---

const testsText = `
1. sendMessage([300000, 300000]) should return 2.5.
2. sendMessage([384400, 384400]) should return 3.0627.
3. sendMessage([54600000, 54600000]) should return 364.5.
4. sendMessage([1000000, 500000000, 1000000]) should return 1674.3333.
5. sendMessage([10000, 21339, 50000, 31243, 10000]) should return 2.4086.
6. sendMessage([802101, 725994, 112808, 3625770, 481239]) should return 21.1597.
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