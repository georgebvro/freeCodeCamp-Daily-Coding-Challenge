function duplicateCharacterCount(str1, str2) {
  let duplicateCount = 0;

  for (const character of str2) {
    if (new RegExp(character).test(str1)) {
      ++duplicateCount;
    }
  }

  return duplicateCount;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. duplicateCharacterCount("aloha", "hei") should return 1.
2. duplicateCharacterCount("jambo", "bonjour") should return 4.
3. duplicateCharacterCount("hello", "hola") should return 3.
4. duplicateCharacterCount("ola", "hej") should return 0.
5. duplicateCharacterCount("ciao", "konnichiwa") should return 5.
6. duplicateCharacterCount("merhaba", "xin chao") should return 2.
7. duplicateCharacterCount("hello world", "hello to everyone around the world") should return 26.
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