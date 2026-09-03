function isSorted(arr) {
  let ascending = true;
  let descending = true;

  for (let i = 1; i < arr.length; ++i)
    if (arr[i - 1] > arr[i]) {
      ascending = false;
      break;
    }

  for (let i = 1; i < arr.length; ++i)
    if (arr[i - 1] < arr[i]) {
      descending = false;
      break;
    }

  return ascending ? "Ascending" : descending ? "Descending" : "Not sorted";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isSorted([1, 2, 3, 4, 5]) should return "Ascending".
2. isSorted([10, 8, 6, 4, 2]) should return "Descending".
3. isSorted([1, 3, 2, 4, 5]) should return "Not sorted".
4. isSorted([3.14, 2.71, 1.61, 0.57]) should return "Descending".
5. isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]) should return "Ascending".
6. isSorted([0.4, 0.5, 0.3]) should return "Not sorted".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
  })

  console.log("----------------------------",
    failCount
    ? `\n⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "\n🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i]))
          return false;
      }
      else 
        return false;
    }

    else if (a[i] !== b[i])
      return false;
  }

  return true;
}

runTests(testData);