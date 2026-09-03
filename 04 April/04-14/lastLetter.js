function getLastLetter(str) {
  const lettersArray = str
    .replaceAll(/[^A-Z]/gi, "")
    .split("");
  let highestCharCode = -Infinity;
  let lastInTheAlphabet;

  lettersArray.forEach(letter => {
    const currentLetterCharCode = letter.toUpperCase().charCodeAt(0);

    if (currentLetterCharCode > highestCharCode) {
      lastInTheAlphabet = letter;
      highestCharCode = currentLetterCharCode;
    }
  });

  return lastInTheAlphabet;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getLastLetter("world") should return "w".
2. getLastLetter("Hello World") should return "W".
3. getLastLetter("The quick brown fox jumped over the lazy dog.") should return "z".
4. getLastLetter("HeLl0") should return "L".
5. getLastLetter("!#$ er@R asd fT.,> 2t0e9") should return "T".
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
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

runTests(testData);