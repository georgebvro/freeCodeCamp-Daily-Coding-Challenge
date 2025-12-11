function tribonacciSequence(startSequence, length) {
  const tribonacci = startSequence;
  
  while (tribonacci.length < length) {
    tribonacci.push(tribonacci.slice(-3).reduce((accumulator, currentValue) => {
        return accumulator += currentValue;
    }))
  }
  
  return tribonacci.slice(0, length);
}

console.log(tribonacciSequence([0, 0, 1], 20));
console.log(tribonacciSequence([21, 32, 43], 1));
console.log(tribonacciSequence([0, 0, 1], 0));
console.log(tribonacciSequence([10, 20, 30], 2));
console.log(tribonacciSequence([10, 20, 30], 3));
console.log(tribonacciSequence([123, 456, 789], 8));

// --- TEST SUITE ---

const testsText = `
1. tribonacciSequence([0, 0, 1], 20) should return [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513].
2. tribonacciSequence([21, 32, 43], 1) should return [21].
3. tribonacciSequence([0, 0, 1], 0) should return [].
4. tribonacciSequence([10, 20, 30], 2) should return [10, 20].
5. tribonacciSequence([10, 20, 30], 3) should return [10, 20, 30].
6. tribonacciSequence([123, 456, 789], 8) should return [123, 456, 789, 1368, 2613, 4770, 8751, 16134].
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