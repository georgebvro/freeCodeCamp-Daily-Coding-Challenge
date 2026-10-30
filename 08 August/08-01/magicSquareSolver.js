function solveMagicSquare(grid) {
  let globalLineSum;

  const checkLineSum = line => {
    if (line.every(number => number !== 0)) {
      const currentLineSum = line.reduce((sum, number) => sum + number);

      if (globalLineSum === undefined) {
        globalLineSum = currentLineSum;
      } else {
        if (globalLineSum !== currentLineSum) {
          return "impossible";
        }
      }
    }
  }

  for (const row of grid) {
    if (checkLineSum(row) === "impossible") {
      return "impossible";
    }
  }

  for (let j = 0; j < grid[0].length; ++j) {
    const column = [];

    for (const i in grid) {
      column.push(grid[i][j]);
    }

    if (checkLineSum(column) === "impossible") {
      return "impossible";
    }
  }

  for (const row of grid) {
    if (row.some(number => number === 0)) {
      return globalLineSum - row.reduce((sum, number) => sum + number);
    }
  }
}

// --- TEST SUITE ---

const testsText = String.raw`
1. solveMagicSquare([[2, 7, 6], [9, 0, 1], [4, 3, 8]]) should return 5.
2. solveMagicSquare([[0, 14, 12], [18, 10, 2], [8, 6, 16]]) should return 4.
3. solveMagicSquare([[12, 17, 16], [19, 0, 10], [14, 13, 18]]) should return "impossible".
4. solveMagicSquare([[15, 35, 31], [43, 27, 11], [23, 19, 0]]) should return 39.
5. solveMagicSquare([[26, 41, 14], [47, 35, 0], [32, 29, 44]]) should return "impossible".
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