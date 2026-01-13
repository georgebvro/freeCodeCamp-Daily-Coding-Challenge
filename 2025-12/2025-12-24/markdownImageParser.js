function parseImage(markdown) {
  const { altText, imageUrl } = /!\[(?<altText>.*)]\((?<imageUrl>[^ ]*).*\)/.exec(markdown).groups;

  return `<img src="${imageUrl}" alt="${altText}">`;
}

console.log(parseImage("![Cute cat](cat.png)"));
console.log(parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)"));
console.log(parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)"));

console.log(parseImage("![This is an alt text.](/image/Markdown-mark.svg 'This is a sample image.')"));

// --- TEST SUITE ---

const testsText = `
1. parseImage("![Cute cat](cat.png)") should return '<img src="cat.png" alt="Cute cat">'.
2. parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)") should return '<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">'.
3. parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)") should return '<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">'.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
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