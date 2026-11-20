function bucketFill(grid, targetColor) {
  let updatedGrid = structuredClone(grid);

  const findCellToChange = (colorToCheck) => {
    for (const i in updatedGrid) {
      for (const j in updatedGrid[i]) {
        if (updatedGrid[i][j] !== colorToCheck) {
          return [Number(i), Number(j)];
        }
      }
    }
  }

  const paint = ([row, col], color) => {
    const originalColor = updatedGrid[row][col];
    updatedGrid[row][col] = color;

    if (row - 1 >= 0 && updatedGrid[row - 1][col] === originalColor) {
      paint([row - 1, col], color);
    }

    if (row + 1 < updatedGrid.length && updatedGrid[row + 1][col] === originalColor) {
      paint([row + 1, col], color);
    }

    if (col - 1 >= 0 && updatedGrid[row][col - 1] === originalColor) {
      paint([row, col - 1], color);
    }

    if (col + 1 < updatedGrid[row].length && updatedGrid[row][col + 1] === originalColor) {
      paint([row, col + 1], color);
    }
  }

  let startCellToChange;
  let clicks = 0;

  do {
    startCellToChange = findCellToChange(targetColor);
    
    if (startCellToChange) {
      paint(startCellToChange, targetColor);
      ++clicks;
    }
    
  } while (startCellToChange);

  return clicks;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. bucketFill([["R", "R"], ["R", "R"]], "G") should return 1.
2. bucketFill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B") should return 0.
3. bucketFill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R") should return 3.
4. bucketFill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P") should return 5.
5. bucketFill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y") should return 12.
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