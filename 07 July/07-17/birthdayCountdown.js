function daysUntilBirthday(today, birthday) {
  const todayTpd = Temporal.PlainDate.from(today);
  const { bdMonth, bdDay } = /^(?<bdMonth>\d{1,2})\/(?<bdDay>\d{1,2})$/.exec(birthday).groups;
  let nextBirthdayTpd = todayTpd.with({ month: bdMonth, day: bdDay });

  if (Temporal.PlainDate.compare(todayTpd, nextBirthdayTpd) !== -1) {
    nextBirthdayTpd = nextBirthdayTpd.with({ year: nextBirthdayTpd.year + 1 });
  }

  if (bdMonth === "2" && bdDay === "29") {
    while (!nextBirthdayTpd.inLeapYear) {
      nextBirthdayTpd = nextBirthdayTpd.with({ year: nextBirthdayTpd.year + 1, month: bdMonth, day: bdDay });
    }
  }

  return todayTpd.until(nextBirthdayTpd).days;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. daysUntilBirthday("2026-07-16", "9/7") should return 53.
2. daysUntilBirthday("2026-07-16", "3/22") should return 249.
3. daysUntilBirthday("2026-07-16", "7/16") should return 365.
4. daysUntilBirthday("2024-02-28", "3/1") should return 2.
5. daysUntilBirthday("2023-04-24", "12/30") should return 250.
6. daysUntilBirthday("2024-03-01", "2/29") should return 1460.
7. daysUntilBirthday("2096-03-01", "2/29") should return 2920.
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