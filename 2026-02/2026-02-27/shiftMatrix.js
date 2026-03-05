function shiftMatrix(matrix, shift) {
  let array = matrix.flat();
  shift = shift % array.length;
  let shiftedMatrix = [];
  let index = 0;
  const columns = matrix[0].length;

  array = array.slice(-shift).concat(array.slice(0, -shift));

  while (index < array.length) {
    shiftedMatrix.push(array.slice(index, index + columns));
    index += columns;
  }

  return shiftedMatrix;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. shiftMatrix([[1, 2, 3], [4, 5, 6]], 1) should return [[6, 1, 2], [3, 4, 5]].
2. shiftMatrix([[1, 2, 3], [4, 5, 6]], -1) should return [[2, 3, 4], [5, 6, 1]].
3. shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5) should return [[5, 6, 7], [8, 9, 1], [2, 3, 4]].
4. shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], -6) should return [[7, 8, 9], [1, 2, 3], [4, 5, 6]].
5. shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 7) should return [[10, 11, 12, 13], [14, 15, 16, 1], [2, 3, 4, 5], [6, 7, 8, 9]].
6. shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], -54) should return [[7, 8, 9, 10], [11, 12, 13, 14], [15, 16, 1, 2], [3, 4, 5, 6]].
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