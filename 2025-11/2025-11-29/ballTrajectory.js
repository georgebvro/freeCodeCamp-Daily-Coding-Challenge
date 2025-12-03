function getNextLocation(matrix) {
  let previousLocation, currentLocation;

  for (let i in matrix) {
    i = parseInt(i);
    const previousLocationIndex = matrix[i].findIndex(value => value === 1);
    const currentLocationIndex = matrix[i].findIndex(value => value === 2);

    if (previousLocationIndex !== -1)
      previousLocation = [i, previousLocationIndex];

    if (currentLocationIndex !== -1)
      currentLocation = [i, currentLocationIndex];
    
    if (previousLocation && currentLocation)
      break;
  }

  const horizontalDirection = currentLocation[1] - previousLocation[1];
  const verticalDirection = currentLocation[0] - previousLocation[0];

  let nextHorizontalPosition = currentLocation[1] + horizontalDirection;
  let nextVerticalPosition = currentLocation[0] + verticalDirection;

  if (nextHorizontalPosition >= matrix[0].length)
    nextHorizontalPosition -= 2;

  else if (nextHorizontalPosition < 0)
    nextHorizontalPosition += 2;

  if (nextVerticalPosition >= matrix.length)
    nextVerticalPosition -= 2;

  else if (nextVerticalPosition < 0)
    nextVerticalPosition += 2;

  return [nextVerticalPosition, nextHorizontalPosition];  
}

// --- TEST SUITE ---

const testsText = `
1. getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]) should return [2, 3].
2. getNextLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]) should return [3, 0].
3. getNextLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]) should return [1, 2].
4. getNextLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]) should return [1, 1].
5. getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]) should return [2, 2].
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

  for (const index in a)
    if (a[index] !== b[index])
      return false;
  
  return true;
}

runTests(testData);