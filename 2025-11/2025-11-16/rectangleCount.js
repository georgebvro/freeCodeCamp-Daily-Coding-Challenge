function countRectangles(width, height) {
/* Solution 1, step-by-step
  let rectangleCount = 0;

  for (let h = 1; h <= height; h ++)
    for (let w = 1; w <= width; w ++)
      rectangleCount += (1 + width - w) * (1 + height - h);

  return rectangleCount;
*/

// Solution 2, more direct and using recursion
  return sumUpToN(width) * sumUpToN(height);
}

const sumUpToN = n => n === 1 ? 1 : n + sumUpToN(n - 1);

console.log(countRectangles(1, 3));
console.log(countRectangles(3, 2));
console.log(countRectangles(1, 2));
console.log(countRectangles(5, 4));
console.log(countRectangles(11, 19));

console.log(countRectangles(2, 2));
console.log(countRectangles(1, 1));
console.log(countRectangles(3, 4));

// --- TEST SUITE ---

const testsText = `
1. countRectangles(1, 3) should return 6.
2. countRectangles(3, 2) should return 18.
3. countRectangles(1, 2) should return 3.
4. countRectangles(5, 4) should return 150.
5. countRectangles(11, 19) should return 12540.
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