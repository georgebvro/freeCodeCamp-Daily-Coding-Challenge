function decodeMorse(code) {
  const MORSE = {
    '.-': "A",
    '-...': "B",
    '-.-.': "C",
    '-..': "D",
    '.': "E",
    '..-.': "F",
    '--.': "G",
    '....': "H",
    '..': "I",
    '.---': "J",
    '-.-': "K",
    '.-..': "L",
    '--': "M",
    '-.': "N",
    '---': "O",
    '.--.': "P",
    '--.-': "Q",
    '.-.': "R",
    '...': "S",
    '-': "T",
    '..-': "U",
    '...-': "V",
    '.--': "W",
    '-..-': "X",
    '-.--': "Y",
    '--..': "Z"
  };

  return code
    .split("   ")
    .map(word => 
      word
        .split(" ")
        .map(letterCode => MORSE[letterCode])
        .join(""))
    .join(" ");
}

// --- TEST SUITE ---

const testsText = String.raw`
1. decodeMorse("--..") should return "Z".
2. decodeMorse("... --- ...") should return "SOS".
3. decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--.") should return "FREECODECAMP".
4. decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..") should return "HELLO WORLD".
5. decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.") should return "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG".
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