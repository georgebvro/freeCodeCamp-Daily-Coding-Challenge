function stripTags(html) {

  return html.replace(/<[^>]+>/g, "");
}

console.log(stripTags('<a href="#">Click here</a>'));
console.log(stripTags('<p class="center">Hello <b>World</b>!</p>'));
console.log(stripTags('<img src="cat.jpg" alt="Cat">'));
console.log(stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>'));

// --- TEST SUITE ---

const testsText = `
1. stripTags('<a href="#">Click here</a>') should return "Click here".
2. stripTags('<p class="center">Hello <b>World</b>!</p>') should return "Hello World!".
3. stripTags('<img src="cat.jpg" alt="Cat">') should return "".
4. stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>') should return "sectionsection".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);
    let comparison;

    if (Array.isArray(testOutput))
      comparison = arraysEqual(functionCallOutput, testOutput);
    else
      comparison = functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (const index in a)
    if (a[index] !== b[index])
      return false;
  
  return true;
}

runTests(testData);