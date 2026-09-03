function parseFrontmatter(str) {
  const matches = [...str.matchAll(/(?<=\n)(?<key>.+?): (?<value>.+?)(?=\n)/g)];
  const object = {};

  for (const match of matches) {
    let { key, value } = match.groups;

    if (!isNaN(value)) {
      object[key] = Number(value);
    } else if (value === "true") {
      object[key] = true;
    } else if (value === "false") {
      object[key] = false;
    } else {
      object[key] = value;
    }
  }

  return object;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. parseFrontmatter("---\ntitle: My Post\ndraft: false\nviews: 100\n---") should return { title: "My Post", draft: false, views: 100 }.
2. parseFrontmatter("---\nid: 6a174db57256a112f932195c\ntitle: My Book\nlocale: en\nwordCount: 10000\npublished: false\n---") should return { id: "6a174db57256a112f932195c", title: "My Book", locale: "en", wordCount: 10000, published: false }.
3. parseFrontmatter("---\nversion: 1.0.0\nurl: https://example.com\nprivate: true\n---") should return { version: "1.0.0", url: "https://example.com", private: true }.
4. parseFrontmatter("---\nrating: 4.5\nprice: 9.99\n---") should return { rating: 4.5, price: 9.99 }.
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