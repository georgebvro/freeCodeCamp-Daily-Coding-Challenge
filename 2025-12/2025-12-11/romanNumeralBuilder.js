function toRoman(num) {
  let romanNumeral = "";

  const thousands = Math.floor(num / 1000);
  romanNumeral += "M".repeat(thousands);

  const hundreds = Math.floor((num - thousands * 1000) / 100);
  if (hundreds <= 3)
    romanNumeral += "C".repeat(hundreds);
  else if (hundreds === 4)
    romanNumeral += "CD";
  else if (hundreds <= 8)
    romanNumeral += "D" + "C".repeat(hundreds - 5);
  else
    romanNumeral += "CM";

  const tens = Math.floor((num - thousands * 1000 - hundreds * 100) / 10);
  if (tens <= 3)
    romanNumeral += "X".repeat(tens);
  else if (tens === 4)
    romanNumeral += "XL";
  else if (tens <= 8)
    romanNumeral += "L" + "X".repeat(tens - 5);
  else
    romanNumeral += "XC";

  const units = num - thousands * 1000 - hundreds * 100 - tens * 10;
  if (units <= 3)
    romanNumeral += "I".repeat(units);
  else if (units === 4)
    romanNumeral += "IV";
  else if (units <= 8)
    romanNumeral += "V" + "I".repeat(units - 5);
  else
    romanNumeral += "IX";

  return romanNumeral;
}

console.log(toRoman(18));
console.log(toRoman(19));
console.log(toRoman(1464));
console.log(toRoman(2025));
console.log(toRoman(3999));

console.log(toRoman(3489));

// --- TEST SUITE ---

const testsText = `
1. toRoman(18) should return "XVIII".
2. toRoman(19) should return "XIX".
3. toRoman(1464) should return "MCDLXIV".
4. toRoman(2025) should return "MMXXV".
5. toRoman(3999) should return "MMMCMXCIX".
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

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);