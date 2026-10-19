function blendWords(word1, word2) {

  return word1.slice(0, word1.length / 2) + word2.slice(word2.length / 2);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. blendWords("turtle", "toucan") should return "turcan".
2. blendWords("chipmunk", "flamingo") should return "chipingo".
3. blendWords("falcon", "pelican") should return "falican".
4. blendWords("hyena", "iguana") should return "hyana".
5. blendWords("scorpion", "gorilla") should return "scorilla".
6. blendWords("platypus", "wolverine") should return "platerine".
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