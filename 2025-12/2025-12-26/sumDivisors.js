function sumDivisors(n) {
  let sum = n === 1 ? 1 : 1 + n;

  for (let i = 2; i <= n / 2; ++i)
    if (n % i === 0)
      sum += i;

  return sum;
}

console.log(sumDivisors(6));
console.log(sumDivisors(13));
console.log(sumDivisors(28));
console.log(sumDivisors(84));
console.log(sumDivisors(549));
console.log(sumDivisors(9348));

console.log(sumDivisors(1));
console.log(sumDivisors(2));
console.log(sumDivisors(3));

// --- TEST SUITE ---

const testsText = String.raw`
1. sumDivisors(6) should return 12.
2. sumDivisors(13) should return 14.
3. sumDivisors(28) should return 56.
4. sumDivisors(84) should return 224.
5. sumDivisors(549) should return 806.
6. sumDivisors(9348) should return 23520.
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