function gameOfLife(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const nextState = structuredClone(grid);
  
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      let neighborSum = 
          cellState(i - 1, j - 1, rows, cols, grid)
        + cellState(i - 1, j    , rows, cols, grid)
        + cellState(i - 1, j + 1, rows, cols, grid)
        + cellState(i    , j - 1, rows, cols, grid)
        + cellState(i    , j + 1, rows, cols, grid)
        + cellState(i + 1, j - 1, rows, cols, grid)
        + cellState(i + 1, j    , rows, cols, grid)
        + cellState(i + 1, j + 1, rows, cols, grid)

      if (grid[i][j] === 1 && (neighborSum < 2 || 3 < neighborSum))
        nextState[i][j] = 0;

      if (grid[i][j] === 0 && neighborSum === 3)
        nextState[i][j] = 1;
    }
  }

  return nextState;
}

const cellState = (rowIndex, colIndex, rows, cols, grid) => {
  if (0 <= rowIndex && rowIndex < rows && 0 <= colIndex && colIndex < cols)
    return grid[rowIndex][colIndex];
  else
    return 0;
}

// --- TEST SUITE ---

const testsText = `
1. gameOfLife([[0, 1, 0], [0, 1, 1], [1, 1, 0]]) should return [[0, 1, 1], [0, 0, 1], [1, 1, 1]].
2. gameOfLife([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]]) should return [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]].
3. gameOfLife([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) should return [[0, 0, 0], [0, 1, 0], [0, 0, 0]].
4. gameOfLife([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]]) should return [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]].
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
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