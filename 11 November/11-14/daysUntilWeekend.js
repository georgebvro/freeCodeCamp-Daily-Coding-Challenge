function daysUntilWeekend(dateString) {
  const beginningOfWeekend = 6;
  const dayOfTheWeek = new Date(dateString).getDay();

  if (dayOfTheWeek === 0 || dayOfTheWeek === 6)
    return "It's the weekend!";

  const daysUntilTheWeekend = beginningOfWeekend - dayOfTheWeek;
  return `${daysUntilTheWeekend} day${daysUntilTheWeekend === 1 ? "" : "s"} until the weekend.`;
}

console.log(daysUntilWeekend("2025-11-14"));
console.log(daysUntilWeekend("2025-01-01"));
console.log(daysUntilWeekend("2025-12-06"));
console.log(daysUntilWeekend("2026-01-27"));
console.log(daysUntilWeekend("2026-09-07"));
console.log(daysUntilWeekend("2026-11-29"));

// --- TEST SUITE ---

const testsText = `
1. daysUntilWeekend("2025-11-14") should return "1 day until the weekend.".
2. daysUntilWeekend("2025-01-01") should return "3 days until the weekend.".
3. daysUntilWeekend("2025-12-06") should return "It's the weekend!".
4. daysUntilWeekend("2026-01-27") should return "4 days until the weekend.".
5. daysUntilWeekend("2026-09-07") should return "5 days until the weekend.".
6. daysUntilWeekend("2026-11-29") should return "It's the weekend!".
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