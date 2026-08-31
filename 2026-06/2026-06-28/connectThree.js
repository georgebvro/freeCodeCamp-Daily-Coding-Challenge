function connectThree(matrix) {
  // Horizontal
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 1; j < matrix[i].length - 1; ++j) {
      if (matrix[i][j] && matrix[i][j - 1] === matrix[i][j] && matrix[i][j] === matrix[i][j + 1]) {
        return [matrix[i][j], [i, j - 1], [i, j], [i, j + 1]];
      }
    }
  }

  // Vertical
  for (let i = 1; i < matrix.length - 1; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] && matrix[i - 1][j] === matrix[i][j] && matrix[i][j] === matrix[i + 1][j]) {
        return [matrix[i][j], [i - 1, j], [i, j], [i + 1, j]];
      }
    }
  }

  // Diagonals
  for (let i = 1; i < matrix.length - 1; ++i) {
    for (let j = 1; j < matrix[i].length - 1; ++j) {
      if (matrix[i][j] && matrix[i - 1][j - 1] === matrix[i][j] && matrix[i][j] === matrix[i + 1][j + 1]) {
        return [matrix[i][j], [i - 1, j - 1], [i, j], [i + 1, j + 1]];
      }

      if (matrix[i][j] && matrix[i - 1][j + 1] === matrix[i][j] && matrix[i][j] === matrix[i + 1][j - 1]) {
        return [matrix[i][j], [i - 1, j + 1], [i, j], [i + 1, j - 1]];
      }
    }
  }

  return [];
}

// --- TEST SUITE ---

const testsText = String.raw`
1. connectThree([["", "", "", ""], ["", "", "", ""], ["", "Y", "", ""], ["Y", "R", "R", "R"]]) should return ["R", [3, 1], [3, 2], [3, 3]].
2. connectThree([["", "", "", ""], ["", "Y", "Y", ""], ["", "Y", "R", "R"], ["", "Y", "R", "R"]]) should return ["Y", [1, 1], [2, 1], [3, 1]].
3. connectThree([["", "", "Y", "R"], ["", "Y", "R", "Y"], ["", "R", "Y", "R"], ["", "R", "Y", "R"]]) should return ["R", [0, 3], [1, 2], [2, 1]].
4. connectThree([["", "Y", "", ""], ["", "Y", "Y", ""], ["", "R", "R", "Y"], ["R", "R", "Y", "R"]]) should return ["Y", [0, 1], [1, 2], [2, 3]].
5. connectThree([["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"], ["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"]]) should return [].
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
    const testOutput = eval(`(${test.output})`);

    if (JSON.stringify(functionCallOutput) === JSON.stringify(testOutput)) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${JSON.stringify(testOutput)}\nGot: ${JSON.stringify(functionCallOutput)}`);

      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

runTests(testData);