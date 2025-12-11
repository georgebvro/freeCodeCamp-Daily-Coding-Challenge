function findTarget(arr, target) {
  for (const i in arr) 
    for (const j in arr) 
      if (arr[i] !== arr[j] && arr[i] + arr[j] === target)
        return [parseInt(i), parseInt(j)];

  return "Target not found";
}

console.log(findTarget([2, 7, 11, 15], 9));
console.log(findTarget([3, 2, 4, 5], 6));
console.log(findTarget([1, 3, 5, 6, 7, 8], 15));
console.log(findTarget([1, 3, 5, 7], 14));

// --- TEST SUITE ---

const testsText = `
1. findTarget([2, 7, 11, 15], 9) should return [0, 1].
2. findTarget([3, 2, 4, 5], 6) should return [1, 2].
3. findTarget([1, 3, 5, 6, 7, 8], 15) should return [4, 5].
4. findTarget([1, 3, 5, 7], 14) should return "Target not found".
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