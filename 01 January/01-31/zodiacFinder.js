function getSign(dateStr) {
  const { month, day } = /^\d{4}-(?<month>\d{2})-(?<day>\d{2})$/.exec(dateStr).groups;

  const zodiacSigns = [
    new ZodiacSign("Aries", 3, 21, 4, 19),
    new ZodiacSign("Taurus", 4, 20, 5, 20),
    new ZodiacSign("Gemini", 5, 21, 6, 20),
    new ZodiacSign("Cancer", 6, 21, 7, 22),
    new ZodiacSign("Leo", 7, 23, 8, 22),
    new ZodiacSign("Virgo", 8, 23, 9, 22),
    new ZodiacSign("Libra", 9, 23, 10, 22),
    new ZodiacSign("Scorpio", 10, 23, 11, 21),
    new ZodiacSign("Sagittarius", 11, 22, 12, 21),
    new ZodiacSign("Capricorn", 12, 22, 1, 19),
    new ZodiacSign("Aquarius", 1, 20, 2, 18),
    new ZodiacSign("Pisces", 2, 19, 3, 20)
  ];

  return zodiacSigns
    .find(zodiacSign => 
      zodiacSign.startMonth == month && zodiacSign.startDay <= day 
      || 
      zodiacSign.endMonth == month && day <= zodiacSign.endDay)
    .name;
}

class ZodiacSign {
  constructor(name, startMonth, startDay, endMonth, endDay) {
    this.name = name;
    this.startMonth = startMonth;
    this.startDay = startDay;
    this.endMonth = endMonth;
    this.endDay = endDay;
  }
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getSign("2026-01-31") should return "Aquarius".
2. getSign("2001-06-10") should return "Gemini".
3. getSign("1985-09-07") should return "Virgo".
4. getSign("2023-03-19") should return "Pisces".
5. getSign("2045-11-05") should return "Scorpio".
6. getSign("1985-12-06") should return "Sagittarius".
7. getSign("2025-12-30") should return "Capricorn".
8. getSign("2018-10-08") should return "Libra".
9. getSign("1958-05-04") should return "Taurus".
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