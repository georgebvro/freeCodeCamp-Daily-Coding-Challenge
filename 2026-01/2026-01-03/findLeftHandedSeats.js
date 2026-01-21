function findLeftHandedSeats(table) {
  let possibleSeats = 0;

  table.forEach((row, rowIndex) => {
    const seatToCheckIndexOffset = rowIndex === 0 ? 1 : -1;

    row.forEach((seat, seatIndex) => {
      const seatToCheckIndex = seatIndex + seatToCheckIndexOffset;

      if (seat === "U" && row[seatToCheckIndex] !== "R")
        ++possibleSeats;
    });
  });

  return possibleSeats;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]) should return 2.
2. findLeftHandedSeats([["U", "U", "U", "U"], ["U", "U", "U", "U"]]) should return 8.
3. findLeftHandedSeats([["U", "R", "U", "R"], ["L", "R", "R", "U"]]) should return 0.
4. findLeftHandedSeats([["L", "U", "R", "R"], ["L", "U", "R", "R"]]) should return 1.
5. findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]]) should return 5.
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