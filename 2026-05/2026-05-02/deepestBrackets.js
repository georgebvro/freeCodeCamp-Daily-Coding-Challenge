function getDeepestBrackets(str) {
  let level = 0,
      nestedText = "",
      deepestNest = { level: null, text: undefined };

  for (const letter of str) {
    if (/[([{]/.exec(letter)) {
      ++level;
      nestedText = "";
      continue;
    }

    if (/[)\]}]/.exec(letter)) {
      if (level > deepestNest.level) {
        deepestNest = { level: level, text: nestedText };
      }
      
      --level;
      continue;
    }

    nestedText += letter;
  }

  return deepestNest.text;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getDeepestBrackets("(hello (world))") should return "world".
2. getDeepestBrackets("[outer [inner] outer]") should return "inner".
3. getDeepestBrackets("{a{b}c{d{e}f}g}") should return "e".
4. getDeepestBrackets("[the {quick (brown [fox] jumped) over (the) lazy} dog]") should return "fox".
5. getDeepestBrackets("f[(r)e{e}C{o[(d){e(C)}a]m}]p") should return "C".
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