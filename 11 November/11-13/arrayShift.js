function shiftArray(arr, n) {
// Elegant and more performant solution
  n = n % arr.length;

  return arr.slice(n).concat(arr.slice(0, n));

/* Step-by-step method
  if (n > 0)
    for (let i = 1; i <= n; i ++)
      arr.push(arr.shift());

  else if (n < 0)
    for (let i = -1; i >= n; i --)
      arr.unshift(arr.pop());

  return arr;
*/
}

console.log(shiftArray([1, 2, 3], 1));
console.log(shiftArray([1, 2, 3], -1));
console.log(shiftArray(["alpha", "bravo", "charlie"], 5));
console.log(shiftArray(["alpha", "bravo", "charlie"], -11));
console.log(shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15));

console.log(shiftArray([4, 5, 6], 0));

// --- TEST SUITE ---

const testsText = `
1. shiftArray([1, 2, 3], 1) should return [2, 3, 1].
2. shiftArray([1, 2, 3], -1) should return [3, 1, 2].
3. shiftArray(["alpha", "bravo", "charlie"], 5) should return ["charlie", "alpha", "bravo"].
4. shiftArray(["alpha", "bravo", "charlie"], -11) should return ["bravo", "charlie", "alpha"].
5. shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15) should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].
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