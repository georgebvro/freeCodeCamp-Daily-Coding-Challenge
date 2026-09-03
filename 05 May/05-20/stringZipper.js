function zipStrings(a, b) {
  const smallestLength = Math.min(a.length, b.length);
  let zipped = "";

  for (const i in a) {
    zipped += a[i] + b[i];
  }

  return zipped + a.slice(smallestLength) + b.slice(smallestLength);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. zipStrings("abc", "123") should return "a1b2c3".
2. zipStrings("acegikmoqsuwy", "bdfhjlnprtvxz") should return "abcdefghijklmnopqrstuvwxyz".
3. zipStrings("day", "night") should return "dnaiyght".
4. zipStrings("python", "javascript") should return "pjyatvhaosncript".
5. zipStrings("feCdCm", "reoeap") should return "freeCodeCamp".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("——————————————————————————",
            "\n🧪Starting Verification...",
            "\n——————————————————————————");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(`(${test.output})`);

    if (JSON.stringify(functionCallOutput) === JSON.stringify(testOutput)) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${JSON.stringify(testOutput)}\nGot: ${JSON.stringify(functionCallOutput)}`);

      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

runTests(testData);