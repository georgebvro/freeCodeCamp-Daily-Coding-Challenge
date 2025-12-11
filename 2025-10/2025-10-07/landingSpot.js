function findLandingSpot(matrix) {
  let safestLandingSpot;
  let smallestDanger;

  for (let i in matrix) {
    for (let j in matrix[i]) {
      if (matrix[i][j] === 0) {
        i = parseInt(i);
        j = parseInt(j);
        let currentDanger = 0;

        if (matrix[i - 1]) currentDanger += matrix[i - 1][j];
        if (matrix[i + 1]) currentDanger += matrix[i + 1][j];
        if (matrix[i][j - 1]) currentDanger += matrix[i][j - 1];
        if (matrix[i][j + 1]) currentDanger += matrix[i][j + 1];

        if (currentDanger < smallestDanger || !smallestDanger) {
          smallestDanger = currentDanger;
          safestLandingSpot = [i, j];
        }
      }
    }
  }
  
  return safestLandingSpot;
}

console.log(findLandingSpot([[1, 0], [2, 0]]));
console.log(findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]));
console.log(findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]));
console.log(findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]));

// --- TEST SUITE ---

const testsText = `
1. findLandingSpot([[1, 0], [2, 0]]) should return [0, 1].
2. findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]) should return [1, 1].
3. findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]) should return [2, 2].
4. findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]) should return [2, 1].
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