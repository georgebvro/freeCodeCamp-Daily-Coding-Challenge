function parseInlineCode(markdown) {

  return markdown.replace(/`(?<inlineCode>.+?)`/g, "<code>$1</code>");
}

console.log(parseInlineCode("Use `let` to declare the variable."));
console.log(parseInlineCode("Use `let` or `const` to declare a variable."));
console.log(parseInlineCode("Run `npm install` then `npm start`."));

// --- TEST SUITE ---

const bt = "`";
const testsText = String.raw`
1. parseInlineCode("Use ${bt}let${bt} to declare the variable.") should return "Use <code>let</code> to declare the variable.".
2. parseInlineCode("Use ${bt}let${bt} or ${bt}const${bt} to declare a variable.") should return "Use <code>let</code> or <code>const</code> to declare a variable.".
3. parseInlineCode("Run ${bt}npm install${bt} then ${bt}npm start${bt}.") should return "Run <code>npm install</code> then <code>npm start</code>.".
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