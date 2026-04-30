function getBrowserHistory(commands) {
  let history = [];
  let currentPageIndex = -1;

  commands.forEach(command => {
    switch (command) {
      case "Back":
        currentPageIndex = currentPageIndex > 0 ? currentPageIndex - 1 : currentPageIndex;
        break;
      
      case "Forward":
        currentPageIndex = currentPageIndex < history.length - 1 ? currentPageIndex + 1 : currentPageIndex;
        break;

      default:
        history = history.slice(0, ++currentPageIndex)
        history.push(command);
    }
  })

  return [history, currentPageIndex];
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getBrowserHistory(["freecodecamp.org", "freecodecamp.org/learn", "Back"]) should return [["freecodecamp.org", "freecodecamp.org/learn"], 0].
2. getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog"]) should return [["example.com", "example.com/about", "example.com/contact", "example.com/blog"], 3].
3. getBrowserHistory(["example.com", "example.com/about", "Back", "example.com/contact",  "example.com/blog", "Back", "Back", "Forward"]) should return [["example.com", "example.com/contact", "example.com/blog"], 1].
4. getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog", "Back", "Back", "Forward", "freecodecamp.org"]) should return [["example.com", "example.com/about", "example.com/contact", "freecodecamp.org"], 3].
5. getBrowserHistory(["example.com", "example.com/about", "Back", "Back"]) should return [["example.com", "example.com/about"], 0].
6. getBrowserHistory(["example.com", "example.com/about", "Forward"]) should return [["example.com", "example.com/about"], 1].
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