function fibonacciSequence(startSequence, length) {
  const fibonacci = [...startSequence];

  if (fibonacci.length >= length)
    return fibonacci.slice(0, length);

  fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);

  return fibonacciSequence(fibonacci, length);
}

console.log(fibonacciSequence([0, 1], 20));
console.log(fibonacciSequence([21, 32], 1));
console.log(fibonacciSequence([0, 1], 0));
console.log(fibonacciSequence([10, 20], 2));
console.log(fibonacciSequence([123456789, 987654321], 5));

// --- TEST SUITE ---

const testsText = `
1. fibonacciSequence([0, 1], 20) should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181].
2. fibonacciSequence([21, 32], 1) should return [21].
3. fibonacciSequence([0, 1], 0) should return [].
4. fibonacciSequence([10, 20], 2) should return [10, 20].
5. fibonacciSequence([123456789, 987654321], 5) should return [123456789, 987654321, 1111111110, 2098765431, 3209876541].
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