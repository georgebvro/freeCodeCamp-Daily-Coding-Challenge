function isCircularPrime(n) {
  const s = String(n);
  let isCircularPrime = true;

  for (let i = 0; i < s.length; ++i) {
    const rotation = s.slice(i) + s.slice(0, i);
    
    for (let maybeFactor = 2; maybeFactor <= rotation / 2; ++maybeFactor) {
      if (rotation % maybeFactor === 0) {
        isCircularPrime = false;
        break;
      }
    }
  }

  return isCircularPrime;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isCircularPrime(197) should return true.
2. isCircularPrime(23) should return false.
3. isCircularPrime(13) should return true.
4. isCircularPrime(89) should return false.
5. isCircularPrime(1193) should return true.
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