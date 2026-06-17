function isInCrossword(char) {
  const GRID = [
    [0, 1, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
  ];
  let gridAllPossibleNumbers = [];

  for (const row of GRID) {
    gridAllPossibleNumbers = gridAllPossibleNumbers.concat([row.join(""), row.toReversed().join("")]);
  }

  for (let j = 0; j < GRID[0].length; ++j) {
    let number = "";
    let reversedNumber = "";

    for (const row of GRID) {
      number += row[j];
      reversedNumber = row[j] + reversedNumber;
    }

    gridAllPossibleNumbers = gridAllPossibleNumbers.concat([number, reversedNumber]);
  }

  return gridAllPossibleNumbers.includes(char.charCodeAt(0).toString(2).padStart(8, 0));
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isInCrossword("I") should return true.
2. isInCrossword("D") should return true.
3. isInCrossword("0") should return true.
4. isInCrossword("u") should return true.
5. isInCrossword("Y") should return false.
6. isInCrossword("p") should return false.
7. isInCrossword("1") should return false.
8. isInCrossword("Q") should return false.
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