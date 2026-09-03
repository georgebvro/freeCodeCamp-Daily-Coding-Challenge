function complementaryDNA(strand) {
  const chemicalBases = {
    'A': 'T',
    'C': 'G',
    'G': 'C',
    'T': 'A'
  };
  let complementaryStrand = "";

  for (const letter of strand)
    complementaryStrand += chemicalBases[letter];

  return complementaryStrand;
}

console.log(complementaryDNA("ACGT"));
console.log(complementaryDNA("ATGCGTACGTTAGC"));
console.log(complementaryDNA("GGCTTACGATCGAAG"));
console.log(complementaryDNA("GATCTAGCTAGGCTAGCTAG"));

// --- TEST SUITE ---

const testsText = `
1. complementaryDNA("ACGT") should return "TGCA".
2. complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG".
3. complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC".
4. complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC".
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