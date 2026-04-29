function capitalizeFibonacci(str) {
  const FIBONACCI_START_SEQUENCE = [0, 1];
  const fibonacciSequence = generateFibonacciSequence(FIBONACCI_START_SEQUENCE, str.length - 1);

  return str
    .split("")
    .map((character, index) => fibonacciSequence.includes(index) ? character.toUpperCase() : character.toLowerCase())
    .join("");
}

const generateFibonacciSequence = (sequence, n) => {
  if (sequence.at(-1) >= n)
    return sequence;

  return generateFibonacciSequence(sequence.concat(sequence.at(-2) + sequence.at(-1)), n);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. capitalizeFibonacci("hello world") should return "HELLo woRld".
2. capitalizeFibonacci("HELLO WORLD") should return "HELLo woRld".
3. capitalizeFibonacci("hello, world!") should return "HELLo, wOrld!".
4. capitalizeFibonacci("The quick brown fox jumped over the lazy dog.") should return "THE qUicK broWn fox jUmped over thE lazy dog.".
5. capitalizeFibonacci("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl.") should return "LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl.".
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