function mostFrequent(arr) {
  let mostFrequentElement = arr[0];
  let maxFrequency = 1;
  const elementSet = new Set(arr);

  elementSet.forEach(elementInSet => {
    const frequencyCount = arr.filter(elementFilter => elementInSet === elementFilter).length;

    if (frequencyCount > maxFrequency) {
      mostFrequentElement = elementInSet;
      maxFrequency = frequencyCount;
    }
  })

  return mostFrequentElement;
}

console.log(mostFrequent(["a", "b", "a", "c"]));
console.log(mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]));
console.log(mostFrequent([true, false, "false", "true", false]));
console.log(mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]));

// --- TEST SUITE ---

const testsText = `
1. mostFrequent(["a", "b", "a", "c"]) should return "a".
2. mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]) should return 2.
3. mostFrequent([true, false, "false", "true", false]) should return false.
4. mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]) should return 40.
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