function bucketFill(grid, [row, col], newValue) {
  let updatedGrid = structuredClone(grid);
  const startValue = grid[row][col];

  updatedGrid[row][col] = newValue;

  if (row - 1 >= 0 && grid[row - 1][col] === startValue) {
    updatedGrid = bucketFill(updatedGrid, [row - 1, col], newValue);
  }

  if (row + 1 < grid.length && grid[row + 1][col] === startValue) {
    updatedGrid = bucketFill(updatedGrid, [row + 1, col], newValue);
  }

  if (col - 1 >= 0 && grid[row][col - 1] === startValue) {
    updatedGrid = bucketFill(updatedGrid, [row, col - 1], newValue);
  }

  if (col + 1 < grid[row].length && grid[row][col + 1] === startValue) {
    updatedGrid = bucketFill(updatedGrid, [row, col + 1], newValue);
  }

  return updatedGrid;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. bucketFill([["R", "G"], ["R", "G"]], [0, 1], "B") should return [["R", "B"], ["R", "B"]].
2. bucketFill([["Y", "G", "G"], ["Y", "Y", "Y"], ["B", "Y", "R"]], [1, 2], "B") should return [["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]].
3. bucketFill([["O", "O", "P"], ["P", "O", "O"], ["P", "P", "O"]], [2, 0], "R") should return [["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]].
4. bucketFill([["T", "T", "R", "T"], ["R", "T", "R", "T"], ["R", "T", "R", "T"], ["T", "T", "T", "T"]], [0, 3], "Y") should return [["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]].
5. bucketFill([["G", "B", "G", "B"], ["R", "B", "B", "G"], ["B", "G", "B", "R"], ["B", "G", "G", "B"]], [2, 2], "G") should return [["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]].
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