function secondLargest(arr) {

  return Array.from(new Set(arr))
    .sort((a, b) => a - b)
    .at(-2);
}

console.log(secondLargest([1, 2, 3, 4]));
console.log(secondLargest([20, 139, 94, 67, 31]));
console.log(secondLargest([2, 3, 4, 6, 6]));
console.log(secondLargest([10, -17, 55.5, 44, 91, 0]));
console.log(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]));

// --- TEST SUITE ---

const testsText = `
1. secondLargest([1, 2, 3, 4]) should return 3.
2. secondLargest([20, 139, 94, 67, 31]) should return 94.
3. secondLargest([2, 3, 4, 6, 6]) should return 4.
4. secondLargest([10, -17, 55.5, 44, 91, 0]) should return 55.5.
5. secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]) should return 0.
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