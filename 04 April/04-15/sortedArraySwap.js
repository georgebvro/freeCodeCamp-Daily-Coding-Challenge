function sortAndSwap(arr) {
  const newArr = arr.toSorted((a, b) => a - b);

/* Solution using one counter
  for (let i = 3; i < newArr.length; i += 3) {
    [newArr[i - 1], newArr[i]] = [newArr[i], newArr[i - 1]];
  }
*/

// Solution using two counters
  for (let i = 2, j = 3; j < newArr.length; i += 3, j += 3) {
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. sortAndSwap([3, 1, 2, 4, 6, 5]) should return [1, 2, 4, 3, 5, 6].
2. sortAndSwap([9, 7, 5, 3, 1, 2, 4, 6, 8]) should return [1, 2, 4, 3, 5, 7, 6, 8, 9].
3. sortAndSwap([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [1, 2, 4, 3, 5, 7, 6, 8, 9].
4. sortAndSwap([12, 5, 8, 1, 3, 10, 2, 7, 6, 4, 9, 11]) should return [1, 2, 4, 3, 5, 7, 6, 8, 10, 9, 11, 12].
5. sortAndSwap([100, -50, 0, 75, -25, 50, -75, 25]) should return [-75, -50, 0, -25, 25, 75, 50, 100].
6. sortAndSwap([5, 9, 13, 77, 88, 313, -10, -65, 0, 8, 99, 101, -4, 2]) should return [-65, -10, 0, -4, 2, 8, 5, 9, 77, 13, 88, 101, 99, 313].
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