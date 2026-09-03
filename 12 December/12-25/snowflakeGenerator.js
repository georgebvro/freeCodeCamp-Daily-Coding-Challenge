function generateSnowflake(crystals) {

  return crystals
    .split("\n")
    .map(snowflakePart => snowflakePart + snowflakePart.split("").reverse().join(""))
    .join("\n");
}
/*
console.log(generateSnowflake("* \n *\n* "), "\n");
console.log(generateSnowflake("X=~"), "\n");
console.log(generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  "), "\n");
console.log(generateSnowflake("*   *\n * * \n* * *\n * * \n*   *"), "\n");
console.log(generateSnowflake("*  -\n * -\n*  -"), "\n");
*/
// --- TEST SUITE ---

const testsText = String.raw`
1. generateSnowflake("* \n *\n* ") should return "*  *\n ** \n*  *".
2. generateSnowflake("X=~") should return "X=~~=X".
3. generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  ") should return " X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X ".
4. generateSnowflake("*   *\n * * \n* * *\n * * \n*   *") should return "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *".
5. generateSnowflake("*  -\n * -\n*  -") should return "*  --  *\n * -- * \n*  --  *".
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