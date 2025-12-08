function rotate(matrix) {
  const rotatedMatrix = [];
  const numberOfRows = matrix.length;
  const numberOfColumns = matrix[0].length;

  for (let j = 0; j < numberOfColumns; j ++) {
    rotatedMatrix.push([]);

    for (let i = numberOfRows - 1; i >= 0; i --) {
      console.log(`Processing matrix[${i}][${j}]: ${matrix[i][j]}`);
      rotatedMatrix[j].push(matrix[i][j]);
    }
  }

  return rotatedMatrix;
}

console.log(rotate([[1]]));
console.log(rotate([[1, 2], [3, 4]]));
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]));

console.log(rotate([[1, 2, 3], [4, 5, 6]]));
console.log(rotate([[1, 2], [3, 4], [5, 6]]));

// --- TEST SUITE ---

const testsText = `
1. rotate([[1]]) should return [[1]].
2. rotate([[1, 2], [3, 4]]) should return [[3, 1], [4, 2]].
3. rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [[7, 4, 1], [8, 5, 2], [9, 6, 3]].
4. rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]) should return [[0, 1, 0], [0, 0, 1], [0, 1, 0]].
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
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

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);