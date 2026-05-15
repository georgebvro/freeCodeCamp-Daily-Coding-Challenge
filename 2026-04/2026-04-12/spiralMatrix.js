function spiralMatrix(matrix) {
    const THRESHOLD = 8; // if there are at least 8 elements at the edge of the matrix, it means there are more elements in the interior of the matrix

    const top = matrix[0];
    const right = matrix.map(row => row.at(-1)).slice(1);
    const bottom = matrix.at(-1).toReversed().slice(1);
    const left = matrix.map(row => row[0]).toReversed().slice(1, -1);

    const array = top.concat(right, bottom, left);

    return array.length >= THRESHOLD
        ? array.concat(spiralMatrix(matrix.slice(1, -1).map(row => row.slice(1, -1))))
        : array;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [1, 2, 3, 6, 9, 8, 7, 4, 5].
2. spiralMatrix([["a", "b", "c", "d"], ["l", "m", "n", "e"], ["k", "p", "o", "f"], ["j", "i", "h", "g"]]) should return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"].
3. spiralMatrix([[true, false, false], [false, true, true], [false, true, false], [true, true, false]]) should return [true, false, false, true, false, false, true, true, false, false, true, true].
4. spiralMatrix([[25, 24, 23, 22, 21], [10, 9, 8, 7, 20], [11, 2, 1, 6, 19], [12, 3, 4, 5, 18], [13, 14, 15, 16, 17]]) should return [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].
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