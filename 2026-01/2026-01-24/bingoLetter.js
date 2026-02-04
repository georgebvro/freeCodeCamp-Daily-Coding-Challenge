function getBingoLetter(n) {

  return [
    new BingoRange("B", 1, 15),
    new BingoRange("I", 16, 30),
    new BingoRange("N", 31, 45),
    new BingoRange("G", 46, 60),
    new BingoRange("O", 61, 75)
  ]
  .find(bingoRange => bingoRange.min <= n && n <= bingoRange.max)
  .letter;
}

class BingoRange {
  constructor(letter, min, max) {
    this.letter = letter;
    this.min = min;
    this.max = max;
  }
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getBingoLetter(75) should return "O".
2. getBingoLetter(54) should return "G".
3. getBingoLetter(25) should return "I".
4. getBingoLetter(38) should return "N".
5. getBingoLetter(11) should return "B".
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