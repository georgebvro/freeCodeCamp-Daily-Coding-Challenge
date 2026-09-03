function invertMatrix(matrix) {
  const distinctValues = [matrix[0][0]];

  for (const row of matrix) {
    const secondValue = row.find(value => value !== distinctValues[0]);
    
    if (secondValue !== undefined) {
      distinctValues[1] = secondValue;
      break;
    }
  }

  for (let i in matrix) {
    for (let j in matrix[i]) {
      matrix[i][j] = distinctValues.find(value => value !== matrix[i][j]);
    }
  }

  return matrix;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. invertMatrix([["a", "b"], ["a", "a"]]) should return [["b", "a"], ["b", "b"]].
2. invertMatrix([[1, 0, 1], [1, 1, 1], [0, 1, 0]]) should return [[0, 1, 0], [0, 0, 0], [1, 0, 1]].
3. invertMatrix([["apple", "banana", "banana", "apple"], ["banana", "apple", "apple", "banana"], ["banana", "banana", "banana", "apple"]]) should return [["banana", "apple", "apple", "banana"], ["apple", "banana", "banana", "apple"], ["apple", "apple", "apple", "banana"]].
4. invertMatrix([[6, 7, 7, 7, 6], [7, 6, 7, 6, 7], [7, 7, 6, 7, 7], [7, 6, 7, 6, 7], [6, 7, 7, 7, 6]]) should return [[7, 6, 6, 6, 7], [6, 7, 6, 7, 6], [6, 6, 7, 6, 6], [6, 7, 6, 7, 6], [7, 6, 6, 6, 7]].
5. invertMatrix([[1.2, 2.1, 2.1, 2.1], [2.1, 1.2, 2.1, 1.2], [1.2, 1.2, 2.1, 2.1]]) should return [[2.1, 1.2, 1.2, 1.2], [1.2, 2.1, 1.2, 2.1], [2.1, 2.1, 1.2, 1.2]].
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