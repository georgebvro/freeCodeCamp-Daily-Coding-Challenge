function letterDistance(str1, str2) {
  const ALPHABET_LENGTH = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

  return str1
    .split("")
    .reduce((sum, letter, index) => {
      const distance = Math.abs(letter.charCodeAt(0) - str2[index].charCodeAt(0));
      
      return sum + Math.min(distance, ALPHABET_LENGTH - distance);
    }, 0);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. letterDistance("abc", "bcd") should return 3.
2. letterDistance("abc", "xyz") should return 9.
3. letterDistance("encrypt", "decrypt") should return 10.
4. letterDistance("algorithm", "codeblock") should return 43.
5. letterDistance("lobster", "penguin") should return 47.
6. letterDistance("alligator", "crocodile") should return 55.
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