// Solution that calculates all the elements of a row in the triangle
function pascalRow(n) {
  let previousRow = [1];

  if (n === 1)
    return previousRow;
  
  let currentRow = [1, 1];
  
  if (n === 2)
    return currentRow;

  while (currentRow.length < n) {
    previousRow = [...currentRow];
    currentRow = [1];
    
    for (let i = 1; i < previousRow.length; ++i) {
      currentRow.push(previousRow[i - 1] + previousRow[i]);
    }
    
    currentRow.push(1);
  }

  return currentRow;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. pascalRow(5) should return [1, 4, 6, 4, 1].
2. pascalRow(3) should return [1, 2, 1].
3. pascalRow(1) should return [1].
4. pascalRow(10) should return [1, 9, 36, 84, 126, 126, 84, 36, 9, 1].
5. pascalRow(15) should return [1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1].
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