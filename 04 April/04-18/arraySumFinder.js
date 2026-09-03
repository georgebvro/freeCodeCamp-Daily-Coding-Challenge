function findSum(arr, target) {
  const MINIMUM_SUBSET_LENGTH = 2;
  let result = null;

  const backtrackDfs = (startIndex, currentSubset, currentSum) => {
    console.log(startIndex, currentSubset, currentSum);

    if (currentSubset.length >= MINIMUM_SUBSET_LENGTH && currentSum === target) {
      result = currentSubset;
      return true;
    }

    for (let i = startIndex; i < arr.length; ++i) {
      currentSubset.push(arr[i]);

      if (backtrackDfs(i + 1, currentSubset, currentSum + arr[i])) {
        return true;
      }

      currentSubset.pop();
    }

    return false;
  }

  backtrackDfs(0, [], 0);

  return result || "Sum not found";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. findSum([1, 3, 5, 7], 6) should return [1, 5].
2. findSum([1, 2, 3, 4, 5], 5) should return [1, 4].
3. findSum([1, 2, 3, 4, 5], 6) should return [1, 2, 3].
4. findSum([-1, -2, 3, 4], 1) should return [-1, -2, 4].
5. findSum([3, 1, 4, 1, 5, 9, 2, 6], 10) should return [3, 1, 4, 2].
6. findSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 20) should return [1, 2, 3, 5, 9].
7. findSum([7, 9, 4, 2, 5], 10) should return "Sum not found".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("——————————————————————————",
            "\n🧪Starting Verification...",
            "\n——————————————————————————");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

runTests(testData);