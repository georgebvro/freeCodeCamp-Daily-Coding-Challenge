function horoscopeMatch(sign1, sign2) {
  const SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  const COMPATIBILITY = {
    0: "100%",
    1: "40%",
    2: "80%",
    3: "30%",
    4: "90%",
    5: "20%",
    6: "50%"
  };
  
  let distance = Math.abs(SIGNS.indexOf(sign1) - SIGNS.indexOf(sign2));

  return COMPATIBILITY[Math.min(distance, SIGNS.length - distance)];
}

// --- TEST SUITE ---

const testsText = String.raw`
1. horoscopeMatch("Libra", "Sagittarius") should return "80%".
2. horoscopeMatch("Gemini", "Scorpio") should return "20%".
3. horoscopeMatch("Pisces", "Aries") should return "40%".
4. horoscopeMatch("Capricorn", "Cancer") should return "50%".
5. horoscopeMatch("Aquarius", "Aquarius") should return "100%".
6. horoscopeMatch("Virgo", "Taurus") should return "90%".
7. horoscopeMatch("Leo", "Scorpio") should return "30%".
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