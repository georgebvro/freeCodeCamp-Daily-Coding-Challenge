function isMirrorImage(str1, str2) {
  const SYMMETRIC_CHARACTERS = ["W", "T", "Y", "U", "I", "O", "H", "A", "X", "V", "M", "w", "o", "x", "v", "0", "8", "=", "+", ":", "|", "-", "_", "*", "^", "!", ".", " "];
  const MIRRORED_PAIRS = {
    "[": "]",
    "{": "}",
    "<": ">",
    "b": "d",
    "p": "q",
    "(": ")"
  };

  const isMirrorable = str => {
    for (const character of str) {
      if (!SYMMETRIC_CHARACTERS.includes(character) && !Object.keys(MIRRORED_PAIRS).includes(character) && !Object.values(MIRRORED_PAIRS).includes(character)) {
        return false;
      }
    }

    return true;
  }

  if (!isMirrorable(str1) || !isMirrorable(str2)) {
    return false;
  }

  return str1
    .split("")
    .map(character => {
      let mirroredCharacter = character;

      for (const [char, swap] of Object.entries(MIRRORED_PAIRS)) {

        if (char === character) {
          mirroredCharacter = swap;
          break;
        }

        if (swap === character) {
          mirroredCharacter = char;
          break;
        }
      }

      return mirroredCharacter;
    })
    .reverse()
    .join("")
    === str2;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isMirrorImage("[HOW]", "[WOH]") should return true.
2. isMirrorImage("MOM", "MOM") should return true.
3. isMirrorImage("vow", "wov") should return true.
4. isMirrorImage("TIM", "TIM") should return false.
5. isMirrorImage("{WOW}", "}WOW{") should return false.
6. isMirrorImage("XXVII", "IIV%X") should return false.
7. isMirrorImage("><(((*>", "<*)))><") should return true.
8. isMirrorImage("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW") should return true.
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