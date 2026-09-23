function pigLatin(str) {

  return str
    .split(" ")
    .map(word => {
      if (/^[aeiou]/.test(word)) {
        return `${word}way`;
      }

      const match = word.match(/^[b-df-hj-np-tv-z]+/i);

      if (match) {
        return match[0][0] === match[0][0].toUpperCase() 
          ? `${word[match[0].length].toUpperCase()}${word.slice(match[0].length + 1)}${match[0].toLowerCase()}ay`
          : `${word.slice(match[0].length)}${match[0]}ay`;
      }
    })
    .join(" ");
}

// --- TEST SUITE ---

const testsText = String.raw`
1. pigLatin("universe") should return "universeway".
2. pigLatin("hello") should return "ellohay".
3. pigLatin("hello universe") should return "ellohay universeway".
4. pigLatin("Hello universe") should return "Ellohay universeway".
5. pigLatin("Pig Latin is fun") should return "Igpay Atinlay isway unfay".
6. pigLatin("The quick brown fox jumped over the lazy dog") should return "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday".
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