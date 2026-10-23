function findSignal(grid) {
  const potentialLocations = [];

  const checkLocation = (i, j) => 
    0 <= i && i < grid.length 
    && 0 <= j && j < grid[i].length 
    && grid[i][j] === 0 
    ? true
    : false;

  for (let i in grid) {
    i = Number(i);
    for (let j in grid[i]) {
      j = Number(j);

      if (grid[i][j] !== 0) {
        const newTower = [];

        if (checkLocation(i, j - grid[i][j])) {
          newTower.push([i, j - grid[i][j]]);
        }

        if (checkLocation(i, j + grid[i][j])) {
          newTower.push([i, j + grid[i][j]]);
        }

        if (checkLocation(i - grid[i][j], j)) {
          newTower.push([i - grid[i][j], j]);
        }

        if (checkLocation(i + grid[i][j], j)) {
          newTower.push([i + grid[i][j], j]);
        }

        if (checkLocation(i - grid[i][j], j - grid[i][j])) {
          newTower.push([i - grid[i][j], j - grid[i][j]]);
        }

        if (checkLocation(i + grid[i][j], j + grid[i][j])) {
          newTower.push([i + grid[i][j], j + grid[i][j]]);
        }

        if (checkLocation(i + grid[i][j], j - grid[i][j])) {
          newTower.push([i + grid[i][j], j - grid[i][j]]);
        }

        if (checkLocation(i - grid[i][j], j + grid[i][j])) {
          newTower.push([i - grid[i][j], j + grid[i][j]]);
        }

        potentialLocations.push(new Set(newTower.map(coords => JSON.stringify(coords))));
      }
    }
  }

  const { row, column } = /^\[(?<row>\d+),(?<column>\d+)]$/
    .exec(potentialLocations
      .reduce((intersect, set) => intersect.intersection(set))
      .values()
      .next()
      .value)
    .groups;

  return [Number(row), Number(column)];
}

// --- TEST SUITE ---

const testsText = String.raw`
1. findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]) should return [1, 2].
2. findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]) should return [2, 1].
3. findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]) should return [2, 2].
4. findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]) should return [3, 4].
5. findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]) should return [3, 3].
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