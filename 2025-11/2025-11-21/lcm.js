function lcm(a, b) {
  const bigger_number = Math.max(a, b);
  const smaller_number = Math.min(a, b);
  let i = 1;
  let possibleLcm = bigger_number;

  while (possibleLcm % smaller_number !== 0) {
    i ++;
    possibleLcm = bigger_number * i;
  }

  return possibleLcm;
}

// --- TEST SUITE ---

const testsText = `
1. lcm(4, 6) should return 12.
2. lcm(9, 6) should return 18.
3. lcm(10, 100) should return 100.
4. lcm(13, 17) should return 221.
5. lcm(45, 70) should return 630.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
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

    if (functionCallOutput === testOutput) {
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

runTests(testData);