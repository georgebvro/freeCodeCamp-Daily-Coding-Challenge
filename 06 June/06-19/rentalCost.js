function getRentalCost(rented, returned, tier) {
  const TIER_PRICING = {
    1: { baseCost: 4.99, lateFeePerDay: 3.99 },
    3: { baseCost: 3.99, lateFeePerDay: 2.99 },
    7: { baseCost: 2.99, lateFeePerDay: 0.99 }
  };
  const rentedTpdt = Temporal.PlainDateTime.from(rented.slice(0, -1));
  const returnedTpdt = Temporal.PlainDateTime.from(returned.slice(0, -1));
  
  let dueBackTpdt = rentedTpdt.add({ days: tier }).with({ hour: 12, minute: 0, seconds: 0 });
  
  const overdueTd = dueBackTpdt.until(returnedTpdt);

  let daysOverdue = 0;

  if (overdueTd.sign === 1) {
    daysOverdue = overdueTd.days + (overdueTd.hours || overdueTd.minutes || overdueTd.seconds ? 1 : 0);
  }

  return `$${(TIER_PRICING[tier]['baseCost'] + daysOverdue * TIER_PRICING[tier]['lateFeePerDay']).toFixed(2)}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getRentalCost("2026-06-18T18:30:00Z", "2026-06-19T10:30:00Z", 1) should return "$4.99".
2. getRentalCost("2026-06-18T14:30:00Z", "2026-06-20T12:30:00Z", 1) should return "$12.97".
3. getRentalCost("2026-06-18T10:15:00Z", "2026-06-18T19:45:00Z", 3) should return "$3.99".
4. getRentalCost("2026-06-18T15:20:00Z", "2026-06-23T08:10:00Z", 3) should return "$9.97".
5. getRentalCost("2026-06-18T12:00:00Z", "2026-06-25T12:00:00Z", 7) should return "$2.99".
6. getRentalCost("2026-06-18T08:00:00Z", "2027-06-18T14:00:00Z", 7) should return "$358.40".
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