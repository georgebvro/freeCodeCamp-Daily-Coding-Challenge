function getNextBingoNumber(n) {
  const BINGO_NUMBERS = [
    { letter: "B", min: 1, max: 15 },
    { letter: "I", min: 16, max: 30 },
    { letter: "N", min: 31, max: 45 },
    { letter: "G", min: 46, max: 60 },
    { letter: "O", min: 61, max: 75 },
  ];
  let { letter, digits } = /^(?<letter>[A-Z])(?<digits>\d{1,2})$/.exec(n).groups;
  digits = Number(digits);
  let nextBingoDigits;

  let indexOfNextBingoNumber = BINGO_NUMBERS.findIndex(bingoNumber => bingoNumber.letter === letter && bingoNumber.min <= digits && digits <= bingoNumber.max)

  if (digits + 1 > BINGO_NUMBERS[indexOfNextBingoNumber].max) {
    indexOfNextBingoNumber = indexOfNextBingoNumber < BINGO_NUMBERS.length - 1 ? indexOfNextBingoNumber + 1 : 0;
    nextBingoDigits = BINGO_NUMBERS[indexOfNextBingoNumber].min;
  } else {
    nextBingoDigits = digits + 1;
  }

  const nextBingoLetter = BINGO_NUMBERS[indexOfNextBingoNumber].letter;

  return nextBingoLetter + nextBingoDigits;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getNextBingoNumber("B10") should return "B11".
2. getNextBingoNumber("N33") should return "N34".
3. getNextBingoNumber("I30") should return "N31".
4. getNextBingoNumber("G60") should return "O61".
5. getNextBingoNumber("O75") should return "B1".
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