function chunkArray(arr, size) {
  const chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. chunkArray([1, 2, 3, 4, 5, 6], 3) should return [[1, 2, 3], [4, 5, 6]].
2. chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2) should return [[1, "two"], [3, "four"], [5, "six"], [7, "eight"]].
3. chunkArray([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]].
4. chunkArray(["a", "b", "c", "d", "e"], 1) should return [["a"], ["b"], ["c"], ["d"], ["e"]].
5. chunkArray([1, 2, 3], 5) should return [[1, 2, 3]].
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