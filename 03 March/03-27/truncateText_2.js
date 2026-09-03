const CHARACTER_WIDTHS = {
  'ilI': 1,
  'fjrt': 2,
  'abcdeghkmnopqrstuvwxyzJL': 3,
  'ABCDEFGHKMNOPQRSTUVWXYZ': 4,
  ' ': 2,
  '.': 1
};

function truncateText(str) {

  const MAX_WIDTH = 50;
  const TRUNCATION_STRING = "...";

  let widthsArray = str
    .split("")
    .map(character => findCharacterWidth(character));

  let totalUnits = widthsArray.reduce((total, width) => total + width);

  if (totalUnits <= 50)
    return str;

  const truncationStringWidth = TRUNCATION_STRING
    .split("")
    .reduce((total, character) => total + findCharacterWidth(character), 0);

  while (totalUnits > MAX_WIDTH - truncationStringWidth) {
    totalUnits -= widthsArray.at(-1);
    widthsArray = widthsArray.slice(0, -1);
  }

  return str.slice(0, widthsArray.length) + TRUNCATION_STRING;
}

const findCharacterWidth = character => {
  for (const [characters, width] of Object.entries(CHARACTER_WIDTHS)) {
    if (characters.includes(character))
      return width;
  }
};

// --- TEST SUITE ---

const testsText = String.raw`
1. truncateText("The quick brown fox") should return "The quick brown f...".
2. truncateText("The silky smooth sloth") should return "The silky smooth s...".
3. truncateText("THE LOUD BRIGHT BIRD") should return "THE LOUD BRIG...".
4. truncateText("The fast striped zebra") should return "The fast striped z...".
5. truncateText("The big black bear") should return "The big black bear".
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