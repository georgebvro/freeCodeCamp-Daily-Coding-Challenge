function parseUnorderedList(markdown) {

  return "<ul>" 
    + [...markdown
      .matchAll(/[*-][ \t]+(?<listItemText>.*?)(\n|$)/g)
      .map(match => `<li>${match.groups.listItemText}</li>`)
      ]
      .join("")
    + "</ul>";
}

console.log(parseUnorderedList("- Item A\n- Item B"));
console.log(parseUnorderedList("-  JavaScript\n-  Python"));
console.log(parseUnorderedList("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla"));
console.log(parseUnorderedList("- A-1\n- A-2\n- B-1"));

// --- TEST SUITE ---

const testsText = String.raw`
1. parseUnorderedList("- Item A\n- Item B") should return "<ul><li>Item A</li><li>Item B</li></ul>".
2. parseUnorderedList("-  JavaScript\n-  Python") should return "<ul><li>JavaScript</li><li>Python</li></ul>".
3. parseUnorderedList("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla") should return "<ul><li>2 C Flour</li><li>1/2 C Sugar</li><li>1 Tsp Vanilla</li></ul>".
4. parseUnorderedList("- A-1\n- A-2\n- B-1") should return "<ul><li>A-1</li><li>A-2</li><li>B-1</li></ul>".
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