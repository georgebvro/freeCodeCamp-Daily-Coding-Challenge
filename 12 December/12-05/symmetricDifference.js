function difference(arr1, arr2) {

  return [...new Set(arr1).symmetricDifference(new Set(arr2))];
}

console.log(difference([1, 2, 3], [3, 4, 5]));
console.log(difference(["a", "b"], ["c", "b"]));
console.log(difference([1, "a", 2], [2, "b", "a"]));
console.log(difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]));

// --- TEST SUITE ---

const testsText = `
1. difference([1, 2, 3], [3, 4, 5]) should return [1, 2, 4, 5].
2. difference(["a", "b"], ["c", "b"]) should return ["a", "c"].
3. difference([1, "a", 2], [2, "b", "a"]) should return [1, "b"].
4. difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [2, 4, 6, 8].
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