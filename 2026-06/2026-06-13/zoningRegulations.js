function getZoneViolations(grid) {
  const ZONING_RULES = {
    "i": ["R", "I"],
    "A": ["C"],
    "R": ["i", "C"],
    "I": ["i"],
    "C": ["R", "A"],
    "": ["no restrictions"]
  };
  const violations = [];

  grid.forEach((row, i) => {
    row.forEach((building, j) => {
      if (ZONING_RULES[building].includes(row[j - 1]) 
        || ZONING_RULES[building].includes(row[j + 1]) 
        || (grid[i - 1] && ZONING_RULES[building].includes(grid[i - 1][j]))
        || (grid[i + 1] && ZONING_RULES[building].includes(grid[i + 1][j]))
      ) {
        violations.push([i, j]);
      }
    })
  })

  return violations;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getZoneViolations([["R", "C"], ["", "C"]]) should return [[0, 0], [0, 1]].
2. getZoneViolations([["", "i"], ["", "R"], ["R", "I"]]) should return [[0, 1], [1, 1]].
3. getZoneViolations([["A", "i", "C"], ["A", "", "C"], ["R", "R", "I"]]) should return [].
4. getZoneViolations([["R", "R", "C", "R", "R"], ["R", "I", "C", "", "A"], ["R", "R", "", "i", "A"]]) should return [[0, 1], [0, 2], [0, 3]].
5. getZoneViolations([["R", "A", "A", "", "i", "i"], ["R", "I", "", "C", "i", "i"], ["R", "", "C", "C", "A", "A"], ["R", "R", "C", "I", "R", "R"]]) should return [[2, 3], [2, 4], [3, 1], [3, 2]].
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