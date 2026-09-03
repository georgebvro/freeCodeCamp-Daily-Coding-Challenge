function nthFibonacci(n) {
  let prevPrevNumber = 0;
  let prevNumber = 1;
  let currentNumber = prevPrevNumber + prevNumber;
  let numbersGenerated = 2;

  while (numbersGenerated < n) {
    currentNumber = prevPrevNumber + prevNumber;
    
    prevPrevNumber = prevNumber;
    prevNumber = currentNumber;
    
    ++numbersGenerated;
  }

  return currentNumber;
}

console.log(nthFibonacci(4));
console.log(nthFibonacci(10));
console.log(nthFibonacci(15));
console.log(nthFibonacci(40));
console.log(nthFibonacci(75));

console.log(nthFibonacci(2));
console.log(nthFibonacci(3));

// --- TEST SUITE ---

const testsText = String.raw`
1. nthFibonacci(4) should return 2.
2. nthFibonacci(10) should return 34.
3. nthFibonacci(15) should return 377.
4. nthFibonacci(40) should return 63245986.
5. nthFibonacci(75) should return 1304969544928657.
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