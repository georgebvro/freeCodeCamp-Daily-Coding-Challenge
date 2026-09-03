function findOrg(acronym) {
  const ORGANIZATIONS = [
    "National Avocado Storage Authority", 
    "Cats Infiltration Agency", 
    "Fluffy Beanbag Inspectors", 
    "Department Of Jelly", 
    "Wild Honey Organization", 
    "Eating Pancakes Administration"
  ];

  const organizationAcronyms = ORGANIZATIONS.map(organization => 
    organization
      .split(" ")
      .map(word => word[0])
      .join("")
  );

  return ORGANIZATIONS[organizationAcronyms.findIndex(organizationAcronym => organizationAcronym === acronym)];
}

// --- TEST SUITE ---

const testsText = String.raw`
1. findOrg("NASA") should return "National Avocado Storage Authority".
2. findOrg("CIA") should return "Cats Infiltration Agency".
3. findOrg("FBI") should return "Fluffy Beanbag Inspectors".
4. findOrg("DOJ") should return "Department Of Jelly".
5. findOrg("WHO") should return "Wild Honey Organization".
6. findOrg("EPA") should return "Eating Pancakes Administration".
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
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

runTests(testData);