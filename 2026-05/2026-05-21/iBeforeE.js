function iBeforeE(sentence) {

  return sentence
    .replaceAll(/(?<!c)ei/g, "ie")
    .replaceAll(/(?<=c)ie/g, "ei");
}

// --- TEST SUITE ---

const testsText = String.raw`
1. iBeforeE("beleive") should return "believe".
2. iBeforeE("recieve") should return "receive".
3. iBeforeE("we recieved a breif") should return "we received a brief".
4. iBeforeE("she beleived the friendly niece could percieve the greif") should return "she believed the friendly niece could perceive the grief".
5. iBeforeE("we recieved relief after the theif gave us a breif piece of feirce deceit") should return "we received relief after the thief gave us a brief piece of fierce deceit".
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