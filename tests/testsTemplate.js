

// --- TEST SUITE ---

const testsText = String.raw`
1. parseUrlQuery("https://example.com/search?name=Alice&age=30") should return {"name": "Alice", "age": "30"}
2. parseUrlQuery("https://freecodecamp.org/learn?skill=programming&language=python") should return {"skill": "programming", "language": "python"}
3. parseUrlQuery("https://freecodecamp.org/items?category=books&sort=asc&page=2") should return {"category": "books", "sort": "asc", "page": "2"}
4. parseUrlQuery("https://example.com?redirect=freecodecamp.org/learn&when=now") should return {"redirect": "freecodecamp.org/learn", "when": "now"}
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