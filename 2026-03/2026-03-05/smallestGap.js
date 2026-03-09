function smallestGap(str) {
  let smallestGapSize = Infinity;
  let smallestGapContents = "";

  for (let i = 0; i < str.length - 1; ++i)
    for (let j = i + 1; j < str.length; ++j) {
      const gapSize = j - i - 1;
      
      if (str[i] === str[j] && gapSize < smallestGapSize) {
        smallestGapSize = gapSize;
        smallestGapContents = str.slice(i + 1, j);
        break;
      }
    }

  return smallestGapContents;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. smallestGap("ABCDAC") should return "DA".
2. smallestGap("racecar") should return "e".
3. smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4") should return "#q6e&rkf(p".
4. smallestGap("Hello World") should return "".
5. smallestGap("The quick brown fox jumps over the lazy dog.") should return "fox".
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