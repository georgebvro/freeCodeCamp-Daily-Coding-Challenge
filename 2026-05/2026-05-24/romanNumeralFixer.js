function fixNumerals(str) {
  const ROMAN_NUMERALS = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  const arabicNumber = str
    .split("")
    .reduce((acc, letter) => acc + ROMAN_NUMERALS[letter], 0);

  const thousands = Math.floor(arabicNumber / 1000);
  const hundreds  = Math.floor((arabicNumber - thousands * 1000) / 100);
  const tens      = Math.floor((arabicNumber - thousands * 1000 - hundreds * 100) / 10);
  const units     = arabicNumber - thousands * 1000 - hundreds * 100 - tens * 10;

  const buildPartialRomanNumeral = (number) => {
    const letters = number < 10 ? ["I", "V", "X"] : number < 100 ? ["X", "L", "C"] : ["C", "D", "M"];
    const n = String(number)[0];
    let partialRomanNumeral = "";

    if (n <= 3) {
      partialRomanNumeral += letters[0].repeat(n);
    } else if (n == 4) {
      partialRomanNumeral += letters[0] + letters[1];
    } else if (n <= 8) {
      partialRomanNumeral += letters[1] + letters[0].repeat(n - 5);
    } else {
      partialRomanNumeral += letters[0] + letters[2];
    }

    return partialRomanNumeral;
  }

  return "M".repeat(thousands) 
    + buildPartialRomanNumeral(hundreds * 100) 
    + buildPartialRomanNumeral(tens * 10) 
    + buildPartialRomanNumeral(units);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. fixNumerals("XIIIII") should return "XV".
2. fixNumerals("IIIILX") should return "LXIV".
3. fixNumerals("XXVVVIIIII") should return "XL".
4. fixNumerals("MDCCLXXXXVIIII") should return "MDCCXCIX".
5. fixNumerals("IIIIVVVVXXXXLLLLCCDD") should return "MCDLXIV".
6. fixNumerals("ILCDMIVDIIXLCVCXDL") should return "MMCMLXXXIV".
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