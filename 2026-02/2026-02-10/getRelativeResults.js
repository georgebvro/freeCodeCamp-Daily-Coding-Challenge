function getRelativeResults(results) {
  const resultsTemporalDurations = results.map(result => {
    const { hours, minutes, seconds } = /^(?<hours>\d):(?<minutes>\d{2}):(?<seconds>\d{2})$/.exec(result).groups;

    return Temporal.Duration.from({ hours: hours, minutes: minutes, seconds: seconds });
  })

  return resultsTemporalDurations
    .map((result, index) => {
      if (index === 0)
        return "0";

      const timeBehindWinner = result.subtract(resultsTemporalDurations[0]);

      return `+${timeBehindWinner.minutes}:${timeBehindWinner.seconds.toString().padStart(2, "0")}`;
    });
}

console.log(getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]));
console.log(getRelativeResults(["1:00:01", "1:00:05", "1:00:10"]));
console.log(getRelativeResults(["1:10:06", "1:10:23", "1:10:48", "1:12:11"]));
console.log(getRelativeResults(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"]));
console.log(getRelativeResults(["2:01:15", "2:10:45", "2:10:53", "2:11:04", "2:11:55", "2:13:27", "2:14:30", "2:15:10"]));

// --- TEST SUITE ---

const testsText = String.raw`
1. getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]) should return ["0", "+0:38", "+1:33"].
2. getRelativeResults(["1:00:01", "1:00:05", "1:00:10"]) should return ["0", "+0:04", "+0:09"].
3. getRelativeResults(["1:10:06", "1:10:23", "1:10:48", "1:12:11"]) should return ["0", "+0:17", "+0:42", "+2:05"].
4. getRelativeResults(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"]) should return ["0", "+0:02", "+1:01", "+2:17", "+2:45", "+3:03", "+3:59", "+4:18", "+7:06", "+13:07"].
5. getRelativeResults(["2:01:15", "2:10:45", "2:10:53", "2:11:04", "2:11:55", "2:13:27", "2:14:30", "2:15:10"]) should return ["0", "+9:30", "+9:38", "+9:49", "+10:40", "+12:12", "+13:15", "+13:55"].
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