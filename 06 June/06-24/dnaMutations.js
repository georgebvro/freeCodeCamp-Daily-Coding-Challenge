function detectMutations(strand1, strand2) {
  const mutations = [];
  
  strand1
    .split("")
    .forEach((letter, index) => {
      if (letter !== strand2[index]) {
        mutations.push(index);
      }
    })

  return mutations;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. detectMutations("ATCG", "ATGG") should return [2].
2. detectMutations("ATGCGTACGTTAGC", "ATGCATACGATTGC") should return [4, 9, 11].
3. detectMutations("GATCTAGCTAGGCTAGCTAG", "GATCTAGCTAGGCTAGCTAG") should return [].
4. detectMutations("TCAGATCATGGCTAGCTACGATCAGCTAGCATGCATATCGACTG", "TCAGATCATGGCTAGAGCTGATCAGCTAGCATGCATATCGACTG") should return [15, 16, 17, 18].
5. detectMutations("ACGTCAGTACGCACATGACCATTGACATA", "AACGTCAGTACGCACATGACCATTGACAT") should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28].
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