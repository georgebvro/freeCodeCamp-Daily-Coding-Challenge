function getLongestSubstring(str) {
  let longestSubstring = "";

  for (let substringLength = 1; substringLength < str.length; ++substringLength) {

    for (let index1 = 0; index1 < str.length - substringLength; ++index1) {
      const substring1 = str.slice(index1, index1 + substringLength);

      for (let index2 = index1 + 1; index2 <= str.length - substringLength; ++index2) {
        const substring2 = str.slice(index2, index2 + substringLength);

        if (substring1 === substring2 && substring1.length > longestSubstring.length) {
          longestSubstring = substring1;
          break;
        }
      }
    }
  }

  return longestSubstring;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getLongestSubstring("abracadabra") should return "abra".
2. getLongestSubstring("hello world hello") should return "hello".
3. getLongestSubstring("mississippi") should return "issi".
4. getLongestSubstring("ha ha ha ha ha ha ha") should return "ha ha ha ha ha ha".
5. getLongestSubstring("the quick brown fox jumped over the lazy dog that the quick brown fox jumped over") should return "the quick brown fox jumped over".
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