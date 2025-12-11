function sockPairs(pairs, cycles) {
  const remainingPairs = Math.floor(
    (pairs * 2 
    - Math.floor(cycles / 2) 
    + Math.floor(cycles / 3) 
    - Math.floor(cycles / 5) 
    + Math.floor(cycles / 10) * 2) 
    / 2);

  return remainingPairs >= 0 ? remainingPairs : 0;
}

console.log(sockPairs(2, 5));
console.log(sockPairs(1, 2));
console.log(sockPairs(5, 11));
console.log(sockPairs(6, 25));
console.log(sockPairs(1, 8));

// --- TEST SUITE ---

const testsText = `
1. sockPairs(2, 5) should return 1.
2. sockPairs(1, 2) should return 0.
3. sockPairs(5, 11) should return 4.
4. sockPairs(6, 25) should return 3.
5. sockPairs(1, 8) should return 0.
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